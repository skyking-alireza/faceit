"""newsroom URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.sitemaps import GenericSitemap
from django.contrib.sitemaps.views import index, sitemap
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static

from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls
from wagtail import urls as wagtail_urls
from front import views as front_views
from wagtail.contrib.sitemaps import views as sitemap_views
from django.views.decorators.cache import cache_page

from front.models import PostPage
from front.sitemap import StaticSitemap, CategorySitemap, PostSitemap
from newsroom.settings import BASE_DIR

# from django.contrib.sitemaps.views import sitemap

info_dict = {
    "queryset": PostPage.objects.all(),
}
class PaginatedSitemap(GenericSitemap):
    limit = 5000


sitemaps = {
    "static": StaticSitemap,
    "news": PaginatedSitemap(info_dict, priority=1.0,protocol="https")
    # "news": PostSitemap
}

urlpatterns = [
                  #    path('django-sitemap.xml', sitemap, {'sitemaps': sitemaps},
                  #     name='django.contrib.sitemaps.views.sitemap'),
                  #    path('news/', include('oldfaceit.urls')),
                  path('sitemap.xml', index, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.index'),
                  path('sitemap-<section>.xml', sitemap, {'sitemaps': sitemaps},
                       name='django.contrib.sitemaps.views.sitemap'),
                  path('robots.txt', front_views.RobotsFile, name="add_comment2"),
                  path('django-admin/', admin.site.urls),
                  path('inja/', front_views.add_comment2, name="add_comment2"),
                  path('approve_comments/', front_views.approve_comments, name="approve_comments"),
                  path('subscribe/<txt>/', front_views.subscribe, name='subscribe_done'),
                  path('subscribe/', front_views.subscribe, name='subscribe'),
                  path('post/add_comment/<int:post_id>/', front_views.add_comment, name='add_comment'),
                  path('post/add_comment/<int:post_id>/<txt>', front_views.add_comment, name='add_comment_done'),
                  path('news/<int:post_old_id>/', front_views.old_post_view, name='old_post'),
                  path('news/<int:post_old_id>/<str:slug>/', front_views.old_post_view, name='old_post_with_slug'),
                  path('search', front_views.search, name='search'),
                  path('rss-latest/', front_views.rsslatest, name="rss-latest"),
                  re_path(r'^admin/', include(wagtailadmin_urls)),
                  re_path(r'^documents/', include(wagtaildocs_urls)),
                  re_path(r'', include(wagtail_urls))
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + \
              static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
