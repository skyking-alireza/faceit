import schedule
import time

from front.models import HitCounter
from django.db.models import F
from django.utils import timezone

for h in HitCounter.objects.all():
    h.trending_update()

print("Last update: %s" % timezone.now())
