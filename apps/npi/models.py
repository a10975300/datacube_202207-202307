from django.db import models
from datetime import datetime
from django.utils.html import format_html
from product.models import Products
from ckeditor_uploader.fields import RichTextUploadingField

class DataImportRecords(models.Model):
    """
    记录safelaunch导入信息
    """
    user = models.ForeignKey("auth.user", on_delete=models.CASCADE, verbose_name='User')
    import_product_name = models.CharField(max_length=30, verbose_name="Product Name", help_text="导入产品名称")
    import_product_phase = models.CharField(max_length=10, verbose_name="Product Stage", help_text="导入产品阶段")
    import_date = models.DateTimeField(default=datetime.now, verbose_name="Import Date", help_text="导入时间")
    class Meta:
        verbose_name = "upload record"
        verbose_name_plural = verbose_name
        db_table = "datacube_import_records"  # 指定数据表名称

    def __str__(self):
        return self.import_product_name

class SymptomCategory_First(models.Model):
    """
    SymptomCategory_First
    """
    category_Name = models.CharField(default="", max_length=50, verbose_name="Category Name", help_text="类别名")
    # category_Code = models.CharField(default="", max_length=30, verbose_name="Category Code", help_text="类别编号")
    category_Desc = RichTextUploadingField(default="", verbose_name="Category Desc", help_text="类别描述")
    cratedate = models.DateTimeField(default=datetime.now, verbose_name="CreateDate", help_text="创建时间")

    class Meta:
        verbose_name = "Category-I"
        verbose_name_plural = verbose_name
        db_table = "datacube_category_1"  # 指定数据表名称

    def __str__(self):
        return self.category_Name

class SymptomCategory_Second(models.Model):
    """
    SymptomCategory_Second
    """
    objects = None
    category_FirstType = models.ForeignKey(SymptomCategory_First, verbose_name="Categoroy-I", help_text="问题分类_I", on_delete=models.CASCADE)
    category_Name = models.CharField(default="", max_length=50, verbose_name="Category Name", help_text="类别名")
    # category_Code = models.CharField(default="", max_length=30, verbose_name="Category Code", help_text="类别编号")
    category_Desc = RichTextUploadingField(default="", verbose_name="Category Desc", help_text="类别描述")
    cratedate = models.DateTimeField(default=datetime.now, verbose_name="CreateDate", help_text="创建时间")

    class Meta:
        verbose_name = "Category-II"
        verbose_name_plural = verbose_name
        db_table = "datacube_category_2"  # 指定数据表名称

    def __str__(self):
        return self.category_Name

