from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views
from django.urls import path
from django.contrib import admin

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login, name="login"),
    path("demo", views.demo, name="demo"),
    path("register", views.register, name="register"),
    path('test/<auth_token>', views.test, name="test"),
    path('verify/<auth_token>', views.verify, name="verify"),
    path('reset', views.reset, name="reset"),
    path('consent/<auth_token>', views.consent, name="consent"),
    path('q1/<auth_token>', views.q1, name="q1"),
    path('q2/<auth_token>', views.q2, name="q2"),
    path('q3/<auth_token>', views.q3, name="q3"),
    path('q4/<auth_token>', views.q4, name="q4"),
    path('q5/<auth_token>', views.q5, name="q5"),
    path('q6/<auth_token>', views.q6, name="q6"),
    path('q7/<auth_token>', views.q7, name="q7"),
    path('q8/<auth_token>', views.q8, name="q8"),
    path('q9/<auth_token>', views.q9, name="q9"),
    path('q10/<auth_token>', views.q10, name="q10"),
    path('q11/<auth_token>', views.q11, name="q11"),
    path('q12/<auth_token>', views.q12, name="q12"),
    # path('q14/<auth_token>', views.q14, name="q14"),
    # path('q15/<auth_token>', views.q15, name="q15"),
    # path('q16/<auth_token>', views.q16, name="q16"),
    # path('q17/<auth_token>', views.q17, name="q17"),
    # path('q18/<auth_token>', views.q18, name="q18"),
    # path('q19/<auth_token>', views.q19, name="q19"),
    # path('q20/<auth_token>', views.q20, name="q20"),
    # path('q21/<auth_token>', views.q21, name="q21"),
    # path('q22/<auth_token>', views.q22, name="q22"),
    # path('q23/<auth_token>', views.q23, name="q23"),
    # path('q24/<auth_token>', views.q24, name="q24"),
    # path('q25/<auth_token>', views.q25, name="q25"),
    # path('q26/<auth_token>', views.q26, name="q26"),
    # path('q27/<auth_token>', views.q27, name="q27"),
    # path('q28/<auth_token>', views.q28, name="q28"),
    # path('q29/<auth_token>', views.q29, name="q29"),
    # path('q30/<auth_token>', views.q30, name="q30"),
    # path('q31/<auth_token>', views.q31, name="q31"),
    # path('q32/<auth_token>', views.q32, name="q32"),
    # path('q33/<auth_token>', views.q33, name="q33"),
    # path('q34/<auth_token>', views.q34, name="q34"),
    # path('q35/<auth_token>', views.q35, name="q35"),
    # path('q36/<auth_token>', views.q36, name="q36"),
    ]
urlpatterns += staticfiles_urlpatterns()
