from oldfaceit.models import Listposts, Listposts2, OldPost
posts = OldPost.objects.all()
for p in posts:
    try:
        f = Listposts2.objects.get(id=p.id)
    except Listposts2.DoesNotExist:
        print("Item not found in listposts2")
        continue
    p.categories_id = f.categoriesid
    p.categories_title = f.categoriestitle
    p.save()
    print(p.id)
