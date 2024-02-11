# Generated by Django 2.2.7 on 2019-11-30 12:55

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.embeds.blocks
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0001_squashed_0021'),
        ('front', '0006_auto_20191125_1350'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='ip',
            field=models.GenericIPAddressField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='comment',
            name='reply_to',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='child', to='front.Comment'),
        ),
        migrations.AddField(
            model_name='footer',
            name='about_text',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='homepage',
            name='video_index_page',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='home', to='front.PostIndexPage'),
        ),
        migrations.AddField(
            model_name='postpage',
            name='hits',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='postpage',
            name='main_image',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='postpage',
            name='old_id',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='postpage',
            name='reference_link',
            field=models.CharField(blank=True, max_length=512, null=True),
        ),
        migrations.AddField(
            model_name='postpage',
            name='reference_title',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='bottom_img',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='bottom_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='top_img',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='promotionsettings',
            name='top_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='staticlinkheader',
            name='parent_link',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='childs', to='front.StaticLink'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='comment',
            name='email',
            field=models.EmailField(blank=True, default=None, max_length=254, null=True, verbose_name='آدرس ایمیل'),
        ),
        migrations.AlterField(
            model_name='postpage',
            name='body',
            field=wagtail.core.fields.StreamField([('rawHTML', wagtail.core.blocks.RawHTMLBlock()), ('heading_block', wagtail.core.blocks.StructBlock([('heading_text', wagtail.core.blocks.CharBlock(classname='title', required=True)), ('size', wagtail.core.blocks.ChoiceBlock(blank=True, choices=[('', 'Select a header size'), ('h2', 'H2'), ('h3', 'H3'), ('h4', 'H4')], required=False))])), ('paragraph_block', wagtail.core.blocks.RichTextBlock(icon='fa-paragraph', template='blocks/paragraph_block.html')), ('aparat', wagtail.core.blocks.CharBlock(template='blocks/aparat.html')), ('image_block', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('caption', wagtail.core.blocks.CharBlock(required=False)), ('attribution', wagtail.core.blocks.CharBlock(required=False))])), ('block_quote', wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.TextBlock()), ('attribute_name', wagtail.core.blocks.CharBlock(blank=True, label='e.g. Mary Berry', required=False))])), ('embed_block', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-s15', template='blocks/embed_block.html'))], blank=True, verbose_name='Page body'),
        ),
        migrations.AlterField(
            model_name='postpage',
            name='date_published',
            field=models.DateField(blank=True, default=django.utils.timezone.now, null=True, verbose_name='Date article published'),
        ),
        migrations.AlterField(
            model_name='postpage',
            name='introduction',
            field=models.TextField(blank=True, help_text='Text to describe the page'),
        ),
        migrations.AddIndex(
            model_name='postpage',
            index=models.Index(fields=['old_id'], name='front_postp_old_id_6ee1d6_idx'),
        ),
    ]