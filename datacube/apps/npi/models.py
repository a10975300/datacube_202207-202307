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
    import_product_phase = models.CharField(max_length=50, verbose_name="Product Stage", help_text="导入产品阶段")
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
    category_Name = models.CharField(default="NA", max_length=50, verbose_name="Category Name", help_text="类别名")
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
    category_Name = models.CharField(default="NA", max_length=50, verbose_name="Category Name", help_text="类别名")
    # category_Code = models.CharField(default="", max_length=30, verbose_name="Category Code", help_text="类别编号")
    category_Desc = RichTextUploadingField(default="", verbose_name="Category Desc", help_text="类别描述")
    cratedate = models.DateTimeField(default=datetime.now, verbose_name="CreateDate", help_text="创建时间")

    class Meta:
        verbose_name = "Category-II"
        verbose_name_plural = verbose_name
        db_table = "datacube_category_2"  # 指定数据表名称

    def __str__(self):
        return self.category_Name

# NB issue
class Issue(models.Model):
    """
    safelaunch issue
    """
    PRIORITY = (
        ("1","1"),
        ("2","2"),
        ("3","3"),
        (".", "."),
    )
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
        ("Ramp", "Ramp"),
        ("Sustaining", "Sustaining"),
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
        ("Field", "Field"),
        ("Factory", "Factory"),

    )
    DUPLICATE = (
        ("Y", "Y"),
        ("N", "N")
    )

    platformName = models.ForeignKey(Products, verbose_name="Platform Name", on_delete=models.CASCADE,
                                          related_name="PlatformName", default="")
    processName =models.CharField(choices=FACTORY_PROCESS,verbose_name="Issue is from", max_length=50)
    issue_desc = models.TextField(default='', verbose_name='Issue Description',max_length=250)
    #issue_desc = RichTextUploadingField(default='', verbose_name='Issue Description')
    issue_interaction = models.ForeignKey(SymptomCategory_First, verbose_name="Category I", on_delete=models.CASCADE,
                                          related_name="issue_interaction", null=True, blank=True,)
    issue_symptom = models.ForeignKey(SymptomCategory_Second, verbose_name="Category II", on_delete=models.CASCADE,
                                      related_name="issue_symptom", null=True, blank=True,)
    impact_scope = models.CharField(choices=IMPACT_SCOPE, verbose_name="Impact Scope", max_length=50)
    priority = models.CharField(choices=PRIORITY, verbose_name="Priority", max_length=10, blank=True, default='.')
    business_impact = models.CharField(verbose_name="Biz Impact", max_length=100, blank=True, default='.')
    input_qty = models.IntegerField(verbose_name="Total Input", null=True, blank=True)
    defect_qty = models.IntegerField(verbose_name="Defect", null=True, blank=True)
    fail_rate_stage = models.TextField(default="", null=True, blank=True, verbose_name="Fail By Stage")

    pre_build_qty = models.IntegerField(default=0, verbose_name="Prebuild Input", null=True, blank=True)
    pre_build_defcet_qty = models.IntegerField(default=0, verbose_name="Prebuild Defect", null=True, blank=True)
    mini_build_qty = models.IntegerField(default=0, verbose_name="Mini-1/FAI Input", null=True, blank=True)
    mini_build_defcet_qty = models.IntegerField(default=0, verbose_name="Mini-1/FAI Defect", null=True, blank=True)
    mini2_build_qty = models.IntegerField(default=0, verbose_name="Mini-2 Input",null=True, blank=True)
    mini2_build_defcet_qty = models.IntegerField(default=0, verbose_name="Mini-2 Defect", null=True, blank=True)
    balance_qty = models.IntegerField(default=0, verbose_name="Balance/Main Input", null=True, blank=True)
    balance_defcet_qty = models.IntegerField(default=0, verbose_name="Balance/Main Defect", null=True, blank=True)

    sn = models.TextField(default="", null=True, blank=True, verbose_name="SN Info", max_length=300)
    sku = models.TextField(default="", null=True, blank=True, verbose_name="SKU Info", max_length=200)
    photo = models.ImageField(upload_to="issue/images/", null=True, blank=True, verbose_name="Defect Picture")
    issue_analysis = RichTextUploadingField(default="",verbose_name="Issue Analysis")
    root_cause = RichTextUploadingField(default="", verbose_name="Root Cause")
    root_cause_category = models.CharField(choices=RC_TYPE, verbose_name="Root Category", max_length=50, null=True, blank=True)
    short_term = RichTextUploadingField(default="", verbose_name="Short Term")
    short_term_category = models.CharField(choices=ST_TYPE, verbose_name="Short Term Category", max_length=50, null=True, blank=True)
    long_term = RichTextUploadingField(default="", verbose_name="Long Term")
    long_term_category = models.CharField(choices=LT_TYPE, verbose_name="Long Term Category", max_length=50, null=True, blank=True)
    status = models.CharField(choices=STATUS, verbose_name="Status", max_length=50)
    obs = models.CharField(max_length=10,verbose_name="OBS", null=True, blank=True)
    duplicate = models.CharField(choices=DUPLICATE, verbose_name="Duplicate?", max_length=5, null=True, blank=True,)
    errorCode = models.CharField(max_length=10, verbose_name="Error Code", null=True, blank=True)
    repeating = models.CharField(choices=DUPLICATE, verbose_name="is Repeat Issue?", max_length=5, null=True, blank=True)
    repeatingstage = models.CharField(choices=BUILD_STAGE, verbose_name="Repeated Stage", max_length=50, null=True, blank=True)
    buildstage = models.CharField(choices=BUILD_STAGE, verbose_name="Stage", max_length=50)
    owner = models.CharField(max_length=100, verbose_name="Owner",default="")
    updatedate = models.DateField(null=True, blank=True, verbose_name="Update Date")
    obs_link = models.CharField(default="", max_length=200, verbose_name="OBS Link", null=True, blank=True)
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
        verbose_name = "NB"
        verbose_name_plural = verbose_name
        db_table = "datacube_npi_issues"  # 指定数据表名称

    def __str__(self):
        return self.issue_desc[0:25]

