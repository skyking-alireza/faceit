import json

from django.core.exceptions import ValidationError
from django.db import models
from django import forms
from django.urls import reverse
from django.shortcuts import redirect, render, get_object_or_404
from django.utils import timezone
from wagtail.admin.panels import FieldPanel,MultiFieldPanel,InlinePanel,PageChooserPanel
from wagtail.contrib.settings.models import BaseSiteSetting
from wagtail.contrib.settings.models import register_setting
from wagtail.fields import RichTextField, StreamField
from wagtail.models import Page, Orderable
from wagtail.snippets.models import register_snippet
from wagtail.search import index
from wagtail.contrib.routable_page.models import RoutablePageMixin, route
from modelcluster.models import ClusterableModel
from modelcluster.fields import ParentalKey, ParentalManyToManyField
from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.models import Tag, TaggedItemBase
from newsroom.blocks import BaseStreamBlock, HtmlBlock
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponse
from oldfaceit import models as omodel
from datetime import timedelta, datetime
from .utils import get_ip
from wagtail.contrib.forms.models import AbstractFormField, AbstractForm
from django.http import JsonResponse
#from editorial import models as emodel

#from .forms import CommentForm
# Create your models here.

class PostPageTag(TaggedItemBase):
    content_object = ParentalKey('PostPage', related_name='tagged_items', on_delete=models.CASCADE)
class HomePageTag(TaggedItemBase):
    content_object = ParentalKey('HomePage', related_name='tagged_items', on_delete=models.CASCADE)
class EditorsChoice(Orderable, models.Model):
    page = ParentalKey(
        'HomePage', related_name='editors_choice', on_delete=models.CASCADE
    )
    chosen_post = models.ForeignKey(
        'PostPage', related_name='chosen_post', on_delete=models.CASCADE
    )
    panels = [PageChooserPanel('chosen_post'),]

class HotPosts(Orderable, models.Model):
    page = ParentalKey(
        'HomePage', related_name='hot_posts', on_delete=models.CASCADE
    )
    hot_post = models.ForeignKey(
        'PostPage', related_name='hot_post', on_delete=models.CASCADE
    )
    panels = [PageChooserPanel('hot_post'),]
class BreakingNews(Orderable, models.Model):
    page = ParentalKey(
        'HomePage', related_name='breaking_news', on_delete=models.CASCADE
    )
    br_post = models.ForeignKey(
        'PostPage', related_name='br_post', on_delete=models.CASCADE
    )
    panels = [PageChooserPanel('br_post'),]
