from django.urls import path
from . import views
urlpatterns = [
    path('get/', views.getFormulario),
    path('post/', views.postFormulario),
    path('put/<int:pk>/',views.putFormulario),
    path('delete/<int:pk>/',views.deleteFormulario),
]