# DT issue
class DesktopIssue(models.Model):

    PRIORITY = (
        ("1","1"),
        ("2","2"),
        ("3","3"),
        (".", "."),
    )
    IMPACT_SCOPE = (
        ("Factory", "Factory"),
        ("Field ", "Field"),
        ("Field + Factory", "Field+Factory"),
    )
    BUILD_STAGE =(
        ("SI", "SI"),
        ("PV", "PV"),
        ("PRB/TLD", "PRB/TLD"),
        ("MV (Mini1)", "MV(Mini1)"),
        ("MV (Mini2)", "MV(Mini2)"),
        ("MV (Balance Build)", "MV(Balance Build)"),
        ("Pre-Build (SP)", "Pre-Build(SP)"),
        ("Mainbuild (MVB)", "Mainbuild(MVB)"),
        ("CVB", "CVB"),
        ("NA", "NA"), # this NA use for issue repeated stage
    )
    RC_TYPE = (
        ("Commodity Other", "Commodity Other"),
        ("Commodity Quality", "Commodity Quality"),
        ("Commodity Specification", "Commodity Specification"),
        ("Commodity SW/FW", "Commodity SW/FW"),
        ("Commodity Validation Gap", "Commodity Validation Gap"),
        ("Design EE - Spec Change", "Design EE-Spec Change"),
        ("Design EE - Validation Gap", "Design EE-Validation Gap"),
        ("Design ME - Spec Change", "Design ME-Spec Change"),
        ("Design ME - Validation Gap", "Design ME-Validation Gap"),
        ("Design Other", "Design Other"),
        ("Design SW/BIOS - Spec Change", "Design SW/BIOS-Spec Change"),
        ("Design SW/BIOS - Validation Gap", "Design SW/BIOS-Validation Gap"),
        ("DFM", "DFM"),
        ("ODM Diag Test Gap", "ODM Diag Test Gap"),
        ("SC HP AV BOM Issue", "SC HP AV BOM Issue"),
        ("SC HP SC Internal Issue", "SC HP SC Internal Issue"),
        ("SC HP SCM Rules, PCR/PCS Issue", "SC HP SCM Rules, PCR/PCS Issue"),
        ("SC HP SKU Configuration", "SC HP SKU Configuration"),
        ("SC ODM Quality", "SC ODM Quality"),
        ("SC ODM Factory Operation", "SC ODM Factory Operation"),
        ("SC ODM Sub-Supplier Change Management", "SC ODM Sub-Supplier Change Management"),
        ("SC ODM Sub-Supplier Quality", "SC ODM Sub-Supplier Quality"),
        ("SC ODM SW/Other Process", "SC ODM SW/Other Process"),
        ("SC ODM Test Gap", "SC ODM Test Gap"),
        ("SC Site(mfg) Quality", "SC Site(mfg) Quality"),
        ("SC Site(mfg) SW/Other Process", "SC Site(mfg) SW/Other Process"),
        ("SC Site(mfg) Test Gap", "SC Site(mfg) Test Gap"),
        ("Supplier(GTK/BS) HW Module issue", "Supplier(GTK/BS) HW Module issue"),
        ("Supplier(GTK/BS) Sub Supplier Quality", "Supplier(GTK/BS) Sub Supplier Quality"),
        ("Supplier(GTK/BS) Vendor SW/FW", "Supplier(GTK/BS) Vendor SW/FW"),
        ("Supplier(OTK)", "Supplier(OTK)"),
        ("SW Component", "SW Component"),
        ("Toolset Setting", "Toolset Setting"),
        ("Image SW", "Image SW"),
        ("SCMx/CISx Incorrect Version", "SCMx/CISx Incorrect Version"),
        ("SW/SKU/ML Component", "SW/SKU/ML Component"),
        ("Networking/IT Issue", "Networking/IT Issue"),
        ("CS Tools - Tool Issue", "CS Tools-Tool Issue"),
        ("ML/FWML Incorrect Version", "ML/FWML Incorrect Version"),
    )
    ST_TYPE = (
        ("Containment - add on", "Containment-add on"),
        ("Containment - rework", "Containment-rework"),
        ("Containment - SOP/Fixture", "Containment-SOP/Fixture"),
        ("Containment - sorting", "Containment-sorting"),
        ("Design", "Design"),
        ("Inaction", "Inaction"),
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
        ("Field", "Field"),
        ("Factory", "Factory"),
    )
    DUPLICATE = (
        ("Y", "Y"),
        ("N", "N")
    )

    platformName = models.ForeignKey(Products, verbose_name="Platform Name", on_delete=models.CASCADE,related_name="desktop_product", default="")
    processName =models.CharField(choices=FACTORY_PROCESS,verbose_name="Issue is from", max_length=50)
    issue_desc = models.TextField(default='', verbose_name='Issue Description',max_length=250)
    issue_interaction = models.ForeignKey(SymptomCategory_First, verbose_name="Category I", on_delete=models.CASCADE,related_name="desktop_issue_interaction", null=True, blank=True,)
    issue_symptom = models.ForeignKey(SymptomCategory_Second, verbose_name="Category II", on_delete=models.CASCADE,related_name="desktop_issue_symptom", null=True, blank=True,)
    impact_scope = models.CharField(choices=IMPACT_SCOPE, verbose_name="Impact Scope", max_length=50)
    priority = models.CharField(choices=PRIORITY, verbose_name="Priority", max_length=10, null=True, blank=True, default=".")
    business_impact = models.CharField(verbose_name="Biz Impact", max_length=100, null=True, blank=True, default="")
    input_qty = models.IntegerField(verbose_name="Total Input", null=True, blank=True)
    defect_qty = models.IntegerField(verbose_name="Defect", null=True, blank=True)
    fail_rate_stage = models.TextField(default="", null=True, blank=True, verbose_name="Fail By Stage")

    pre_build_qty = models.IntegerField(default=0, verbose_name="Prebuild Input", null=True, blank=True)
    pre_build_defcet_qty = models.IntegerField(default=0, verbose_name="Prebuild Defect", null=True, blank=True)
    mini_build_qty = models.IntegerField(default=0, verbose_name="Mini-1/FAI Input", null=True, blank=True)
    mini_build_defcet_qty = models.IntegerField(default=0, verbose_name="Mini-1/FAI Defect", null=True, blank=True)
    mini2_build_qty = models.IntegerField(default=0, verbose_name="Mini-2 Input",null=True, blank=True)
    mini2_build_defcet_qty = models.IntegerField(default=0, verbose_name="Mini-2 Defect", null=True, blank=True)
    balance_qty = models.IntegerField(default=0, verbose_name="Balance/Main Input", null=True, blank=True)
    balance_defcet_qty = models.IntegerField(default=0, verbose_name="Balance/Main Defect", null=True, blank=True)

    sn = models.TextField(default="", null=True, blank=True, verbose_name="SN Info", max_length=300)
    sku = models.TextField(default="", null=True, blank=True, verbose_name="SKU Info", max_length=200)
    photo = models.ImageField(upload_to="issue/images/", null=True, blank=True, verbose_name="Defect Picture")
    issue_analysis = RichTextUploadingField(default="",verbose_name="Issue Analysis")
    root_cause = RichTextUploadingField(default="", verbose_name="Root Cause")
    root_cause_category = models.CharField(choices=RC_TYPE, verbose_name="Root Category", max_length=50, null=True, blank=True)
    short_term = RichTextUploadingField(default="", verbose_name="Short Term")
    short_term_category = models.CharField(choices=ST_TYPE, verbose_name="Short Term Category", max_length=50, null=True, blank=True)
    long_term = RichTextUploadingField(default="", verbose_name="Long Term")
    long_term_category = models.CharField(choices=LT_TYPE, verbose_name="Long Term Category", max_length=50, null=True, blank=True)
    status = models.CharField(choices=STATUS, verbose_name="Status", max_length=50)
    obs = models.CharField(max_length=10,verbose_name="OBS", null=True, blank=True)
    duplicate = models.CharField(choices=DUPLICATE, verbose_name="Duplicate?", max_length=5, null=True, blank=True,)
    errorCode = models.CharField(max_length=10, verbose_name="Error Code", null=True, blank=True)
    repeating = models.CharField(choices=DUPLICATE, verbose_name="is Repeat Issue?", max_length=5, null=True, blank=True)
    repeatingstage = models.CharField(choices=BUILD_STAGE, verbose_name="Repeated Stage", max_length=50, null=True, blank=True)
    buildstage = models.CharField(choices=BUILD_STAGE, verbose_name="Stage", max_length=50)
    owner = models.CharField(max_length=50, verbose_name="Owner",default="")
    updatedate = models.DateField(null=True, blank=True, verbose_name="Update Date")
    obs_link = models.CharField(default="", max_length=200, verbose_name="OBS Link", null=True, blank=True)
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
        verbose_name = "DT"
        verbose_name_plural = verbose_name
        db_table = "datacube_desktop_issues"  # 指定数据表名称

    def __str__(self):
        return self.issue_desc[0:25]

# regional issue
class RegionalCase(models.Model):
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
    build_stage = models.CharField(choices=BUILD_STAGE, verbose_name="Stage", max_length=30)
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
        verbose_name = "Regional"
        verbose_name_plural = verbose_name
        db_table = "datacube_regional_issue"  # 指定数据表名称

    def __str__(self):
        return self.issue_desc


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

