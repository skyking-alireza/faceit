from oldfaceit.models import OldPost, Listposts

for post in OldPost.objects.all():
    old = Listposts.objects.get(id=post.old_id)
    if old:
        if old.title_en:
            post.slug = old.title_en
            post.save()
            print("%d : Slug saved successfully." % post.old_id)
        else:
            print("%d : Did not had a slug in old db." % post.old_id)
    else:
        print("%d: Not Found!" % post.old_id)