class HomePage(Page):
    sticky_posts = None
    show_services = models.BooleanField(default=False)
    tags = ClusterTaggableManager(through=HomePageTag, blank=True)
    video_index_page = models.ForeignKey('PostIndexPage', related_name='home', on_delete=models.SET_NULL, blank=True, null=True)
    content_panels = Page.content_panels + [
        PageChooserPanel('video_index_page'),
        InlinePanel(
            'editors_choice', label="Editor's Choice",
                panels=None, min_num=0),
        InlinePanel(
            'hot_posts', label="Hot Posts",
                panels=None, min_num=0),
        InlinePanel(
            'breaking_news', label="Breaking News",
                panels=None, min_num=0),
        FieldPanel('tags'),
        FieldPanel('show_services')
        ]
    def top_posts(self):
        posts = PostPage.objects.filter(stick_to_top=True).live().order_by('-date_published')
        if posts.count() > 4:
            return posts[:5]
        return False
    def indexed_posts(self):
        return PostPage.objects.filter(index_at_home=True).live().order_by('-date_published')
    def pinned_post(self):
        pinpost = PostPage.objects.filter(pin_to_top=True).live().order_by('-date_published')
        if pinpost.count() > 0:
            return pinpost[0]
        return False
    def get_last_video(self):
        if self.video_index_page:
            list = PostPage.objects.live().descendant_of(self.video_index_page).order_by('-date_published')
            if list.count() > 1:
                return list[0]
        return False

    def get_video_list(self):
        if self.video_index_page:
            list = PostPage.objects.live().descendant_of(self.video_index_page).order_by('-date_published')
            if list.count() > 4:
                return list[1:4]
        return False

    def get_context(self, request):
        hit_counter, created = HitCounter.objects.get_or_create(home=self)
        hit_counter.new_hit(request)
        context = super(HomePage, self).get_context(request)
        all_posts = self.indexed_posts()
        paginator = Paginator(all_posts, 10)
        page = request.GET.get('page')
        try:
            posts = paginator.page(page)
        except PageNotAnInteger:
            posts = paginator.page(1)
        except EmptyPage:
            posts = paginator.page(paginator.num_pages)
        index = posts.number -1
        max_index = len(paginator.page_range)
        start_index = index - 3 if index >= 3 else 0
        end_index = index + 3 if index <= max_index - 3 else max_index
        context['page_range'] = list(paginator.page_range)[start_index:end_index]
        context['last_video'] = self.get_last_video()
        context['video_list'] = self.get_video_list()
        context['top_posts'] = self.top_posts()
        context['pinned_post'] = self.pinned_post()
        context['posts'] = posts
        return context

    def get_editors_choice(self):
        chosen_posts = [
            n.chosen_post for n in self.editors_choice.all()
        ]
        return chosen_posts
    def get_hot_posts(self):
        hot_posts = [
            n.hot_post for n in self.hot_posts.all()
        ]
        return hot_posts
    def get_breaking_news(self):
        chosen_posts = [
            n.br_post for n in self.breaking_news.all()
        ]
        return chosen_posts
    
    def get_tags(self):
        """
        Similar to the authors function above we're returning all the tags that
        are related to the blog post into a list we can access on the template.
        We're additionally adding a URL to access BlogPage objects with that tag
        """
        tags = self.tags.all()
        # $$ CHANGE URL STRUCTURE FOR TAGS
        for tag in tags:
            tag.url =  '/'.join(s.strip('/') for s in [
                self.url,
                'tag',
                tag.slug
            ])
        return tags

    def get_services(self):
        return ServicePage.objects.live()
        


class SidePanel(Orderable):
    index_page = models.ForeignKey('PostIndexPage', related_name='Panel', on_delete=models.CASCADE)
    view_type_choices = [('media', 'Media'), ('list', 'List')]
    view_type = models.CharField(max_length=31, choices=view_type_choices)
    title = models.CharField(max_length=255)
    number_of_posts = models.IntegerField(default=5)
    side_bar = ParentalKey('SideBar', related_name='side_panels', on_delete=models.CASCADE)
    panels = [
        PageChooserPanel('index_page'),
        FieldPanel('title'),
        FieldPanel('view_type'),
        FieldPanel('number_of_posts'),
    ]
    def get_posts(self):
        return PostPage.objects.descendant_of(self.index_page).live().order_by('-date_published')[:self.number_of_posts]

@register_setting
class SideBar(ClusterableModel, BaseSiteSetting):
    unorganized_panel_title = models.CharField(max_length=63, blank=True, null=True)
    unorganized_panel_number_of_posts = models.IntegerField(default=5, blank=True)
    unorganized_panel_show = models.BooleanField(default=False)
    panels = [
        FieldPanel('unorganized_panel_show'),
        FieldPanel('unorganized_panel_title'),
        FieldPanel('unorganized_panel_number_of_posts'),
        InlinePanel('side_panels', label='Organized Panels'),
    ]
    def get_unorganized_panel(self):
        return PostPage.objects.filter(show_in_menus=True).order_by('-date_published')[:self.unorganized_panel_number_of_posts]
    def get_panels(self):
        return SidePanel.objects.filter(side_bar=self)

