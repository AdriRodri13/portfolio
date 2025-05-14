from django.urls import path
from . import views

urlpatterns = [
        # Agrega tus rutas aquí, por ejemplo:
         path('', views.index, name='index'),
         path('proyectos', views.proyectos, name='proyectos'),
         path('detalle_proyecto/<int:id_proyecto>', views.detalle_proyecto, name='detalle_proyecto'),
         path('contacto', views.contacto, name='contacto')
]