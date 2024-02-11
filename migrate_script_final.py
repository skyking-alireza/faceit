from oldfaceit.models import Listposts, Listposts2, OldPost, Categories,Users, CategoriesObjectXref, OldCat, OldPeople, Question
from front.models import PostIndexPage, PostPage, PostAuthors, PostPageTag, Comment
from editorial.models import People
from wagtail.core.rich_text import RichText

all_cats = OldCat.objects.all()
for cat in all_cats:
    if not cat.related_category:
        continue
    plist = CategoriesObjectXref.objects.filter(categories_id=cat.old_id)
    if plist.count()>0:
        for pitem in plist:
            if PostPage.objects.filter(old_id=pitem.objectid).count() == 0:
                p = Listposts.objects.filter(id=pitem.objectid)
                if p.count() > 0:
                    p=p[0]
                    print("%d" % p.id)
                    parent = cat.related_category
                    post = PostPage()
                    post.old_id = p.id
                    if p.introtext:
                        post.introduction = p.introtext
                    #post.body = [('rawHTML', p.body.decode('utf-8'))]
                    post.body = [('paragraph_block', RichText(p.body.decode('utf-8')))]
                    #post.simple_body = p.body
                    post.date_published = p.created_at
                    post.main_image = p.mainimage
                    if p.metadescription:
                        post.search_description = p.metadescription
                    post.reference_link = p.refrencelink
                    post.reference_title = p.refrencetitle
                    if p.title_en:
                        post.slug=p.title_en
                    #    post.user_id = p.user_id
                    post.title = p.title
                    if p.meta_caption:
                        post.sep_title = p.meta_caption
                    try:
                        post = parent.add_child(instance=post)
                    except:
                        post.slug="%0*d" % (5, post.old_id)
                        post = parent.add_child(instance=post)
                    author = People.objects.filter(old_id=p.user_id)
                    if author.count() > 0:
                        author=author[0]
                        rel = PostAuthors(page=post, people=author)
                        rel.save()
                    else:
                        old_author=Users.objects.filter(id=p.user_id)
                        if old_author.count() > 0:
                            old_author = old_author[0]
                            author=People(
                                old_id=old_author.id,
                                email=old_author.email,
                                first_name=old_author.first_name,
                                last_name=old_author.last_name,
                                avatar_url=old_author.avatar,
                                bio = old_author.description
                            )
                            author.save()
                            rel = PostAuthors(page=post, people=author)
                            rel.save()
                    for t in cat.tags.all():
                        rel=PostPageTag(content_object=post, tag=t)
                        rel.save()
                    qlist = Question.objects.filter(idobject=p.id)
                    if qlist.count() > 0:
                        for q in qlist:
                            cmnew=Comment()
                            cmnew.post = post
                            try:
                                cmnew.text = q.content.decode('utf-8')
                            except:
                                print("%d notsaved" % q.id)
                                break
                            cmnew.ip = q.ip
                            cmnew.date=q.created_at
                            cmnew.email = q.email
                            cmnew.name = q.name
                            if q.state:
                                cmnew.published=q.state
                            cmnew.save()
                    print("comments added")
                    