class StaticLinkHeader(Orderable):
    header = ParentalKey('Header', related_name='static_header_links', on_delete=models.CASCADE)
    link = models.ForeignKey('StaticLink', related_name='header', on_delete=models.CASCADE)
    parent_link = models.ForeignKey('StaticLink', related_name='childs' ,on_delete=models.CASCADE, blank=True, null=True)
    panels = [FieldPanel('link'),FieldPanel('parent_link')]

class StaticLinkFooter(Orderable):
    footer = ParentalKey('Footer', related_name='static_footer_links', on_delete=models.CASCADE)
    link = models.ForeignKey('StaticLink', related_name='footer', on_delete=models.CASCADE)
    panels = [FieldPanel('link'),]

@register_snippet
class StaticLink(models.Model):
    title = models.CharField(max_length=63)
    url = models.URLField()
    panels = [FieldPanel('title'), FieldPanel('url')]
    def __str__(self):
        return self.title

@register_setting
class Header(ClusterableModel, BaseSiteSetting):
    panels = [InlinePanel('static_header_links', label = "Links", panels=None),]
    def get_links(self):
        links = StaticLinkHeader.objects.filter(header=self)
        return links

@register_setting
class Footer(ClusterableModel, BaseSiteSetting):
    show_subscribe_form = models.BooleanField(default=True)
    about_text = models.TextField(blank=True, null=True)
    panels = [
        FieldPanel('show_subscribe_form'),        
        InlinePanel('static_footer_links', label = "Links", panels=None),
        FieldPanel('about_text')
        ]
    def get_links(self):
        links = StaticLinkFooter.objects.filter(footer=self)
        return links
@register_setting
class PromotionSettings(BaseSiteSetting):
    header_left_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    header_left_url = models.URLField(blank=True)
    header_left_script = StreamField(
        HtmlBlock, verbose_name="header left script", blank=True, null=True,use_json_field=True
    )
    header_right_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    header_right_url = models.URLField(blank=True)
    header_right_script = StreamField(
        HtmlBlock, verbose_name="header right Ad script", blank=True, null=True,use_json_field=True
    )

    home1_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    home1_url = models.URLField(blank=True)
    home1_script = StreamField(
        HtmlBlock, verbose_name="Home1 script", blank=True, null=True,use_json_field=True
    )
    home2_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    home2_url = models.URLField(blank=True)
    home2_script = StreamField(
        HtmlBlock, verbose_name="Home2 script", blank=True, null=True,use_json_field=True
    )
    home3_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    home3_url = models.URLField(blank=True)
    home3_script = StreamField(
        HtmlBlock, verbose_name="Home3 script", blank=True, null=True,use_json_field=True
    )
    
    newspage_sidebar_script = StreamField(
        HtmlBlock, verbose_name="Newspage sidebar Script", blank=True, null=True,use_json_field=True
    )

    bottom_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    bottom_url = models.URLField(blank=True)
    bottom_script = StreamField(
        HtmlBlock, verbose_name="Bottom Ad script", blank=True, null=True,use_json_field=True
    )
    top_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    top_url = models.URLField(blank=True)
    top_script = StreamField(
        HtmlBlock, verbose_name="Top Ad script", blank=True, null=True,use_json_field=True
    )
    left_top_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    left_top_url = models.URLField(blank=True)
    left_top_script = StreamField(
        HtmlBlock, verbose_name="Left Top Ad script", blank=True, null=True,use_json_field=True
    )
    left_bottom_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
    )
    left_bottom_url = models.URLField(blank=True)
    left_bottom_script = StreamField(
        HtmlBlock, verbose_name="Left Bottom Ad script", blank=True, null=True,use_json_field=True
    )
    list_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
    )
    list_url = models.URLField(blank=True)
    list_script = StreamField(
        HtmlBlock, verbose_name="List Ad script", blank=True, null=True,use_json_field=True
    )
    list2_script = StreamField(
        HtmlBlock, verbose_name="List2 Ad script", blank=True, null=True,use_json_field=True
    )
    news_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
    )
    news_url = models.URLField(blank=True)
    news_script = StreamField(
        HtmlBlock, verbose_name="News Ad script", blank=True, null=True,use_json_field=True
    )
    news_bottom1_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
    )
    news_bottom1_url = models.URLField(blank=True)
    news_bottom1_script = StreamField(
        HtmlBlock, verbose_name="News Buttom1 Ad script", blank=True, null=True,use_json_field=True
    )
    news_bottom2_img = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
    )
    news_bottom2_url = models.URLField(blank=True)
    news_bottom2_script = StreamField(
        HtmlBlock, verbose_name="News Buttom2 Ad script", blank=True, null=True,use_json_field=True
    )
    panels = [
        FieldPanel('header_left_img'),
        FieldPanel('header_left_url'),
        FieldPanel('header_left_script'),
        FieldPanel('header_right_img'),
        FieldPanel('header_right_url'),
        FieldPanel('header_right_script'),
        FieldPanel('home1_img'),
        FieldPanel('home1_url'),
        FieldPanel('home1_script'),
        FieldPanel('home2_img'),
        FieldPanel('home2_url'),
        FieldPanel('home2_script'),
        FieldPanel('home3_img'),
        FieldPanel('home3_url'),
        FieldPanel('home3_script'),
        FieldPanel('newspage_sidebar_script'),
        FieldPanel('left_top_img'),
        FieldPanel('left_top_url'),
        FieldPanel('left_top_script'),
        FieldPanel('left_bottom_img'),
        FieldPanel('left_bottom_url'),
        FieldPanel('left_bottom_script'),
        FieldPanel('list_img'),
        FieldPanel('list_url'),
        FieldPanel('list_script'),
        FieldPanel('list2_script'),
        FieldPanel('news_img'),
        FieldPanel('news_url'),
        FieldPanel('news_script'),
        FieldPanel('news_bottom1_img'),
        FieldPanel('news_bottom1_url'),
        FieldPanel('news_bottom1_script'),
        FieldPanel('news_bottom2_img'),
        FieldPanel('news_bottom2_url'),
        FieldPanel('news_bottom2_script'),
        FieldPanel('bottom_img'),
        FieldPanel('bottom_url'),
        FieldPanel('bottom_script'),
    ]

