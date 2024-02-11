from django import template
from wagtail.models import Page
from jdatetime import datetime as jalali

register = template.Library()

@register.inclusion_tag('tags/breadcrumbs.html', takes_context=True)
def breadcrumbs(context):
    self = context.get('self')
    if self is None or self.depth <= 2:
        # When on the home page, displaying breadcrumbs is irrelevant.
        ancestors = ()
    else:
        ancestors = Page.objects.ancestor_of(
            self, inclusive=True).filter(depth__gt=1)
    return {
        'ancestors': ancestors,
        'request': context['request'],
    }
@register.filter
def pDate(date):
    import locale
    locale.setlocale(locale.LC_ALL, "fa_IR")
    try:
        return jalali.fromgregorian(datetime=date).strftime("%a, %d %b %Y")
    except Exception as e:
        return date
