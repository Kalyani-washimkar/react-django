from django.db import models

# Create your models here.
class book(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    quantity = models.IntegerField(max_length=100) 

    class Meta():
        db_table = 'books'