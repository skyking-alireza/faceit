from django.conf import settings
from django.contrib.sitemaps import Sitemap
from django.core.paginator import Paginator
from rest_framework.reverse import reverse

from .models import PostPage, Category


class PostSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        posts = PostPage.objects.all()
        paginator = Paginator(posts, 5000)
        return paginator.page(1).object_list

    def location(self, item):
        return item.get_url()


class CategorySitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        return Category.objects.all()

    def location(self, item):
        return item.url

class StaticSitemap(Sitemap):
    priority = 0.5
    changefreq = 'monthly'
    protocol = 'https'
    def items(self):
        # URLs names
        return ['', 'articles', 'articles/tags/khbr-yrn', 'advertisements', 'videos', 'tricks', 'shopping-guide', 'product-review', 'educational', 'educational/tags/mbny-mnyt-tlt', 'educational/tags/sql', 'educational/tags/syw',]

    def location(self, item):
        return f'/{item}'