class Issue(models.Model):
    """
    safelaunch issue
    """
    IMPACT_SCOPE = (
        ("Factory", "Factory"),
        ("Field ", "Field"),
        ("Field + Factory", "Field+Factory"),
    )
    BUILD_STAGE =(
        ("SI-1", "SI-1"),
        ("SI-2", "SI-2"),
        ("SI-3", "SI-3"),
        ("PV-1", "PV-1"),
        ("PV-2", "PV-2"),
        ("PV-3", "PV-3"),
        ("PRB/TLD/PVR", "PRB/TLD/PVR"),
        ("MV-1", "MV-1"),
        ("MV-2", "MV-2"),
        ("NA", "NA"), # this NA use for issue repeated stage
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
    FACTORY_PROCESS =(
        ("1-SMT","SMT"),
        ("2-Off-line Assy", "Offline-Assy"),
        ("3-Sub Assy Test", "Offline-Test"),
        ("4-Final Assy ", "FA"),
        ("5-Pre Test", "Pre-Test"),
        ("6-Run-In", "Run-In"),
        ("7-Image Download", "Image D/L"),
        ("8-OOBA ", "OOBA"),
        ("9-Packing ", "Packing"),
    )
    DUPLICATE = (
        ("Y", "Y"),
        ("N", "N")
    )

    platformName = models.ForeignKey(Products, verbose_name="Platform Name", on_delete=models.CASCADE,
                                          related_name="PlatformName", default="")
    processName =models.CharField(choices=FACTORY_PROCESS,verbose_name="Mfg Process", max_length=50)
    issue_desc = models.TextField(default='', verbose_name='Issue Description',max_length=250)
    issue_interaction = models.ForeignKey(SymptomCategory_First, verbose_name="Category I", on_delete=models.CASCADE,
                                          related_name="issue_interaction")
    issue_symptom = models.ForeignKey(SymptomCategory_Second, verbose_name="Category II", on_delete=models.CASCADE,
                                      related_name="issue_symptom")
    impact_scope = models.CharField(choices=IMPACT_SCOPE, verbose_name="Impact Scope", max_length=50)
    input_qty = models.IntegerField(verbose_name="Total Input")
    defect_qty = models.IntegerField(verbose_name="Defect")
    fail_rate_stage = models.TextField(default="", null=True, blank=True, verbose_name="Fail By Stage")

    pre_build_qty = models.IntegerField(default=0, verbose_name="Prebuild Input")
    pre_build_defcet_qty = models.IntegerField(default=0, verbose_name="Prebuild Defect")
    mini_build_qty = models.IntegerField(default=0, verbose_name="Mini-1/FAI Input")
    mini_build_defcet_qty = models.IntegerField(default=0, verbose_name="Mini-1/FAI Defect")
    mini2_build_qty = models.IntegerField(default=0, verbose_name="Mini-2 Input")
    mini2_build_defcet_qty = models.IntegerField(default=0, verbose_name="Mini-2 Defect")
    balance_qty = models.IntegerField(default=0, verbose_name="Balance/Main Input")
    balance_defcet_qty = models.IntegerField(default=0, verbose_name="Balance/Main Defect")

    sn = models.TextField(default="", null=True, blank=True, verbose_name="SN Info", max_length=300)
    sku = models.TextField(default="", null=True, blank=True, verbose_name="SKU Info", max_length=200)
    photo = models.ImageField(upload_to="issue/images/", null=True, blank=True, verbose_name="Defect Picture")
    issue_analysis = RichTextUploadingField(default="",verbose_name="Issue Analysis")
    root_cause = RichTextUploadingField(default="", verbose_name="Root Cause")
    root_cause_category = models.CharField(choices=RC_TYPE, verbose_name="Root Category", max_length=50)
    short_term = RichTextUploadingField(default="", verbose_name="Short Term")
    short_term_category = models.CharField(choices=ST_TYPE, verbose_name="Short Term Category", max_length=50)
    long_term = RichTextUploadingField(default="", verbose_name="Long Term")
    long_term_category = models.CharField(choices=LT_TYPE, verbose_name="Long Term Category", max_length=50)
    status = models.CharField(choices=STATUS, verbose_name="Status", max_length=50)
    obs = models.CharField(max_length=10,verbose_name="OBS", null=True, blank=True)
    duplicate = models.CharField(choices=DUPLICATE, verbose_name="Duplicate?", max_length=50)
    errorCode = models.CharField(max_length=10, verbose_name="Error Code", null=True, blank=True)
    repeating = models.CharField(choices=DUPLICATE, verbose_name="is Repeat Issue?", max_length=50)
    repeatingstage = models.CharField(choices=BUILD_STAGE, verbose_name="Repeated Stage", max_length=50)
    buildstage = models.CharField(choices=BUILD_STAGE, verbose_name="Stage", max_length=50)
    owner = models.CharField(max_length=50, verbose_name="Owner",default="")
    updatedate = models.DateField(null=True, blank=True, verbose_name="Update Date")
    obs_link = models.CharField(default="", max_length=200, verbose_name="OBS Link")
    cratedate = models.DateTimeField(default=datetime.now, verbose_name="Create Date")

    #处理图片
    def image_data(self):
        # 这里添加一个防空判断
        if not self.photo:
            return '' # my_set_image_data
        return format_html(
            """<div οnclick='$(".id_photo").hide();$(this).next().show();'><img src='{}' style='width:100px;height:70px;' >放大</div><div class='field_img' οnclick="$('.id_photo').hide()" style="z-index:9999;position:fixed; left: 100px; top:100px;display:none;"><img src='{}' style='width:500px; height:500px;'></div>""",
            self.photo.url, self.photo.url)
    image_data.short_description = u'Fail Picture'

    # 给状态标注颜色
    def colorStatus(self):
        if self.status == 'Gating':
            formatStatus = format_html('<span style="color:red">Gating</span>')
            return formatStatus
        elif self.status == 'Tracking':
            formatStatus = format_html('<span style="color:orange">Tracking</span>')
            return formatStatus
        elif self.status == 'Fix in next phase':
            formatStatus = format_html('<span style="color:#428bca">OOC</span>')
            return formatStatus
        elif self.status == 'Close':
            formatStatus = format_html('<span style="color:Green">Closed</span>')
            return formatStatus
    colorStatus.short_description = "<span style='color:#428bca'>Status</span>"

    class Meta:
        verbose_name = "Safelaunch Issues"
        verbose_name_plural = verbose_name
        db_table = "datacube_npi_issues"  # 指定数据表名称

    def __str__(self):
        return self.issue_desc[0:25]


# 给models.TextField style设定宽高
# class myTextField(forms.ModelForm):
#     class Meta:
#        model = Issue
#        fields = '__all__'
#        widgets = {
#          'platformName': forms.TextInput(attrs={
#              'size': 80, #'title': 'Your name'
#                               }),
#        }
        #'style': 'height:10px width:auto',

