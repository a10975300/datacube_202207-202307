from django.contrib.auth.models import User
from django.db import models
from datetime import datetime

class ICs(models.Model):
    Part_Owner = (
        ("OTK", "OTK"),
        ("GTK", "GTK"),
        ("BS", "BS"),
    )
    Phase = (
        ("POR", "POR"),
        ("PV Exit", "PV Exit"),
    )
    Segment = (
        ("OMEN", "OMEN"),
        ("Victus", "Victus"),
        ("Spectre", "Spectre"),
        ("Envy", "Envy"),
        ("GTK", "GTK"),
        ("Pavilion", "Pavilion"),
        ("OPP", "OPP"),
        ("Chromebook", "Chromebook"),
    )

    ic_Cycle = models.CharField(null=True,blank=True, max_length=50, verbose_name="Cycle")
    ic_Project_name = models.CharField(null=True,blank=True, max_length=50, verbose_name="Project name")
    ic_HW_PM = models.CharField(null=True,blank=True, max_length=50, verbose_name="HW PM")
    ic_ODM = models.CharField(null=True,blank=True, max_length=30, verbose_name="ODM")
    ic_Segment = models.CharField(null=True,blank=True, choices=Segment,max_length=30, verbose_name="Segment")
    ic_Chipset_Type = models.CharField(null=True,blank=True, max_length=50, verbose_name="Chipset Type")
    ic_Phase = models.CharField(null=True,blank=True, choices=Phase,max_length=30, verbose_name="Phase")
    ic_IC_Function = models.CharField(null=True, max_length=50, verbose_name="IC Function")
    ic_Vendor = models.CharField(null=True, max_length=30, verbose_name="Vendor")
    ic_Vendor_PN = models.CharField(null=True, max_length=100, verbose_name="Vendor PN")
    ic_Description = models.TextField(null=True, max_length=100, verbose_name="Description")
    ic_Part_Owner = models.CharField(null=True, blank=True,choices=Part_Owner,max_length=30, verbose_name="Part Owner")
    ic_HP_PN = models.CharField(null=True, blank=True, max_length=30, verbose_name="HP PN")
    ic_IC_qty = models.IntegerField(null=True,blank=True, verbose_name="IC Q'ty")
    ic_Full_Feature = models.CharField(null=True, blank=True, max_length=30, verbose_name="Full Feature")
    ic_Defeature = models.CharField(null=True, blank=True, max_length=30, verbose_name="Defeature")
    ic_Vendor_2nd = models.CharField(null=True, blank=True, max_length=30, verbose_name="Vendor_2nd")
    ic_Vendor_PN_2nd = models.CharField(null=True, blank=True, max_length=30, verbose_name="Vendor PN_2nd")
    ic_Vendor_3rd = models.CharField(null=True, blank=True, max_length=30, verbose_name="Vendor_3rd")
    ic_Vendor_PN_3rd = models.CharField(null=True, blank=True, max_length=30, verbose_name="Vendor PN_3rd")
    ic_Vendor_4th = models.CharField(null=True, blank=True, max_length=30, verbose_name="Vendor_4th")
    ic_Vendor_PN_4th = models.CharField(null=True, blank=True, max_length=30, verbose_name="Vendor PN_4th")
    ic_cratedate = models.DateTimeField(default=datetime.now, verbose_name="Create Date")

    class Meta:
        verbose_name = "Critical IC"
        verbose_name_plural = verbose_name
        db_table = "datacube_critical_ic"  # 指定数据表名称

    def __str__(self):
        return self.ic_IC_Function


class IC_Report_Import_Records(models.Model):
    """
    记录IC report导入情况
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, editable=False, null=True, verbose_name="User")
    import_Project_name = models.CharField(max_length=50, null=True, verbose_name="Project name", help_text="Project name")
    import_Cycle = models.CharField(max_length=50, null=True, verbose_name="Cycle",help_text="Cycle")
    import_date = models.DateTimeField(default=datetime.now, verbose_name="Update Date", help_text="Date")


    class Meta:
        verbose_name = "IC_DataImportRecords"
        verbose_name_plural = verbose_name
        db_table = "datacube_ic_import_records"  # 指定数据表名称

    def __str__(self):
        return self.import_Project_name