@register_snippet
class Comment(models.Model):
    post = models.ForeignKey('PostPage', related_name="comments", on_delete=models.CASCADE)
    text = models.TextField(verbose_name='متن نظر')
    name = models.CharField(verbose_name='نام نویسنده', max_length=63, blank=True, default="ناشناس")
    email = models.EmailField(verbose_name='آدرس ایمیل', blank=True, null=True, default=None)
    date = models.DateTimeField(default=timezone.now)
    published = models.BooleanField(default=False)
    reply_to = models.ForeignKey('Comment', related_name="child", on_delete=models.CASCADE, blank=True, null=True)
    ip = models.GenericIPAddressField(blank=True, null=True)
    panels=[PageChooserPanel('post'), FieldPanel('text'), FieldPanel('name'), FieldPanel('email'), FieldPanel('date'), FieldPanel('published'), FieldPanel('reply_to'), FieldPanel('ip')]

    def __str__(self):
        return '{} - {}'.format(self.post.title, self.text)

@register_setting
class SocialMedia(BaseSiteSetting):
    facebook_link = models.URLField(blank=True, null=True)
    facebook_followers = models.IntegerField(blank=True, null=True)
    instagram_link = models.URLField(blank=True, null=True)
    instagram_followers = models.IntegerField(blank=True, null=True)
    twitter_link = models.URLField(blank=True, null=True)
    twitter_followers = models.IntegerField(blank=True, null=True)
    aparat_link = models.URLField(blank=True, null=True)
    aparat_followers = models.IntegerField(blank=True, null=True)
    panles = [
        FieldPanel('facebook_link'),
        FieldPanel('facebook_followers'),
        FieldPanel('instagram_link'),
        FieldPanel('instagram_followers'),
        FieldPanel('twitter_link'),
        FieldPanel('twitter_followers'),
        FieldPanel('aparat_link'),
        FieldPanel('aparat_followers'),
    ]
