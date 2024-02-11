from django import forms
from .models import Comment

class SubscribeForm(forms.Form):
    email = forms.EmailField(label  ="آدرس ایمیل")

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['name', 'email', 'text', 'reply_to']
