# Generated by Django 5.2.1 on 2025-05-13 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0002_formacion_tecnologia"),
    ]

    operations = [
        migrations.AddField(
            model_name="parrafoproyecto",
            name="descripcion_imagen",
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name="parrafoproyecto",
            name="imagen",
            field=models.ImageField(
                blank=True, null=True, upload_to="proyectos/parrafos/"
            ),
        ),
        migrations.AddField(
            model_name="proyecto",
            name="imagen_principal",
            field=models.ImageField(blank=True, null=True, upload_to="proyectos/"),
        ),
        migrations.DeleteModel(
            name="ImagenProyecto",
        ),
    ]