class PostAuthors(Orderable, models.Model):
    page = ParentalKey(
        'PostPage', related_name='post_authors', on_delete=models.CASCADE
    )
    people = models.ForeignKey(
        'editorial.People', related_name='author_post', on_delete=models.CASCADE
    )
    panels = [
        FieldPanel('people')
    ]

class RelatedPosts(Orderable, models.Model):
    page = ParentalKey(
        'PostPage', related_name='related_posts', on_delete=models.CASCADE
    )
    connected_post = models.ForeignKey(
        'PostPage', related_name='connected_post', on_delete=models.CASCADE
    )
    panels = [PageChooserPanel('connected_post'),]

class PostPage(Page):
    old_id = models.PositiveIntegerField(blank=True, null=True)
    main_image = models.CharField(max_length=500, blank=True, null=True)
    #reference_link = models.URLField(max_length=512, blank=True, null=True)
    reference_link = models.CharField(max_length=512, blank=True, null=True)
    reference_title = models.CharField(max_length=255, blank=True, null=True)
    
    #simple_body = models.TextField(blank=True, null=True)
    def hits(self):
        if self.counter.count() > 0:
            return self.counter.all()[0].hits
        return 0
    @property
    def category(self):
        return self.get_parent().category

    def get_absolute_url(self):
        if self.old_id:
            return reverse('old_post_with_slug', args=[self.old_id, self.slug])
        else:
            return self.url

    def get_url(self):
        if self.old_id:
            return reverse('old_post_with_slug', args=[self.old_id, self.slug])
        else:
            return self.url
    introduction = models.TextField(
        max_length=511,
        help_text='Text to describe the page',
        blank=True)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        help_text='Landscape mode only; horizontal width between 1000px and 3000px.'
    )
    body = StreamField(
        BaseStreamBlock(), verbose_name="Page body", blank=True,use_json_field=True
    )
    subtitle = models.CharField(blank=True, max_length=255)
    tags = ClusterTaggableManager(through=PostPageTag, blank=True)
    date_published = models.DateField(
        "Date article published", blank=True, null=True, default=timezone.now
    )
    stick_to_top = models.BooleanField(default=False)
    pin_to_top = models.BooleanField(default=False)
    index_at_home = models.BooleanField(default=True)
    comment_form = None
    promote_panels = [
        MultiFieldPanel(Page.promote_panels, "Common page configurations"),
        FieldPanel('stick_to_top'),
        FieldPanel('index_at_home'),
        FieldPanel('pin_to_top'),
    ]
    content_panels = Page.content_panels + [
        FieldPanel('subtitle', classname="full"),
        FieldPanel('introduction', classname="full"),
        FieldPanel('image'),
        FieldPanel('body'),
        FieldPanel('date_published'),
        InlinePanel(
            'post_authors', label="Author(s)",
            panels=None, min_num=1),
        InlinePanel(
            'related_posts', label="Related Posts",
                panels=None, min_num=0),
        FieldPanel('tags'),
        FieldPanel('reference_link'),
        FieldPanel('reference_title'),
    ]
    settings_panels = Page.settings_panels + [
        FieldPanel('old_id'),
        FieldPanel('main_image'),
    ]

    search_fields = Page.search_fields + [
        index.SearchField('body'),
        index.SearchField('old_id'),
    ]

    def authors(self):
        authors = [
            n.people for n in self.post_authors.all()
        ]
        return authors



    def get_related_posts(self):
        related_posts = [
            n.connected_post for n in self.related_posts.all()
        ]
        return related_posts

    @property
    def get_tags(self):
        """
        Similar to the authors function above we're returning all the tags that
        are related to the blog post into a list we can access on the template.
        We're additionally adding a URL to access BlogPage objects with that tag
        """
        tags = self.tags.all()
        # $$ CHANGE URL STRUCTURE FOR TAGS
        for tag in tags:
            tag.url = '/' + '/'.join(s.strip('/') for s in [
                self.get_parent().url,
                'tags',
                tag.slug
            ])
        return tags

    @property
    def comments_count(self):
        return self.comments.filter(published=True).count()

    def get_type(self):
        return "PostPage"
    def published_comments(self):
        return self.comments.filter(published=True, reply_to__isnull=True)
        
    def set_comment_form(self, form):
        self.comment_form = form
    def get_context(self, request):
        hit_counter, created = HitCounter.objects.get_or_create(post=self)
        hit_counter.new_hit(request)
        context = super(PostPage, self).get_context(request)
        if self.comment_form:
            context['comment_form'] = self.comment_form
            return context
        return context
    def get_sitemap_urls(self, request):
        return [{'location': 'https://faceit.ir'+self.get_url(),'lastmod': timezone.make_aware(datetime.combine(self.date_published,datetime.min.time())) , 'changefreq':'daily', }]

    def clean(self):
        if self.image.width < 1200:
            raise ValidationError(
                ['حداقل طول تصویر می بایست 1200 پیکسل باشد'],
                code='invalid_aspect_ratio',
            )
        return super().clean()


    def serve(self, request):
        if request.POST.get('action') == 'POST':
            post_id=request.POST.get('postid')
            post = get_object_or_404(PostPage, pk=post_id)
            new_comment = Comment()
            new_comment.post = post
            new_comment.name = request.POST.get('name')
            new_comment.text = request.POST.get('text')
            new_comment.email = request.POST.get('email')
            new_comment.reply_to = request.POST.get('reply_to')
            x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
            if x_forwarded_for:
                ip = x_forwarded_for.split(',')[0]
            else:
                ip = request.META.get('REMOTE_ADDR')
            new_comment.ip = ip
            new_comment.save()
            response_data['status'] = 'done'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
                )
        return super().serve(request)
    # Specifies parent to BlogPage as being BlogIndexPages
    #parent_page_types = ['BlogIndexPage']

    # Specifies what content types can exist as children of BlogPage.
    # Empty list means that no child content types are allowed.
    subpage_types = []
    class Meta:
        indexes=[models.Index(fields=['old_id',]), models.Index(fields=['date_published'])]
        ordering = ['-date_published',]
       
