from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class RegionCase(models.Model):
    """
    define table based on the dfa review
    """
    def __int__(self):
        pass

    class Meta:
        verbose_name = "Issue list"
        verbose_name_plural = verbose_name
        db_table = "datacube_region_issue"  # 指定数据表名称