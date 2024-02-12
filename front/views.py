from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, HttpResponsePermanentRedirect
from django.urls import reverse
from django.utils.html import strip_tags

from .forms import SubscribeForm, CommentForm
from .models import Subscribers, Comment, PostPage, SearchQuery, Robots
from wagtail.contrib.search_promotions.models import Query
from datetime import datetime
import json
# Create your views here.
def subscribe(request, txt=None):
    if txt:
        return HttpResponse('Your Email address had been added to database. Thank you for your subscribtion.')
    if request.method == 'POST':
        form = SubscribeForm(request.POST)
        if form.is_valid():
            new_member = Subscribers()
            new_member.email = form.cleaned_data['email']
            new_member.save()
            return HttpResponseRedirect('done')
        else:
            form = SubscribeForm(request.POST)
            return render(request, 'front/subscribe_form.html', {'subscribe_form': form})

    else:
        form = SubscribeForm()
        return render(request, 'front/subscribe_form.html', {'subscribe_form': form})


def add_comment(request, post_id, txt=None):
    post = get_object_or_404(PostPage, pk=post_id)
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            new_comment = Comment()
            new_comment.post = post
            new_comment.name = form.cleaned_data['name']
            new_comment.text = form.cleaned_data['text']
            new_comment.email = form.cleaned_data['email']
            new_comment.reply_to = form.cleaned_data['reply_to']
            new_comment.save()
            return HttpResponseRedirect('done')
        else:
            form = CommentForm(request.POST)
            post.set_comment_form(form)
            return post.serve(request)
    else:
        post = get_object_or_404(PostPage, pk=post_id)
        return post.serve(request)

def add_comment2(request):
    response_data = {}
    #if request.POST.get('action') == 'POST':
    if request.method == 'POST':
        post_id=request.POST.get('postid')
        post = get_object_or_404(PostPage, pk=post_id)
        new_comment = Comment()
        new_comment.post = post
        new_comment.name = request.POST.get('name')
        new_comment.text = request.POST.get('text')
        new_comment.email = request.POST.get('email')
        if request.POST.get('reply_to'):
            reply_to = get_object_or_404(Comment, pk=request.POST.get('reply_to'))
            new_comment.reply_to = reply_to
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

def delete_comments(request):
    if request.method=="POST":
        ids=request.POST.getlist('selected')
        for id in ids:
            comment = get_object_or_404(Comment, pk=id)
            comment.delete()
        return HttpResponseRedirect('https://faceit.ir/admin/front/comment/')

def approve_comments(request):
    if request.method=="POST":
        ids=request.POST.getlist('selected')
        for id in ids:
            comment = get_object_or_404(Comment, pk=id)
            if request.POST.get('approve'):
                comment.published = True
                comment.save()
            if request.POST.get('delete'):
                comment.delete()
        return HttpResponseRedirect('https://faceit.ir/admin/front/comment/')        


def old_post_view(request, post_old_id, slug=None):
    post = get_object_or_404(PostPage, old_id=post_old_id)
    if slug != post.slug:
        return HttpResponsePermanentRedirect(reverse('old_post_with_slug', kwargs={'post_old_id':post_old_id, 'slug':post.slug}))
    return post.serve(request)

def search(request):
    search_query = request.GET.get('q', None)
    if search_query:
        search_results = PostPage.objects.live().search(search_query)
        Query.get(search_query).add_hit()
        try:
            query = SearchQuery.objects.get(query=search_query)
        except SearchQuery.DoesNotExist:
            query = SearchQuery()
            query.query = search_query
        query.repeat = query.repeat + 1
        query.save()
    else:
        return HttpResponseRedirect('https://faceit.ir')
    return render(request, 'front/search_results.html', {'search_query': search_query, 'posts': search_results })

class LatestNews():
    title = "آخرین اخبار منتشر شده در فیسیت"
    link = "/rss-latest/"
    description = "ده خبر آخر منتشر شده در پایگاه خبری فیسیت"

    def items(self):
        return PostPage.objects.order_by('-date_published')[:10]

    def item_title(self, item):
        return item.title

    def item_description(self, item):
        return item.introduction
    def item_link(self, item):
        return item.get_url()


def RobotsFile(request):
    content = 'Robots file is empty'
    try:
        content = strip_tags(Robots.objects.last().body)
    except:
        content = 'Robots file is empty'
    return HttpResponse(content, content_type='text/plain')
def rsslatest(request):
    return render(request, 'front/rsstemplate.rss', {'item_class': LatestNews, 'now':datetime.now() }, content_type="application/xhtml+xml")    