class PostIndexPage(RoutablePageMixin, Page):
    introduction = models.TextField(
        help_text='Text to describe the page',
        blank=True)
    category = models.ForeignKey('Category', null=True, blank=True, on_delete=models.SET_NULL)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        help_text='Landscape mode only; horizontal width between 1000px and 3000px.'
    )

    content_panels = Page.content_panels + [
        FieldPanel('introduction', classname="full"),
        FieldPanel('image'),
        FieldPanel('category')
    ]

    subpage_types = ['PostPage']

    def children(self):
        return self.get_children().specific().live()
    def get_children_with_tag(self, tag=None):
        posts= PostPage.objects.live().descendant_of(self).order_by('-date_published')
        if tag:
            posts=posts.filter(tags=tag)
        return posts
    def get_context(self, request):
        context = super(PostIndexPage, self).get_context(request)
        all_posts = PostPage.objects.descendant_of(self).live().order_by('-date_published')
        
        paginator = Paginator(all_posts, 10)
        page = request.GET.get('page')
        try:
            posts = paginator.page(page)
        except PageNotAnInteger:
            posts = paginator.page(1)
        except EmptyPage:
            posts = paginator.page(paginator.num_pages)
        index = posts.number -1
        max_index = len(paginator.page_range)
        start_index = index - 3 if index >= 3 else 0
        end_index = index + 3 if index <= max_index - 3 else max_index
        context['page_range'] = list(paginator.page_range)[start_index:end_index]
        context['posts'] = posts
        return context

    @route(r'^tags/([\w-]+)/$', name='cat_tag_archive')
    def tag_archive(self, request, tag=None):
        try:
            tag = Tag.objects.get(slug=tag)
        except Tag.DoesNotExist:
            return redirect(self.url)
        posts = self.get_children_with_tag(tag=tag)
        context = super(PostIndexPage, self).get_context(request)
        context['posts'] = posts
        context['tag'] = tag
        return render(request, 'front/post_index_page.html', context)
