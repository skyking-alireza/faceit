from django.shortcuts import render, get_object_or_404
from django.http import HttpResponsePermanentRedirect
from django.urls import reverse
from . import models
from front import models as nrmodel
# Create your views here.
def old_post_view(request, post_id, slug=None):
    post = get_object_or_404(models.OldPost, old_id=post_id)
    if post.slug:
        if slug != post.slug:
            return HttpResponsePermanentRedirect(reverse('oldfaceit:old_post_with_slug', kwargs={'post_id':post_id, 'slug':post.slug}))
    old_category = post.oldcats.all()[0]
    # $$ There are 64 OldPost with no category. fix it for them
    real_category = old_category.related_category
    if real_category:
        try:
            parent_page = nrmodel.PostIndexPage.objects.get(category=real_category)
        except nrmodel.PostIndexPage.DoesNotExist:
            parent_page = False
    else:
        parent_page = False
    context = {
        'post': post,
        'parent_page': parent_page
    }
#    context['post'] = post
#    context['parent_page'] = parent_page
    return render(request, 'oldfaceit/post_page.html', context)
