from django.db import models
from cloudinary_storage.storage import MediaCloudinaryStorage

# Create your models here.
class Proyecto(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(help_text="Breve descripción del proyecto")
    conclusion = models.TextField(help_text="Conclusion del desarrollo", blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    imagen_principal = models.ImageField(storage=MediaCloudinaryStorage(),upload_to='proyectos/', blank=True, null=True)
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo

class ParrafoProyecto(models.Model):
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE, related_name='parrafos')
    titulo = models.CharField(max_length=200)
    contenido = models.TextField()
    imagen = models.ImageField(storage=MediaCloudinaryStorage(),upload_to='proyectos/parrafos/', blank=True, null=True)
    descripcion_imagen = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Párrafo de {self.proyecto.titulo}"
    
class TecnologiasProyecto(models.Model):
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE, related_name='tecnologias_proyecto')
    nombre = models.CharField(max_length=100)
    icono = models.CharField(max_length=100, help_text="Clase de FontAwesome, ej: 'fa-brands fa-python'") 

class Tecnologia(models.Model):
    nombre = models.CharField(max_length=100)
    icono = models.CharField(max_length=100, help_text="Clase de FontAwesome, ej: 'fa-brands fa-python'")

    def __str__(self):
        return self.nombre

class Formacion(models.Model):
    titulo = models.CharField(max_length=200)
    centro = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    anio = models.PositiveIntegerField()
    icono = models.CharField(
        max_length=100,
        help_text="Clase de FontAwesome, ej: 'fa-solid fa-code'"
    )

    def __str__(self):
        return f"{self.titulo} ({self.anio})"