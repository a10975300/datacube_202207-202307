from django.contrib.auth.models import User
from django.db import models
from datetime import datetime
from product.models import Products
from django.utils.html import format_html

# define DFM general checklist and review result
class Dfm_General_Checklist(models.Model):
    def __int__(self):
        pass

    ITEM_PRIORITY = (
        (1, 1),
        (2, 2),
        (3, 3),
        (0, 0),
    )
    LEVEL = (
        ("Finished goods", "Finished goods"),
        ("Rework in sub-assy design", "Rework in sub-assy design"),
        ("General in sub-assy design", "General in sub-assy design"),
        ("Sub-assy  Hinge uP unit", "Sub-assy  Hinge uP unit"),
        ("Sub-assy  base unit", "Sub-assy  base unit"),
        ("New finding","New finding"),
    )
    dfm_item_item_no = models.IntegerField(verbose_name="Item No")
    dfm_assembly_level = models.CharField(choices= LEVEL, verbose_name="Assembly Level", max_length=100, default="", null=True, blank=True, )
    dfm_item_desc = models.TextField(default='', verbose_name='Item Descriptions')
    dfm_item_priority = models.IntegerField(choices= ITEM_PRIORITY, verbose_name="Priority")
    dfm_item_attributes = models.CharField(default="General", null=True, blank=True, verbose_name='Item Type',max_length=20)
    dfm_item_version = models.CharField(default="Ver:2.0", null=True, blank=True, verbose_name='Template Version',max_length=20)
    dfm_item_notes = models.TextField(null=True, blank=True, verbose_name='Change Notes',max_length=200)
    crate_date = models.DateTimeField(default=datetime.now, verbose_name="Create Date")

    class Meta:
        verbose_name = "Dfm Guidance"
        verbose_name_plural = verbose_name
        db_table = "datacube_dfm_general_checklist"  # 指定数据表名称

    def __str__(self):
        return str(self.dfm_item_desc)

class Dfm_Review_Result(models.Model):
    """
    define table based on the dfm teardown reprot
    """
    def __int__(self):
        pass
    NUD = (
        ("...", "..."),
        ("New", "New"),
        ("Unique", "Unique"),
        ("Difficult", "Difficult"),
    )

    dfm_review_item_no = models.IntegerField(verbose_name="Item No")
    dfm_review_item_desc = models.ForeignKey(Dfm_General_Checklist, verbose_name="Item Descriptions", on_delete=models.CASCADE, default="",max_length=500)
    dfm_product = models.ForeignKey(Products, verbose_name="Product", on_delete=models.CASCADE, default="")
    dfm_product_nud = models.CharField(choices=NUD, default=NUD[0][0], max_length=15, null=True, blank=True, verbose_name="NUD")
    dfm_product_part_category = models.CharField(max_length=50, default="", null=True, blank=True, verbose_name="Parts/Portion(Where)")
    dfm_product_issue_symptom = models.CharField(max_length=500, default="", null=True, blank=True, verbose_name="Issue Symptom")#在Ver:1.63-3是Feature欄位
    dfm_product_design_structures = models.CharField(max_length=100, default="", null=True, blank=True, verbose_name="Design structures of issues")#在Ver:1.63-3是Category欄位
    dfm_product_nonmacth_item = models.TextField( default="", null=True, blank=True, verbose_name="Non-match Item")
    dfm_product_odm_actions = models.TextField(default="", null=True, blank=True, verbose_name="ODM  Corrective Action")
    dfm_product_solution_category = models.CharField(default="", null=True, blank=True, max_length=100, verbose_name="Types of solutions")
    dfm_product_cnc = models.CharField(default="...", max_length=10, null=True, blank=True, verbose_name="CNC")
    dfm_product_si = models.CharField(default="...", max_length=10, null=True, blank=True, verbose_name="SI")
    dfm_product_pv = models.CharField(default="...", max_length=10, null=True, blank=True, verbose_name="PV")
    dfm_product_mv = models.CharField(default="...", max_length=10, null=True, blank=True, verbose_name="MV")
    #photo = models.ImageField(upload_to="dfm/images/", null=True, blank=True, verbose_name="Defect Picture")
    create_date = models.DateTimeField(default=datetime.now, verbose_name="Create Date")

    class Meta:
        verbose_name = "Reviewed item"
        verbose_name_plural = verbose_name
        db_table = "datacube_dfm_review_result"  # 指定数据表名称

    def __str__(self):
        return "item_" + str(self.dfm_review_item_no)

class DFM_Report_Import_Records(models.Model):
    """
    记录dfm report导入情况
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, editable=False, null=True, verbose_name="User")
    import_product_name = models.CharField(max_length=30, verbose_name="Product Name", help_text="Product Name")
    import_stage_cnc = models.CharField(max_length=30, null=True, blank=True, verbose_name="CNC", help_text="CNC")
    import_stage_si = models.CharField(max_length=30, null=True, blank=True, verbose_name="SI", help_text="SI")
    import_stage_pv = models.CharField(max_length=30, null=True, blank=True, verbose_name="PV", help_text="PV")
    import_stage_mv = models.CharField(max_length=30, null=True, blank=True, verbose_name="MV", help_text="MV")
    import_date = models.DateTimeField(default=datetime.now, verbose_name="Update Date", help_text="Date")

    class Meta:
        verbose_name = "upload record"
        verbose_name_plural = verbose_name
        db_table = "datacube_dfm_import_records"  # 指定数据表名称

    def __str__(self):
        return str(self.import_product_name)