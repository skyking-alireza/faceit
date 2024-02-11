from django import template
from wagtail.models import Page
from jdatetime import datetime as jalali
from front.models import Comment
from wagtail.images.models import SourceImageIOError
from wagtail.images.templatetags.wagtailimages_tags import ImageNode

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
@register.inclusion_tag('tags/post_image.html')
def post_image(post, width='list'):
    context = {'post':post, 'width': width}
    if post.old_id:
        print('#######################')
        print([post.main_image])
        main_image = post.main_image.split('/')
        sizes=[('images700', '700w'), ('images370', '370w'), ('images450', '450w'), ('images750', '750w') ,('images270', '270w'),]
        place = {
            'top-main' : sizes[0][0],
            'top4' : sizes[1][0],
            'list' : sizes[2][0],
            'single': sizes[3][0],
            'sidebar': sizes[4][0],
            'related' : sizes[4][0],
            }
        src=main_image
        src[1] = place[width]
        src = '/'.join(src)
        context['src'] = src
        sources = []
        for i in sizes:
            a=main_image
            a[1]=i[0]
            sources += ['/'.join(a)+" %s"% i[1]]
        context['sources'] = sources
    # return []
    return context
@register.inclusion_tag('tags/author_image.html')
def author_image(author):
    return {'author':author}
@register.inclusion_tag('tags/show_post_in_list.html')
def show_post_in_list(post):
    return {'post':post}
@register.inclusion_tag('tags/show_post_in_sidebar.html')
def show_post_in_sidebar(post):
    return {'post':post}
@register.inclusion_tag('tags/show_post_in_top_posts.html')
def show_post_in_top_posts(post, main=False):
    return {'post':post, 'main':main}
@register.inclusion_tag('tags/show_post_in_top_posts2.html')
def show_post_in_top_posts2(post, main=False):
    return {'post':post, 'main':main}
@register.inclusion_tag('tags/show_post_in_editors_choice.html')
def show_post_in_editors_choice(post, main=False):
    return {'post':post, 'main':main}
@register.inclusion_tag('tags/last_comments.html')
def last_comments():
        comments = Comment.objects.filter(published=True, reply_to__isnull=True).order_by('-date')
        if comments.count() > 5:
            comments = comments[:5]
        else:
            comments=False
        return {'comments':comments}
@register.filter
def pDate(date):
    import locale
    locale.setlocale(locale.LC_ALL, "fa_IR")
    try:
        return jalali.fromgregorian(datetime=date).strftime("%a, %d %b %Y")
    except Exception as e:
        return date


@register.tag(name="responsiveimage")
def responsiveimage(parser, token):
    bits = token.split_contents()[1:]
    image_expr = parser.compile_filter(bits[0])
    filter_spec = bits[1]
    remaining_bits = bits[2:]

    if remaining_bits[-2] == 'as':
        attrs = _parse_attrs(remaining_bits[:-2])
        # token is of the form {% responsiveimage self.photo max-320x200 srcset="filter_spec xyzw" [ attr="val" ... ] as img %}
        return ResponsiveImageNode(image_expr, filter_spec, attrs=attrs, output_var_name=remaining_bits[-1])
    else:
        # token is of the form {% responsiveimage self.photo max-320x200 srcset="filter_spec xyzw" [ attr="val" ... ] %}
        # all additional tokens should be kwargs, which become attributes
        attrs = _parse_attrs(remaining_bits)
        return ResponsiveImageNode(image_expr, filter_spec, attrs=attrs)

def _parse_attrs(bits):
    template_syntax_error_message = (
        '"responsiveimage" tag should be of the form '
        '{% responsiveimage self.photo max-320x200 srcset="fill-400x120 400w, fill-600x180 600w" sizes="100vw" [ custom-attr="value" ... ] %} or '
        '{% responsiveimage self.photo max-320x200 srcset="whatever" as img %}'
    )
    attrs = {}
    for bit in bits:
        try:
            name, value = bit.split('=')
        except ValueError:
            raise template.TemplateSyntaxError(template_syntax_error_message)

        if value[0] == value[-1] and value[0] in ('"', "'"):
            # If attribute value is in quotes, strip the quotes and store the attr as a string.
            attrs[name] = value[1:-1]
        else:
            # This attribute isn't in quotes, so it's a variable name. Send a Variable as the attr, so the
            # ResponsiveImageNode can render it based on the context it gets.
            attrs[name] = template.Variable(value)
    return attrs

class ResponsiveImageNode(ImageNode, template.Node):
    def render(self, context):
        try:
            image = self.image_expr.resolve(context)
        except template.VariableDoesNotExist:
            return ''

        if not image:
            return ''

        try:
            rendition = image.get_rendition(self.filter)
        except SourceImageIOError:
            # It's fairly routine for people to pull down remote databases to their
            # local dev versions without retrieving the corresponding image files.
            # In such a case, we would get a SourceImageIOError at the point where we try to
            # create the resized version of a non-existent image. Since this is a
            # bit catastrophic for a missing image, we'll substitute a dummy
            # Rendition object so that we just output a broken link instead.
            Rendition = image.renditions.model  # pick up any custom Image / Rendition classes that may be in use
            rendition = Rendition(image=image, width=0, height=0)
            rendition.file.name = 'not-found'

        # Parse srcset format into array of renditions.
        try:
            try:
                # Assume it's a Variable object, and try to resolve it against the context.
                srcset = self.attrs['srcset'].resolve(context)
            except AttributeError:
                # It's not a Variable, so assume it's a string.
                srcset = self.attrs['srcset']

            # Parse each src from the srcset.
            raw_sources = srcset.replace('"', '').split(',')

            srcset_renditions = []
            widths = []
            newsrcseturls = []

            for source in raw_sources:
                flt = source.strip().split(' ')[0]
                width = source.strip().split(' ')[1]

                # cache widths to be re-appended after filter has been converted to URL
                widths.append(width)

                try:
                    srcset_renditions.append(image.get_rendition(flt))
                except SourceImageIOError:
                    # pick up any custom Image / Rendition classes that may be in use
                    TmpRendition = image.renditions.model
                    tmprend = TmpRendition(image=image, width=0, height=0)
                    tmprend.file.name = 'not-found'

            for index, rend in enumerate(srcset_renditions):
                newsrcseturls.append(' '.join([rend.url, widths[index]]))

        except KeyError:
            newsrcseturls = []
            pass

        if self.output_var_name:
            rendition.srcset = ', '.join(newsrcseturls)

            # return the rendition object in the given variable
            context[self.output_var_name] = rendition
            return ''
        else:
            # render the rendition's image tag now
            resolved_attrs = {}
            for key in self.attrs:
                if key == 'srcset':
                    resolved_attrs[key] = ','.join(newsrcseturls)
                    continue

                try:
                    # Assume it's a Variable object, and try to resolve it against the context.
                    resolved_attrs[key] = self.attrs[key].resolve(context)
                except AttributeError:
                    # It's not a Variable, so assume it's a string.
                    resolved_attrs[key] = self.attrs[key]

            return rendition.img_tag(resolved_attrs)

@register.inclusion_tag('tags/add_item.rss')
def add_item(item_class, item):
    return {'title': item_class.item_title(item), 'description': item_class.item_description(item), 'link': item_class.item_link(item) }
