# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


# Create your models here.
class TempStorage(models.Model):
    artist = models.CharField(max_length=264)
    song = models.CharField(max_length=264)


class TempStorageTwo(models.Model):
    singer = models.CharField(max_length=264)


