from django.conf.urls import url
from app1 import views

app_name = 'app1'

urlpatterns = [
    url(r'^songSearcher/$', views.songSearcher, name= 'songSearcher'),
    url(r'^recommendations/$', views.recommendations, name='recommendations'),
    url(r'^artistSearcher/$', views.artistSearcher, name='artistSearcher'),
]