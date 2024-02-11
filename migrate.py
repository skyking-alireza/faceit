from front.models import PostPage
from oldfaceit.models import Listposts

for post in PostPage.objects.filter(old_id__isnull=False):
    if not post.main_image:
        try:
            p = Listposts.objects.get(id=post.old_id)
        except Listposts.DoesNotExist:
            print("! %d does not exist!!!" % post.old_id)
            continue
        post.main_image = p.mainimage
        post.save()
        print("%d " % post.id)
    else:
        print("main_image already initialized")
