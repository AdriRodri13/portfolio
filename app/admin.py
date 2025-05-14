from django.contrib import admin
from .models import Proyecto, ParrafoProyecto, TecnologiasProyecto, Formacion, Tecnologia

class ParrafoProyectoInline(admin.StackedInline):
    model = ParrafoProyecto
    extra = 1

class TecnologiasProyectoInline(admin.TabularInline):
    model = TecnologiasProyecto
    extra = 1

@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'creado_en')
    inlines = [ParrafoProyectoInline, TecnologiasProyectoInline]

@admin.register(Formacion)
class FormacionAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'centro', 'anio')
    search_fields = ('titulo', 'centro')

@admin.register(Tecnologia)
class TecnologiaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'icono')
    search_fields = ('nombre',)

@admin.register(TecnologiasProyecto)
class TecnologiasProyectoAdmin(admin.ModelAdmin):
    list_display = ('proyecto', 'nombre', 'icono')
    search_fields = ('nombre', 'proyecto__titulo')
