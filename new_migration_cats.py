from oldfaceit.models import OldPost,Categories,Users, CategoriesObjectXref, OldCat, OldPeople

for cat in Categories.objects.all():
    oc = OldCat(title=cat.title, old_id=cat.id)
    oc.save()
    print(cat.id)
