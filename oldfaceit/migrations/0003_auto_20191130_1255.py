# Generated by Django 2.2.7 on 2019-11-30 12:55

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.contrib.taggit
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0003_taggeditem_add_unique_index'),
        ('oldfaceit', '0002_oldpost_slug'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idobject', models.IntegerField(blank=True, db_column='idObject', null=True)),
                ('typeobject', models.CharField(blank=True, db_column='typeObject', max_length=250, null=True)),
                ('title', models.CharField(blank=True, max_length=250, null=True)),
                ('content', models.TextField(blank=True, null=True)),
                ('state', models.IntegerField(blank=True, null=True)),
                ('user_id', models.IntegerField(blank=True, null=True)),
                ('types', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField(blank=True, null=True)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('isalert', models.IntegerField(blank=True, db_column='isAlert', null=True)),
                ('email', models.CharField(blank=True, max_length=250, null=True)),
                ('name', models.CharField(blank=True, max_length=250, null=True)),
                ('ip', models.CharField(blank=True, max_length=100, null=True)),
                ('softdelete', models.IntegerField(blank=True, db_column='softDelete', null=True)),
                ('ischecked', models.IntegerField(blank=True, db_column='isChecked', null=True)),
            ],
            options={
                'db_table': 'question',
                'managed': False,
            },
        ),
        migrations.AlterField(
            model_name='oldcat',
            name='related_category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='related_old_categories', to='front.PostIndexPage'),
        ),
        migrations.CreateModel(
            name='OldCatTag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_object', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='tagged_items', to='oldfaceit.OldCat')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='oldfaceit_oldcattag_items', to='taggit.Tag')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='oldcat',
            name='tags',
            field=modelcluster.contrib.taggit.ClusterTaggableManager(blank=True, help_text='A comma-separated list of tags.', through='oldfaceit.OldCatTag', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]