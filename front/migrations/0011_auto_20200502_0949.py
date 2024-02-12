# Generated by Django 2.2.7 on 2020-05-02 09:49

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.contrib.taggit
import modelcluster.fields
import wagtail.blocks
import wagtail.fields
import wagtail.embeds.blocks
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0041_group_collection_permissions_verbose_name_plural'),
        ('taggit', '0003_taggeditem_add_unique_index'),
        ('wagtailimages', '0001_squashed_0021'),
        ('front', '0010_auto_20200107_1306'),
    ]

    operations = [
        migrations.CreateModel(
            name='SearchQuery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('query', models.CharField(db_index=True, max_length=128)),
                ('last_use', models.DateTimeField(auto_now=True, db_index=True)),
                ('repeat', models.PositiveIntegerField(default=0)),
            ],
        ),
        migrations.AddField(
            model_name='homepage',
            name='show_services',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='header_left_img',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='header_left_script',
            field=wagtail.fields.StreamField([('rawScript', wagtail.blocks.RawHTMLBlock())], blank=True, null=True, verbose_name='header left script'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='header_left_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='header_right_img',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='header_right_script',
            field=wagtail.fields.StreamField([('rawScript', wagtail.blocks.RawHTMLBlock())], blank=True, null=True, verbose_name='header right Ad script'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='header_right_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='home1_img',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='home1_script',
            field=wagtail.fields.StreamField([('rawScript', wagtail.blocks.RawHTMLBlock())], blank=True, null=True, verbose_name='Home1 script'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='home1_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='home2_img',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='home2_script',
            field=wagtail.fields.StreamField([('rawScript', wagtail.blocks.RawHTMLBlock())], blank=True, null=True, verbose_name='Home2 script'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='home2_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='home3_img',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='home3_script',
            field=wagtail.fields.StreamField([('rawScript', wagtail.blocks.RawHTMLBlock())], blank=True, null=True, verbose_name='Home3 script'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='home3_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='list2_script',
            field=wagtail.fields.StreamField([('rawScript', wagtail.blocks.RawHTMLBlock())], blank=True, null=True, verbose_name='List2 Ad script'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='newspage_sidebar_script',
            field=wagtail.fields.StreamField([('rawScript', wagtail.blocks.RawHTMLBlock())], blank=True, null=True, verbose_name='Newspage sidebar Script'),
        ),
        migrations.CreateModel(
            name='ServicePage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('intro', wagtail.fields.RichTextField(blank=True)),
                ('thank_you_text', wagtail.fields.RichTextField(blank=True)),
                ('body', wagtail.fields.StreamField([('rawHTML', wagtail.blocks.RawHTMLBlock()), ('heading_block', wagtail.blocks.StructBlock([('heading_text', wagtail.blocks.CharBlock(classname='title', required=True)), ('size', wagtail.blocks.ChoiceBlock(blank=True, choices=[('', 'Select a header size'), ('h2', 'H2'), ('h3', 'H3'), ('h4', 'H4')], required=False))])), ('paragraph_block', wagtail.blocks.RichTextBlock(icon='fa-paragraph', template='blocks/paragraph_block.html')), ('aparat', wagtail.blocks.CharBlock(template='blocks/aparat.html')), ('image_block', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('caption', wagtail.blocks.CharBlock(required=False)), ('attribution', wagtail.blocks.CharBlock(required=False))])), ('block_quote', wagtail.blocks.StructBlock([('text', wagtail.blocks.TextBlock()), ('attribute_name', wagtail.blocks.CharBlock(blank=True, label='e.g. Mary Berry', required=False))])), ('embed_block', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-s15', template='blocks/embed_block.html'))], blank=True, null=True, verbose_name='Page body')),
                ('resume', wagtail.fields.RichTextField(blank=True, null=True, verbose_name='Resume')),
                ('phone_number', models.CharField(blank=True, max_length=64, null=True)),
                ('whatsapp_link', models.URLField(blank=True, null=True)),
                ('telegram_link', models.URLField(blank=True, null=True)),
                ('image', models.ForeignKey(blank=True, help_text='Landscape mode only; horizontal width between 1000px and 3000px.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image')),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='ServiceFormField',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('label', models.CharField(help_text='The label of the form field', max_length=255, verbose_name='label')),
                ('field_type', models.CharField(choices=[('singleline', 'Single line text'), ('multiline', 'Multi-line text'), ('email', 'Email'), ('number', 'Number'), ('url', 'URL'), ('checkbox', 'Checkbox'), ('checkboxes', 'Checkboxes'), ('dropdown', 'Drop down'), ('multiselect', 'Multiple select'), ('radio', 'Radio buttons'), ('date', 'Date'), ('datetime', 'Date/time'), ('hidden', 'Hidden field')], max_length=16, verbose_name='field type')),
                ('required', models.BooleanField(default=True, verbose_name='required')),
                ('choices', models.TextField(blank=True, help_text='Comma separated list of choices. Only applicable in checkboxes, radio and dropdown.', verbose_name='choices')),
                ('default_value', models.CharField(blank=True, help_text='Default value. Comma separated values supported for checkboxes.', max_length=255, verbose_name='default value')),
                ('help_text', models.CharField(blank=True, max_length=255, verbose_name='help text')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='form_fields', to='front.ServicePage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='HotPosts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('hot_post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hot_post', to='front.PostPage')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='hot_posts', to='front.HomePage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='HomePageTag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_object', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='tagged_items', to='front.HomePage')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='front_homepagetag_items', to='taggit.Tag')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='EditorsChoice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('chosen_post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chosen_post', to='front.PostPage')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='editors_choice', to='front.HomePage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BreakingNews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('br_post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='br_post', to='front.PostPage')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='breaking_news', to='front.HomePage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='hitcounter',
            name='service',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='counter', to='front.ServicePage'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='tags',
            field=modelcluster.contrib.taggit.ClusterTaggableManager(blank=True, help_text='A comma-separated list of tags.', through='front.HomePageTag', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]
