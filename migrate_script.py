from oldfaceit.models import Listposts, Listposts2, OldPost

posts = Listposts.objects.raw("SELECT `id`, `title`, `title_en`, `introtext`, `tumbnailImage`, `mainImage`, `meta_Description`, `refrenceLink`, `refrenceTitle`, `statePublish`, `created_at`, `meta_Caption`, `metaDescription`, `user_id`, CONVERT(`body` USING utf8) AS `body`, `authorName`, `avatar` FROM `c2faceitdb`.`listPosts`;")
for p in posts:
    new = OldPost(old_id = 1, title=' ')
    new.old_id = p.id
    new.introduction = p.introtext
    new.body = p.body
    new.author_name = p.authorname
    new.date_published = p.created_at
    new.tumbnailimage = p.tumbnailimage
    new.mainimage = p.mainimage
    new.metadescription = p.metadescription
    new.refrencelink = p.refrencelink
    new.refrencetitle = p.refrencetitle

    new.user_id = p.user_id
    new.avatar = p.avatar
    #new.depth = 4
    #new.slug = p.title_en
    new.title = p.title
    new.statepublish = p.statepublish
    new.meta_caption = p.meta_caption
    new.save()
    print(p.id)
