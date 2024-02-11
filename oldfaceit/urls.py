from django.urls import path
from . import views
app_name='oldfaceit'
urlpatterns = [
    path('<int:post_id>/', views.old_post_view, name='old_post'),
    path('<int:post_id>/<str:slug>/', views.old_post_view, name='old_post_with_slug'),
]