@register_snippet
class Category(models.Model):
    title=models.CharField(max_length=254)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    panels = [
    FieldPanel('title'),
    FieldPanel('image')
    ]
    def __str__(self):
        return '{}'.format(self.title)
    class Meta:
        verbose_name_plural = 'Categories'

class TagIndexPage(RoutablePageMixin, Page):
    introduction = models.TextField(
        help_text='Text to describe the page',
        blank=True)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        help_text='Landscape mode only; horizontal width between 1000px and 3000px.'
    )

    content_panels = Page.content_panels + [
        FieldPanel('introduction', classname="full"),
        FieldPanel('image'),
    ]

    subpage_types = []

    def get_posts(self, tag=None):
        posts= PostPage.objects.live().order_by('-date_published')
        if tag:
            posts=posts.filter(tags=tag)
        return posts

    @route(r'^([\w-]+)/$', name='tag_archive')
    def tag_archive(self, request, tag=None):
        try:
            tag = Tag.objects.get(slug=tag)
        except Tag.DoesNotExist:
            return redirect('/')
        posts = self.get_posts(tag=tag)
        context = super(TagIndexPage, self).get_context(request)
        context['posts'] = posts
        context['tag'] = tag
        return render(request, 'front/post_index_page.html', context)

# $$ contact form in author page
class AuthorPage(RoutablePageMixin, Page):
    author = models.ForeignKey('editorial.People', on_delete=models.CASCADE, related_name="post_index")
    content_panels = Page.content_panels + [
        FieldPanel('author'),
    ]
    def get_posts(self):
        postauthors_records = PostAuthors.objects.filter(people=self.author).order_by('-page_id')
        posts = []
        for p in postauthors_records:
            posts.append(p.page.specific)
        return posts
    def get_context(self, request):
        context = super(AuthorPage, self).get_context(request)
        all_posts = []
        all_posts = self.get_posts()
        paginator = Paginator(all_posts, 10)
        page = request.GET.get('page')
        try:
            posts = paginator.page(page)
        except PageNotAnInteger:
            posts = paginator.page(1)
        except EmptyPage:
            posts = paginator.page(paginator.num_pages)
        index = posts.number -1
        max_index = len(paginator.page_range)
        start_index = index - 3 if index >= 3 else 0
        end_index = index + 3 if index <= max_index - 3 else max_index
        context['page_range'] = list(paginator.page_range)[start_index:end_index]
        context['posts'] = posts
        return context

@register_snippet
class Subscribers(models.Model):
    email = models.EmailField()
    subscribe_datetime = models.DateTimeField(auto_now_add=True)
    panels = [FieldPanel('email'),]
    def __str__(self):
        return self.email
    class Meta:
        verbose_name = 'Subscriber'
        verbose_name_plural = 'Subscribers'


class ServiceFormField(AbstractFormField):
    page = ParentalKey('ServicePage', on_delete=models.CASCADE, related_name='form_fields')


