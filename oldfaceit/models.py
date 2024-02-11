# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from wagtail.snippets.models import register_snippet
from wagtail.admin.panels import PageChooserPanel, FieldPanel
from django.db import models
from front.models import PostIndexPage
from django.urls import reverse
from taggit.models import Tag, TaggedItemBase
from modelcluster.fields import ParentalKey
from modelcluster.contrib.taggit import ClusterTaggableManager
from modelcluster.models import ClusterableModel

class OldCatTag(TaggedItemBase):
    content_object = ParentalKey('OldCat', related_name='tagged_items', on_delete=models.CASCADE)
@register_snippet
class OldCat(ClusterableModel):
    title = models.CharField(max_length=255)
    old_id = models.PositiveIntegerField()
    tags = ClusterTaggableManager(through=OldCatTag, blank=True)
    related_category = models.ForeignKey(PostIndexPage, on_delete=models.SET_NULL, blank=True, null=True, related_name="related_old_categories")
    def __str__(self):
        if self.related_category:
            return self.title
        return "-- %s" % self.title
    panels = [PageChooserPanel('related_category'), FieldPanel('tags'),]
    class Meta:
        verbose_name="Old Category"
        verbose_name_plural="Old Categories"
        indexes=[models.Index(fields=['old_id',])]

class OldPeople(models.Model):
    email=models.EmailField(unique=True, max_length=255)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    mobile = models.CharField(max_length=32, blank=True, null=True)
    birth_date = models.DateTimeField(blank=True, null=True)
    job = models.CharField(max_length=250, blank=True, null=True)
    avatar = models.CharField(max_length=250, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    old_id = models.PositiveIntegerField()
    def __str__(self):
        return '{} {}'.format(self.first_name, self.last_name)
    class Meta:
        indexes=[models.Index(fields=['old_id',])]
class OldPost(models.Model):
    title = models.CharField(max_length=255)
    oldcats = models.ManyToManyField(OldCat, blank=True, related_name="posts")
    old_id = models.PositiveIntegerField()
    introduction = models.TextField(blank=True, null=True)
    body = models.TextField(blank=True)
    slug = models.CharField(max_length=255, blank=True, null=True)
    #author_name = models.CharField(blank = True)
#    tags = ClusterTaggableManager(through=PostPageTag, blank=True)
    date_published = models.DateField(blank=True, null=True)

    tumbnailimage = models.CharField(max_length=500, blank=True, null=True)  # Field name made lowercase.
    mainimage = models.CharField(max_length=500, blank=True, null=True)  # Field name made lowercase.
    meta_description = models.TextField(blank=True, null=True)  # Field name made lowercase.
    refrencelink = models.CharField(max_length=512, blank=True, null=True)  # Field name made lowercase.
    refrencetitle = models.CharField(max_length=250, blank=True, null=True)  # Field name made lowercase.
    statepublish = models.IntegerField(blank=True)  # Field name made lowercase.
    meta_caption = models.TextField(blank=True, null=True)  # Field name made lowercase.
    metadescription = models.TextField(blank=True, null=True)  # Field name made lowercase.
    user_id = models.PositiveIntegerField()
    author_name = models.CharField(max_length=511, blank=True, null=True)  # Field name made lowercase.
    avatar = models.CharField(max_length=250, blank=True, null=True)
    author = models.ForeignKey(OldPeople, on_delete=models.SET_NULL, blank=True, null=True)

    #Fields from listposts2
    categories_title = models.TextField(blank=True, null=True)  # Field name made lowercase.
    categories_id = models.TextField(blank=True, null=True)  # Field name made lowercase.
    @property
    def image(self):
        return self.tumbnailimage
    def get_type(self):
        return "OldPost"
    def url(self):
        return reverse('oldfaceit:old_post', args=[self.old_id,])
    class Meta:
        indexes=[models.Index(fields=['old_id',])]

class Listposts(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    title = models.CharField(max_length=255)
    title_en = models.CharField(max_length=255, blank=True, null=True)
    introtext = models.TextField(blank=True, null=True)
    renderedbody = models.TextField(db_column='renderedBody', blank=True, null=True)  # Field name made lowercase.
    updated_at = models.DateTimeField()
    startdate = models.DateTimeField(db_column='startDate')  # Field name made lowercase.
    tumbnailimage = models.CharField(db_column='tumbnailImage', max_length=500, blank=True, null=True)  # Field name made lowercase.
    mainimage = models.CharField(db_column='mainImage', max_length=500, blank=True, null=True)  # Field name made lowercase.
    isjsonupdated = models.IntegerField(db_column='isJsonUpdated', blank=True, null=True)  # Field name made lowercase.
    hits = models.IntegerField(blank=True, null=True)
    meta_description = models.TextField(db_column='meta_Description', blank=True, null=True)  # Field name made lowercase.
    refrencelink = models.CharField(db_column='refrenceLink', max_length=512, blank=True, null=True)  # Field name made lowercase.
    refrencetitle = models.CharField(db_column='refrenceTitle', max_length=250, blank=True, null=True)  # Field name made lowercase.
    statepublish = models.IntegerField(db_column='statePublish')  # Field name made lowercase.
    created_at = models.DateTimeField()
    postjson = models.TextField(db_column='postJson', blank=True, null=True)  # Field name made lowercase.
    meta_caption = models.TextField(db_column='meta_Caption', blank=True, null=True)  # Field name made lowercase.
    metadescription = models.TextField(db_column='metaDescription', blank=True, null=True)  # Field name made lowercase.
    user_id = models.PositiveIntegerField()
    body = models.TextField()
    authorname = models.CharField(db_column='authorName', max_length=511, blank=True, null=True)  # Field name made lowercase.
    avatar = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False  # Created from a view. Don't remove.
        db_table = 'listPosts'

class Listposts2(models.Model):
    categoriestitle = models.TextField(db_column='CategoriesTitle', blank=True, null=True)  # Field name made lowercase.
    categoriesid = models.TextField(db_column='CategoriesId', blank=True, null=True)  # Field name made lowercase.
    id = models.PositiveIntegerField(primary_key=True)
    title = models.CharField(max_length=255)
    title_en = models.CharField(max_length=255, blank=True, null=True)
    tumbnailimage = models.CharField(db_column='tumbnailImage', max_length=500, blank=True, null=True)  # Field name made lowercase.
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    hits = models.IntegerField(blank=True, null=True)
    isfeature = models.IntegerField(db_column='isFeature', blank=True, null=True)  # Field name made lowercase.
    statepublish = models.IntegerField(db_column='statePublish')  # Field name made lowercase.
    user_id = models.PositiveIntegerField(blank=True, null=True)
    lang_code = models.CharField(max_length=250, blank=True, null=True)
    commentcount = models.IntegerField(db_column='commentCount', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateTimeField(db_column='startDate')  # Field name made lowercase.
    authorname = models.CharField(db_column='authorName', max_length=511, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False  # Created from a view. Don't remove.
        db_table = 'listposts2'

class Categories(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    title = models.CharField(db_column='Title', max_length=250)  # Field name made lowercase.
    title_en = models.CharField(db_column='Title_en', max_length=250, blank=True, null=True)  # Field name made lowercase.
    user_id = models.IntegerField(db_column='user_Id')  # Field name made lowercase.
    tablename = models.CharField(db_column='tableName', max_length=250)  # Field name made lowercase.
    indexlayout = models.CharField(db_column='indexLayout', max_length=500, blank=True, null=True)  # Field name made lowercase.
    contentlayout = models.CharField(db_column='contentLayout', max_length=500, blank=True, null=True)  # Field name made lowercase.
    lang = models.CharField(max_length=250, blank=True, null=True)
    jsonchild = models.TextField(db_column='jsonChild', blank=True, null=True)  # Field name made lowercase.
    tumbnailimage = models.CharField(db_column='tumbnailImage', max_length=250, blank=True, null=True)  # Field name made lowercase.
    mainimage = models.CharField(db_column='mainImage', max_length=250, blank=True, null=True)  # Field name made lowercase.
    body = models.TextField(blank=True, null=True)
    jsoncategories = models.TextField(blank=True, null=True)
    isshownews = models.IntegerField(db_column='isShowNews', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'categories'


class Users(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    email = models.CharField(unique=True, max_length=255)
    password = models.CharField(max_length=255)
    permissions = models.TextField(blank=True, null=True)
    activated = models.IntegerField()
    activation_code = models.CharField(max_length=255, blank=True, null=True)
    activated_at = models.CharField(max_length=255, blank=True, null=True)
    last_login = models.CharField(max_length=255, blank=True, null=True)
    remember_token = models.CharField(max_length=100, blank=True, null=True)
    persist_code = models.CharField(max_length=255, blank=True, null=True)
    reset_password_code = models.CharField(max_length=255, blank=True, null=True)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    mobile = models.CharField(max_length=32, blank=True, null=True)
    birth_date = models.DateTimeField()
    sex = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    job = models.CharField(max_length=250, blank=True, null=True)
    antiviruscode = models.CharField(db_column='antivirusCode', max_length=250, blank=True, null=True)  # Field name made lowercase.
    requestantivirus = models.IntegerField(db_column='requestAntivirus', blank=True, null=True)  # Field name made lowercase.
    mobileaciticatecode = models.IntegerField(db_column='MobileAciticateCode', blank=True, null=True)  # Field name made lowercase.
    isvalidmobile = models.IntegerField(db_column='isValidMobile', blank=True, null=True)  # Field name made lowercase.
    isvalidemail = models.IntegerField(db_column='isValidEmail', blank=True, null=True)  # Field name made lowercase.
    softdelete = models.IntegerField(db_column='softDelete', blank=True, null=True)  # Field name made lowercase.
    avatar = models.CharField(max_length=250, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    coverphoto = models.CharField(db_column='coverPhoto', max_length=250, blank=True, null=True)  # Field name made lowercase.
    credit = models.DecimalField(max_digits=18, decimal_places=0, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'

class CategoriesObjectXref(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    categories_id = models.IntegerField()
    objectid = models.IntegerField(db_column='objectId')  # Field name made lowercase.
    tblname = models.CharField(db_column='tblName', max_length=250)  # Field name made lowercase.
    icon = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'categories_object_xref'
        
class Question(models.Model):
    idobject = models.IntegerField(db_column='idObject', blank=True, null=True)  # Field name made lowercase.
    typeobject = models.CharField(db_column='typeObject', max_length=250, blank=True, null=True)  # Field name made lowercase.
    title = models.CharField(max_length=250, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    state = models.IntegerField(blank=True, null=True)
    user_id = models.IntegerField(blank=True, null=True)
    types = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    isalert = models.IntegerField(db_column='isAlert', blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(max_length=250, blank=True, null=True)
    name = models.CharField(max_length=250, blank=True, null=True)
    ip = models.CharField(max_length=100, blank=True, null=True)
    softdelete = models.IntegerField(db_column='softDelete', blank=True, null=True)  # Field name made lowercase.
    ischecked = models.IntegerField(db_column='isChecked', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'question'
