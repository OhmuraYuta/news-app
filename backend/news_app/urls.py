from django.urls import path
from news_app import views

urlpatterns = [
  path('', views.main, name='handle_input'),
]