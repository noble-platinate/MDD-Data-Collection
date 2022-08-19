from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views
from django.urls import path

urlpatterns = [
    path("", views.index, name="index"),
    path("consent", views.consent, name="consent"),
    path("register", views.register, name="register"),
    path("questionaire", views.questionaire, name="questionaire")
]
urlpatterns += staticfiles_urlpatterns()