class ServicePage(AbstractForm):
    intro = RichTextField(blank=True)
    thank_you_text = RichTextField(blank=True)
    body = StreamField(
        BaseStreamBlock(), verbose_name="Page body", blank=True, null=True,use_json_field=True
    )
    resume = RichTextField(verbose_name="Resume", blank=True, null=True)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        help_text='Landscape mode only; horizontal width between 1000px and 3000px.'
    )
    phone_number = models.CharField(max_length=64, blank=True, null=True)
    whatsapp_link = models.URLField(blank=True, null=True)
    telegram_link = models.URLField(blank=True, null=True)

    content_panels = AbstractForm.content_panels + [
        FieldPanel('intro', classname="full"),
        FieldPanel('body'),
        FieldPanel('image'),
        FieldPanel('resume', classname="full"),
        FieldPanel('phone_number'),
        FieldPanel('whatsapp_link'),
        FieldPanel('telegram_link'),
        InlinePanel('form_fields', label="Form fields"),
        FieldPanel('thank_you_text', classname="full"),   
    ]
    def get_context(self, request, *args, **kwargs):
        hit_counter, created = HitCounter.objects.get_or_create(service=self)
        hit_counter.new_hit(request)
        context = super(ServicePage, self).get_context(request)
        return context

class HitCounter(models.Model):
    post= models.ForeignKey(PostPage, related_name='counter', editable=False, on_delete=models.CASCADE, blank=True, null=True)
    home= models.ForeignKey(HomePage, related_name='counter', editable=False, on_delete=models.CASCADE, blank=True, null=True)
    service= models.ForeignKey(ServicePage, related_name='counter', editable=False, on_delete=models.CASCADE, blank=True, null=True)
    hits = models.PositiveIntegerField(default=0)
    hits24h = models.PositiveIntegerField(default=0)
    hits4h = models.PositiveIntegerField(default=0)
    hits4h_update = models.DateTimeField(auto_now_add=True)
    
    def name(self):
        if self.post:
            return self.post.title
        if self.service:
            return self.service.title
        return 'HOME'
    def trending_update(self):
        period= timezone.now() - timedelta(hours=4)
        self.hits4h = self.hit_object.filter(created__gte=period).count()
        self.hits4h_update = timezone.now()
        self.save()

    def get_active_hits(self):
        period = timezone.now() - timedelta(days=1)
        return self.hit_object.filter(created__gte=period)
    def get_hits_24h(self):
        period = timezone.now() - timedelta(days=1)
        self.hits24h = Hit.objects.filter(hit_counter=self, created__gte=period).count()
        self.save()
        return self.hits24h
    def new_hit(self, request):
        if request.session.session_key is None:
            request.session.save()
        session_key = request.session.session_key
        qs = self.get_active_hits()
        if not qs.filter(session=session_key):
            req_ip = get_ip(request)
            req_user_agent = request.META.get('HTTP_USER_AGENT', '')[:255]
            hit = Hit(session=session_key, hit_counter=self, ip=req_ip,
                    user_agent=req_user_agent,)
            hit.save()
            self.hits=models.F('hits') + 1
            self.save()

class Hit(models.Model):
    created = models.DateTimeField(editable=False, auto_now_add=True, db_index=True)
    ip = models.CharField(max_length=40, editable=False, db_index=True)
    session = models.CharField(max_length=40, editable=False, db_index=True)
    user_agent = models.CharField(max_length=255, editable=False)
    hit_counter = models.ForeignKey(HitCounter, related_name='hit_object',editable=False, on_delete=models.CASCADE)

    def __str__(self):
        return 'Hit: %s' % self.id

class SearchQuery(models.Model):
    query = models.CharField(max_length=128, db_index=True)
    last_use = models.DateTimeField(auto_now=True, db_index=True)
    repeat = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.query

class FormField(AbstractFormField):
    page = ParentalKey('ContactPage', on_delete=models.CASCADE, related_name='form_fields')


class ContactPage(AbstractForm):
    intro = RichTextField(blank=True)
    thank_you_text = RichTextField(blank=True)
    phone = models.CharField(max_length=31, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    email = models.EmailField(blank=True, null=True)

    content_panels = AbstractForm.content_panels + [
        FieldPanel('intro', classname="full"),
        InlinePanel('form_fields', label="Form fields"),
        FieldPanel('thank_you_text', classname="full"),   
    ]

class Robots(Page):
    body = RichTextField()

    search_fields = Page.search_fields + [
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('body'),
    ]

    def save(self, *args, **kwargs):
        return super().save(*args, **kwargs)