from oldfaceit.models import OldPost,Categories,Users, CategoriesObjectXref, OldCat, OldPeople

posts = OldPost.objects.all()
for p in posts:
    print("Processing post %d" % p.old_id)
    cats = CategoriesObjectXref.objects.filter(objectid=p.old_id)
    if cats:
        for crec in cats:
            try:
                old_cat=OldCat.objects.get(old_id=crec.categories_id)
            except OldCat.DoesNotExist:
                try:
                    cat = Categories.objects.get(id=crec.categories_id)
                except Categories.DoesNotExist:
                    print("Referenced category does not exist")
                    continue
                new_old_cat = OldCat(title=cat.title, old_id=cat.id)
                new_old_cat.save()
                p.oldcats.add(new_old_cat)
                print("New category %s added to newdb and conected to post:%d" % (new_old_cat.title, p.old_id))
                continue
            p.oldcats.add(old_cat)
            print("Existing cat: %s added to post: %d" % (old_cat.title, p.old_id))
    try:
        author = OldPeople.objects.get(old_id=p.user_id)
    except OldPeople.DoesNotExist:
        try:
            old_author = Users.objects.get(id=p.user_id)
        except Users.DoesNotExist:
            print("Referenced User does not exist")
            p.save()
            continue
        new_old_author = OldPeople(
            email=old_author.email,
            first_name=old_author.first_name,
            last_name=old_author.last_name,
            mobile=old_author.mobile,
            birth_date=old_author.birth_date,
            job=old_author.job,
            avatar=old_author.avatar,
            description=old_author.description,
            old_id=old_author.id
        )
        new_old_author.save()
        p.author = new_old_author
        print("Author %s added to new db and connected to post: %d" % (new_old_author.first_name, p.old_id))
        p.save()
        continue
    p.author = author
    print("Existing author %s added to post: %d" % (author.first_name, p.old_id))
    p.save()
