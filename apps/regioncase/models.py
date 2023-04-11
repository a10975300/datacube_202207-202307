from django.db import models
from product.models import Products
from ckeditor_uploader.fields import RichTextUploadingField
from datetime import datetime


class RegionCase(models.Model):
    """
    define table based on the dfa review
    """
    IMPACT_SCOPE = (
        ("Factory", "Factory"),
        ("Field ", "Field"),
        ("Field + Factory", "Field+Factory"),
    )
    BUILD_STAGE = (
        ("P/R-1", "P/R-1"),
        ("P/R-2", "P/R-2"),
        ("Sustaining", "Sustaining"),
        ("Field", "Field"),
    )
    RC_TYPE = (
        ("COMM", "COMM"),
        ("COMM - Dfm", "COMM Dfm"),
        ("COMM - Others", "COMM-Others"),
        ("Commodity", "Commodity"),
        ("Commodity - Dfm", "Commodity Dfm"),
        ("Commodity - Others", "Commodity Others"),
        ("Design - BIOS", "Design-BIOS"),
        ("Design - EE", "Design-EE"),
        ("Design - EE Dfm", "Design-EE Dfm"),
        ("Design - Image Dfm", "Design-Image Dfm"),
        ("Design - ME", "Design-ME"),
        ("Design - ME Dfm", "Design-ME Dfm"),
        ("Design - Others", "Design-Others"),
        ("Design - SW", "Design-SW"),
        ("Design - System Integration", "Design-System Integration"),
        ("Diags", "Diags"),
        ("Factory Operation", "Factory Operation"),
        ("Material - BS", "Material-BS"),
        ("Material - GTK", "Material-GTK"),
        ("Material - Others", "Material-Others"),
        ("Material - OTK", "Material-OTK"),
    )
    ST_TYPE = (
        ("Containment - add on", "Containment-add on"),
        ("Containment - rework", "Containment-rework"),
        ("Containment - SOP/Fixture", "Containment-SOP/Fixture"),
        ("Containment - sorting", "Containment-sorting"),
        ("Inaction", "Inaction"),
        ("Design", "Design"),
        ("Waive", "Waive"),
    )
    LT_TYPE = (
        ("Design", "Design"),
        ("Supplier", "Supplier"),
        ("Factory - Process", "Factory-Process"),
        ("Factory - Fixture", "Factory-Fixture"),
    )
    STATUS = (
        ("Gating", "Gating"),
        ("Tracking", "Tracking"),
        ("Close", "Close"),
        ("Fix in next phase", "Fix in next phase")
    )
    REGIONAL_FACTORY = {
        ("IMX", "IMX"),
        ("India", "India"),
    }
    FACTORY_PROCESS = (
        ("1-SMT", "SMT"),
        ("2-Off-line Assy", "Offline-Assy"),
        ("3-Sub Assy Test", "Offline-Test"),
        ("4-Final Assy ", "FA"),
        ("5-Pre Test", "Pre-Test"),
        ("6-Run-In", "Run-In"),
        ("7-Image Download", "Image D/L"),
        ("8-OOBA ", "OOBA"),
        ("9-Packing ", "Packing"),
    )
    GPE = (
        ("Kevin Qian", "Kevin Qian"),
        ("Wilson Xiao", "Wilson Xiao"),
        ("Scott She", "Scott She"),
        ("Chris Cui", "Chris Cui"),
        ("Ivy Zeng", "Ivy Zeng"),
        ("Niko Zhou", "Niko Zhou"),
        ("Damon Wang", "Damon Wang"),
        ("Tian Zhang", "Tian Zhang"),
        ("Miller Shih", "Miller Shih"),
        ("Franky He", "Franky He"),
        ("Matt Peng", "Matt Peng"),
    )
    SEGMENT = (
        ("1000", "1000"),
        ("800", "800"),
        ("600", "600"),
        ("400", "400"),
        ("mWS", "mWS"),
        ("Spectre", "Spectre"),
        ("ENVY", "ENVY"),
        ("Pavilion", "Pavilion"),
        ("OMEN", "OMEN"),
        ("Pavilion Gaming", "Pavilion Gaming"),
        ("OPP", "OPP"),
        ("Victus", "Victus"),
        ("Chromebook", "Chromebook"),
        ("Education", "Education"),
        ("Dock", "Dock"),
        ("TC", "TC"),
        ("RPOS", "RPOS"),
    )

    rpe_owner = models.ForeignKey("auth.user", verbose_name="Owner", on_delete=models.CASCADE, related_name="rpe")
    gpe_owner = models.CharField(choices=GPE, verbose_name="Platform PE", max_length=50)
    odm_name = models.CharField(choices=REGIONAL_FACTORY, max_length=15, verbose_name="Factory")
    process_name = models.CharField(choices=FACTORY_PROCESS, verbose_name="Mfg Process", max_length=50)
    platform_name = models.ForeignKey(Products, verbose_name="Platform Name", on_delete=models.CASCADE, related_name="platform")
    product_segment = models.CharField(choices=SEGMENT, max_length=20, verbose_name="Segment")
    build_stage = models.CharField(choices=BUILD_STAGE, verbose_name="Stage", max_length=50)
    impact_scope = models.CharField(choices=IMPACT_SCOPE, verbose_name="Impact Scope", max_length=50)
    input_qty = models.IntegerField(verbose_name="Input")
    defect_qty = models.IntegerField(verbose_name="Defect")
    fail_rate_stage = models.IntegerField(null=True, blank=True, verbose_name="Failure Rate")
    issue_status = models.CharField(choices=STATUS, verbose_name="Issue Status", max_length=50)

    issue_photo = models.ImageField(upload_to="region_case/images/", null=True, blank=True, verbose_name="Defect Picture")
    issue_desc = RichTextUploadingField(default='', verbose_name='Issue Description and Investigation')
    # issue_analysis = RichTextUploadingField(default="", verbose_name="Investigation")
    root_cause = RichTextUploadingField(default="", verbose_name="Root Cause")
    root_cause_category = models.CharField(choices=RC_TYPE, verbose_name="Root-cause Category", max_length=50)
    short_term = RichTextUploadingField(default="", verbose_name="Short-Term")
    short_term_category = models.CharField(choices=ST_TYPE, verbose_name="Short-term Category", max_length=50)
    long_term = RichTextUploadingField(default="", verbose_name="Long-Term")
    long_term_category = models.CharField(choices=LT_TYPE, verbose_name="Long-term Category", max_length=50)
    crate_date = models.DateTimeField(default=datetime.now, verbose_name="Create Date")

    class Meta:
        verbose_name = "case"
        verbose_name_plural = verbose_name
        db_table = "datacube_regional_issue"  # 指定数据表名称

    def __str__(self):
        return self.issue_desc