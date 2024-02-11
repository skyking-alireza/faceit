from django.utils import timezone
from .models import HomePage
def now(request):
    return {'now':timezone.now()}
def sidebar_keywords(request):
    home = HomePage.objects.all()[0]
    return {
        'sidebar_keywords' : home.get_tags()
    }
