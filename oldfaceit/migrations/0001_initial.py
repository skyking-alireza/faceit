# Generated by Django 2.2.7 on 2019-11-20 13:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('front', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(db_column='Title', max_length=250)),
                ('title_en', models.CharField(blank=True, db_column='Title_en', max_length=250, null=True)),
                ('user_id', models.IntegerField(db_column='user_Id')),
                ('tablename', models.CharField(db_column='tableName', max_length=250)),
                ('indexlayout', models.CharField(blank=True, db_column='indexLayout', max_length=500, null=True)),
                ('contentlayout', models.CharField(blank=True, db_column='contentLayout', max_length=500, null=True)),
                ('lang', models.CharField(blank=True, max_length=250, null=True)),
                ('jsonchild', models.TextField(blank=True, db_column='jsonChild', null=True)),
                ('tumbnailimage', models.CharField(blank=True, db_column='tumbnailImage', max_length=250, null=True)),
                ('mainimage', models.CharField(blank=True, db_column='mainImage', max_length=250, null=True)),
                ('body', models.TextField(blank=True, null=True)),
                ('jsoncategories', models.TextField(blank=True, null=True)),
                ('isshownews', models.IntegerField(blank=True, db_column='isShowNews', null=True)),
            ],
            options={
                'db_table': 'categories',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CategoriesObjectXref',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('categories_id', models.IntegerField()),
                ('objectid', models.IntegerField(db_column='objectId')),
                ('tblname', models.CharField(db_column='tblName', max_length=250)),
                ('icon', models.CharField(blank=True, max_length=250, null=True)),
            ],
            options={
                'db_table': 'categories_object_xref',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Listposts',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('title_en', models.CharField(blank=True, max_length=255, null=True)),
                ('introtext', models.TextField(blank=True, null=True)),
                ('renderedbody', models.TextField(blank=True, db_column='renderedBody', null=True)),
                ('updated_at', models.DateTimeField()),
                ('startdate', models.DateTimeField(db_column='startDate')),
                ('tumbnailimage', models.CharField(blank=True, db_column='tumbnailImage', max_length=500, null=True)),
                ('mainimage', models.CharField(blank=True, db_column='mainImage', max_length=500, null=True)),
                ('isjsonupdated', models.IntegerField(blank=True, db_column='isJsonUpdated', null=True)),
                ('hits', models.IntegerField(blank=True, null=True)),
                ('meta_description', models.TextField(blank=True, db_column='meta_Description', null=True)),
                ('refrencelink', models.CharField(blank=True, db_column='refrenceLink', max_length=512, null=True)),
                ('refrencetitle', models.CharField(blank=True, db_column='refrenceTitle', max_length=250, null=True)),
                ('statepublish', models.IntegerField(db_column='statePublish')),
                ('created_at', models.DateTimeField()),
                ('postjson', models.TextField(blank=True, db_column='postJson', null=True)),
                ('meta_caption', models.TextField(blank=True, db_column='meta_Caption', null=True)),
                ('metadescription', models.TextField(blank=True, db_column='metaDescription', null=True)),
                ('user_id', models.PositiveIntegerField()),
                ('body', models.TextField()),
                ('authorname', models.CharField(blank=True, db_column='authorName', max_length=511, null=True)),
                ('avatar', models.CharField(blank=True, max_length=250, null=True)),
            ],
            options={
                'db_table': 'listPosts',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Listposts2',
            fields=[
                ('categoriestitle', models.TextField(blank=True, db_column='CategoriesTitle', null=True)),
                ('categoriesid', models.TextField(blank=True, db_column='CategoriesId', null=True)),
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('title_en', models.CharField(blank=True, max_length=255, null=True)),
                ('tumbnailimage', models.CharField(blank=True, db_column='tumbnailImage', max_length=500, null=True)),
                ('created_at', models.DateTimeField()),
                ('updated_at', models.DateTimeField()),
                ('hits', models.IntegerField(blank=True, null=True)),
                ('isfeature', models.IntegerField(blank=True, db_column='isFeature', null=True)),
                ('statepublish', models.IntegerField(db_column='statePublish')),
                ('user_id', models.PositiveIntegerField(blank=True, null=True)),
                ('lang_code', models.CharField(blank=True, max_length=250, null=True)),
                ('commentcount', models.IntegerField(blank=True, db_column='commentCount', null=True)),
                ('startdate', models.DateTimeField(db_column='startDate')),
                ('authorname', models.CharField(blank=True, db_column='authorName', max_length=511, null=True)),
            ],
            options={
                'db_table': 'listposts2',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('email', models.CharField(max_length=255, unique=True)),
                ('password', models.CharField(max_length=255)),
                ('permissions', models.TextField(blank=True, null=True)),
                ('activated', models.IntegerField()),
                ('activation_code', models.CharField(blank=True, max_length=255, null=True)),
                ('activated_at', models.CharField(blank=True, max_length=255, null=True)),
                ('last_login', models.CharField(blank=True, max_length=255, null=True)),
                ('remember_token', models.CharField(blank=True, max_length=100, null=True)),
                ('persist_code', models.CharField(blank=True, max_length=255, null=True)),
                ('reset_password_code', models.CharField(blank=True, max_length=255, null=True)),
                ('first_name', models.CharField(blank=True, max_length=255, null=True)),
                ('last_name', models.CharField(blank=True, max_length=255, null=True)),
                ('mobile', models.CharField(blank=True, max_length=32, null=True)),
                ('birth_date', models.DateTimeField()),
                ('sex', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField()),
                ('updated_at', models.DateTimeField()),
                ('job', models.CharField(blank=True, max_length=250, null=True)),
                ('antiviruscode', models.CharField(blank=True, db_column='antivirusCode', max_length=250, null=True)),
                ('requestantivirus', models.IntegerField(blank=True, db_column='requestAntivirus', null=True)),
                ('mobileaciticatecode', models.IntegerField(blank=True, db_column='MobileAciticateCode', null=True)),
                ('isvalidmobile', models.IntegerField(blank=True, db_column='isValidMobile', null=True)),
                ('isvalidemail', models.IntegerField(blank=True, db_column='isValidEmail', null=True)),
                ('softdelete', models.IntegerField(blank=True, db_column='softDelete', null=True)),
                ('avatar', models.CharField(blank=True, max_length=250, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('coverphoto', models.CharField(blank=True, db_column='coverPhoto', max_length=250, null=True)),
                ('credit', models.DecimalField(blank=True, decimal_places=0, max_digits=18, null=True)),
            ],
            options={
                'db_table': 'users',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='OldCat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('old_id', models.PositiveIntegerField()),
            ],
            options={
                'verbose_name': 'Old Category',
                'verbose_name_plural': 'Old Categories',
            },
        ),
        migrations.CreateModel(
            name='OldPeople',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('first_name', models.CharField(blank=True, max_length=255, null=True)),
                ('last_name', models.CharField(blank=True, max_length=255, null=True)),
                ('mobile', models.CharField(blank=True, max_length=32, null=True)),
                ('birth_date', models.DateTimeField(blank=True, null=True)),
                ('job', models.CharField(blank=True, max_length=250, null=True)),
                ('avatar', models.CharField(blank=True, max_length=250, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('old_id', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='OldPost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('old_id', models.PositiveIntegerField()),
                ('introduction', models.TextField(blank=True, null=True)),
                ('body', models.TextField(blank=True)),
                ('date_published', models.DateField(blank=True, null=True)),
                ('tumbnailimage', models.CharField(blank=True, max_length=500, null=True)),
                ('mainimage', models.CharField(blank=True, max_length=500, null=True)),
                ('meta_description', models.TextField(blank=True, null=True)),
                ('refrencelink', models.CharField(blank=True, max_length=512, null=True)),
                ('refrencetitle', models.CharField(blank=True, max_length=250, null=True)),
                ('statepublish', models.IntegerField(blank=True)),
                ('meta_caption', models.TextField(blank=True, null=True)),
                ('metadescription', models.TextField(blank=True, null=True)),
                ('user_id', models.PositiveIntegerField()),
                ('author_name', models.CharField(blank=True, max_length=511, null=True)),
                ('avatar', models.CharField(blank=True, max_length=250, null=True)),
                ('categories_title', models.TextField(blank=True, null=True)),
                ('categories_id', models.TextField(blank=True, null=True)),
                ('author', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='oldfaceit.OldPeople')),
                ('oldcats', models.ManyToManyField(blank=True, related_name='posts', to='oldfaceit.OldCat')),
            ],
        ),
        migrations.AddIndex(
            model_name='oldpeople',
            index=models.Index(fields=['old_id'], name='oldfaceit_o_old_id_74c97d_idx'),
        ),
        migrations.AddField(
            model_name='oldcat',
            name='related_category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='related_old_categories', to='front.Category'),
        ),
        migrations.AddIndex(
            model_name='oldpost',
            index=models.Index(fields=['old_id'], name='oldfaceit_o_old_id_c0727a_idx'),
        ),
        migrations.AddIndex(
            model_name='oldcat',
            index=models.Index(fields=['old_id'], name='oldfaceit_o_old_id_1b70fa_idx'),
        ),
    ]
