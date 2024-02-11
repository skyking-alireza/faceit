from django.db import models
from modelcluster.models import ClusterableModel
from wagtail.admin.panels import FieldPanel,FieldRowPanel,MultiFieldPanel
from wagtail.fields import RichTextField
from wagtail.search import index
from wagtail.snippets.models import register_snippet
from front.models import AuthorPage
# Create your models here.

@register_snippet
class People(index.Indexed, ClusterableModel):
    """
    A Django model to store People objects.
    It uses the `@register_snippet` decorator to allow it to be accessible
    via the Snippets UI (e.g. /admin/snippets/newsroom/people/)

    `People` uses the `ClusterableModel`, which allows the relationship with
    another model to be stored locally to the 'parent' model (e.g. a PageModel)
    until the parent is explicitly saved. This allows the editor to use the
    'Preview' button, to preview the content, without saving the relationships
    to the database.
    https://github.com/wagtail/django-modelcluster
    """
    first_name = models.CharField("First name", max_length=254)
    last_name = models.CharField("Last name", max_length=254)
    job_title = models.CharField("Job title", blank=True, max_length=254)
    email = models.EmailField(blank=True)
    bio = RichTextField("Bio", blank=True, null=True)
    avatar_url=models.CharField(blank=True, null=True, max_length=254)
    user = models.ForeignKey("auth.User", related_name="people_object", on_delete=models.CASCADE, blank = True, null = True)
    #slug = models.CharField(max_length=254, blank=True, default=None)
    old_id = models.PositiveIntegerField(blank=True, null=True)
    instagram_link = models.URLField(blank=True)
    facebook_link = models.URLField(blank=True)
    twitter_link = models.URLField(blank=True)
    github_link = models.URLField(blank=True)
    linkedin_link = models.URLField(blank=True)
    website_link = models.URLField(blank=True)

    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    panels = [
        MultiFieldPanel([
            FieldRowPanel([
                FieldPanel('first_name', classname="col6"),
                FieldPanel('last_name', classname="col6")
            ])
        ], "Name"),
        MultiFieldPanel([
            FieldPanel('email'),
            FieldPanel('instagram_link'),
            FieldPanel('facebook_link'),
            FieldPanel('twitter_link'),
            FieldPanel('github_link'),
            FieldPanel('linkedin_link'),
            FieldPanel('website_link')
        ], "Social Media Links"),
        FieldPanel('job_title'),
        FieldPanel('bio', classname="full"),
        FieldPanel('user'),
#        FieldPanel('slug'),
        FieldPanel('image')
    ]

    search_fields = [
        index.SearchField('first_name'),
        index.SearchField('last_name'),
    ]

    @property
    def thumb_image(self):
        # Returns an empty string if there is no profile pic or the rendition
        # file can't be found.
        try:
            return self.image.get_rendition('fill-50x50').img_tag()
        except:  # noqa: E722 FIXME: remove bare 'except:'
            return ''

    def page(self):
        try:
            page = AuthorPage.objects.get(author=self)
        except AuthorPage.DoesNotExist:
            return False
        return page
    
    def __str__(self):
        return '{} {}'.format(self.first_name, self.last_name)

    class Meta:
        verbose_name = 'Person'
        verbose_name_plural = 'People'
        indexes = [models.Index(fields=['old_id',])]
