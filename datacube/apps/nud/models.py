from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class Nud_list(models.Model):
    """
    define table based on the dfa review
    """
    def __int__(self):
        pass

    class Meta:
        verbose_name = "Nud list"
        verbose_name_plural = verbose_name
        db_table = "datacube_nud_list"  # 指定数据表名称