# from wagtail.contrib.modeladmin.options import (
#     ModelAdmin, modeladmin_register)
from wagtail.snippets.models import register_snippet
from wagtail.snippets.views.snippets import SnippetViewSet

from .models import PostPage , Comment, HitCounter, SearchQuery
from django.utils.html import escape
from wagtail import hooks
from wagtail.rich_text import LinkHandler



class PostPageAdmin(SnippetViewSet):
    model = PostPage
    menu_label = 'Posts'
    menu_icon = 'doc-full-inverse'
    list_display = ('id','old_id','title','date_published', 'authors','live', 'get_parent','hits')
    list_filter = ('date_published', 'live' , 'tags', )
    search_fields = ('id','old_id', 'title', 'introduction',)

register_snippet(PostPageAdmin)
class HitsAdmin(SnippetViewSet):
    model = HitCounter
    menu_label='Hits'
    menu_icon='view'
    list_display=('name', 'hits', 'get_hits_24h', 'hits24h')
register_snippet(HitsAdmin)

class QueryAdmin(SnippetViewSet):
    model = SearchQuery
    menu_label='Searches'
    menu_icon='search'
    list_display=('query', 'last_use', 'repeat')
register_snippet(QueryAdmin)

class CommentAdmin(SnippetViewSet):
    model = Comment
    menu_label = "Comments"
    menu_icon = 'form'
    list_display = ('name','post', 'date', 'text', 'published')
    list_filter = ('published', 'date', 'post')
    index_template_name='modeladmin/front/comment/index.html'
# register_snippet(CommentAdmin)



class NoFollowExternalLinkHandler(LinkHandler):
    identifier = 'external'

    @classmethod
    def expand_db_attributes(cls, attrs):
        href = attrs["href"]
        return '<a href="%s" rel="nofollow" target="_blank">' % escape(href)

@hooks.register('register_rich_text_features')
def register_external_link(features):
    features.register_link_type(NoFollowExternalLinkHandler)

class AdExternalLinkHandler(LinkHandler):
    identifier = 'ad'

    @classmethod
    def expand_db_attributes(cls, attrs):
        href = attrs["href"]
        return '<a href="%s" target="_blank">' % escape(href)

@hooks.register('register_rich_text_features')
def register_link_type(features):
    features.register_link_type(AdExternalLinkHandler)
