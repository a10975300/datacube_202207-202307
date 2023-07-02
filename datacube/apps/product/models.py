from django.db import models
from datetime import datetime, timedelta
from django.utils.html import format_html

# Create your models here.
class Products(models.Model):
    """
    产品基本信息
    """
    PHASE = (
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
        ("Production", "Production"),
        ("SI", "SI"),# DT 新增的
        ("PV", "PV"),# DT 新增的
        ("PRB/TLD", "PRB/TLD"),# DT 新增的
        ("MV (Mini1)", "MV(Mini1)"),# DT 新增的
        ("MV (Mini2)", "MV(Mini2)"),# DT 新增的
        ("MV (Balance Build)", "MV(Balance Build)"),# DT 新增的
        ("Pre-Build (SP)", "Pre-Build(SP)"),# DT 新增的
        ("Mainbuild (MVB)", "Mainbuild(MVB)"),# DT 新增的
        ("CVB", "CVB"),# DT 新增的
    )
    PE = (
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
    RISK = (
        (1, "HIGH"),
        (2, "MIDDLE"),
        (3, "LOW"),
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
        ("Commercial Desktop", "Commercial Desktop"),  # DT 新增的
        ("Consumer Desktop", "Consumer Desktop"),  # DT 新增的
        ("Commercial Workstaions", "Commercial Workstaions"),  # DT 新增的
    )
    PRODUCT_TYPE = (
        ("X360", "X360"),
        ("Clamshell", "Clamshell"),
        ("Detachable (2 in 1)", "Detachable (2 in 1)"),
        ("Slate(Tablet)", "Slate(Tablet)"),
        ("Folio", "Folio"),
        ("Dock", "Dock"),
        ("HP Engage Go( POS)", "HP Engage Go( POS)"),
    )
    RCTO_TYPE = (
        ("1.0", "1.0"),
        ("1.5", "1.5"),
        ("2.0", "2.0"),
        ("N/A", "N/A"),
    )
    PLATFORM_TYPE = (
        ("CMIT", "CMIT"),
        ("Consumer", "Consumer"),
    )

    user = models.ForeignKey("auth.user", on_delete=models.CASCADE)
    ProductVersionId = models.IntegerField(null=True, blank=True,verbose_name="Product Id")
    ProductPhase = models.CharField(null=True,  blank=True, choices=PHASE,verbose_name="Current Stage", max_length=50)
    ProductName = models.CharField(null=True, max_length=30, verbose_name="Product Name")
    PartnerName = models.CharField(null=True, blank=True, max_length=15, verbose_name="ODM")
    PE = models.CharField(null=True, choices=PE, verbose_name="PE", max_length=20)
    SM = models.CharField(null=True, blank=True, max_length=20, verbose_name="SM")
    PDM = models.CharField(null=True, blank=True, max_length=20, verbose_name="PDM")
    PM = models.CharField(null=True, blank=True, max_length=20, verbose_name="PM")
    BuildDate_SI = models.DateField(verbose_name="SI", null=True, blank=True)
    BuildDate_PV = models.DateField(verbose_name="PV", null=True, blank=True)
    BuildDate_PRB_TLD_PVR = models.DateField(verbose_name="PRB/TLD/PVR", null=True, blank=True)
    BuildDate_MV = models.DateField(verbose_name="MV", null=True, blank=True)
    RTP = models.DateField(verbose_name="RTP", null=True, blank=True)
    Chipset = models.CharField(null=True, blank=True, max_length=50, verbose_name="Chipset")

    Platform_Type = models.CharField(choices=PLATFORM_TYPE, blank=True, max_length=10, verbose_name="bNB/cNB")
    Product_Segment = models.CharField(choices=SEGMENT, blank=True, max_length=30, verbose_name="Segment")
    Product_Type = models.CharField(choices=PRODUCT_TYPE, blank=True, max_length=50, verbose_name="Product Type")
    Product_Size = models.CharField(null=True, blank=True, max_length=10, verbose_name="Product Size")
    Product_RCTO_Type = models.CharField(choices=RCTO_TYPE, blank=True, max_length=5, verbose_name="RCTO")
    Product_MV_date = models.IntegerField(null=True, blank=True, verbose_name="Year")

    Product_A_Cover_material_Type = models.TextField(null=True, blank=True, verbose_name="A-Cover Material")
    Product_A_Cover_material_Surface = models.TextField(null=True, blank=True, verbose_name="A-Cover Surface")
    Product_A_Cover_material_Thickness = models.CharField(null=True, blank=True, max_length=10, verbose_name="A-Cover Thickness")
    Product_A_Cover_material_Supplier01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-1")
    Product_A_Cover_material_Supplier02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-2")
    Product_A_Cover_material_Supplier03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-3")
    Product_A_Cover_material_Supplier04 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-4")
    Product_A_Cover_Glue_Vendor = models.CharField(default='TBD', null=True, blank=True, max_length=20, verbose_name="Cover Glue Vendor")
    Product_A_Cover_Bonding_Vendor01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-1")
    Product_A_Cover_Bonding_Vendor02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-2")
    Product_A_Cover_Bonding_Vendor03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-3")

    Product_B_Cover_material_Type = models.TextField(null=True, blank=True, verbose_name=" B-Cover Material")
    Product_B_Cover_material_Surface = models.TextField(null=True, blank=True, verbose_name="B-Cover Surface")
    Product_B_Cover_material_Thickness = models.CharField(null=True, blank=True, max_length=10, verbose_name="B-Cover Thickness")
    Product_B_Cover_material_Supplier01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-1")
    Product_B_Cover_material_Supplier02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-2")
    Product_B_Cover_material_Supplier03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-3")
    Product_B_Cover_material_Supplier04 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-4")
    Product_B_Cover_Glue_Vendor = models.CharField(default='TBD',null=True, blank=True, max_length=20, verbose_name="Cover Glue Vendor")
    Product_B_Cover_Bonding_Vendor01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-1")
    Product_B_Cover_Bonding_Vendor02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-2")
    Product_B_Cover_Bonding_Vendor03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-3")

    Product_C_Cover_material_Type = models.TextField(null=True, blank=True, verbose_name="C-Cover Material")
    Product_C_Cover_material_Surface = models.TextField(null=True, blank=True, verbose_name="C-Cover Surface")
    Product_C_Cover_material_Thickness = models.CharField(null=True, blank=True, max_length=10, verbose_name="C-Cover Thickness")
    Product_C_Cover_material_Supplier01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-1")
    Product_C_Cover_material_Supplier02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-2")
    Product_C_Cover_material_Supplier03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-3")
    Product_C_Cover_material_Supplier04 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-4")
    Product_C_Cover_Glue_Vendor = models.CharField(default='TBD',null=True, blank=True, max_length=20, verbose_name="Cover Glue Vendor")
    Product_C_Cover_Bonding_Vendor01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-1")
    Product_C_Cover_Bonding_Vendor02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-2")
    Product_C_Cover_Bonding_Vendor03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-3")

    Product_D_Cover_material_Type = models.TextField(null=True, blank=True, verbose_name="D-Cover Material")
    Product_D_Cover_material_Surface = models.TextField(null=True, blank=True, verbose_name="D-Cover Surface")
    Product_D_Cover_material_Thickness = models.CharField(null=True, blank=True, max_length=10, verbose_name="D-Cover Thickness")
    Product_D_Cover_material_Supplier01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-1")
    Product_D_Cover_material_Supplier02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-2")
    Product_D_Cover_material_Supplier03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-3")
    Product_D_Cover_material_Supplier04 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Cover Supplier-4")
    Product_D_Cover_Glue_Vendor = models.CharField(default='TBD',null=True, blank=True, max_length=20, verbose_name="Cover Glue Vendor")
    Product_D_Cover_Bonding_Vendor01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-1")
    Product_D_Cover_Bonding_Vendor02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-2")
    Product_D_Cover_Bonding_Vendor03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-3")

    Product_Hinge_material_Type = models.CharField(null=True, blank=True, max_length=50, verbose_name="Hinge-Material")
    Product_Hinge_material_Surface = models.CharField(null=True, blank=True, max_length=50, verbose_name="Hinge-Surface")
    Product_Hinge_material_Thickness = models.CharField(null=True, blank=True, max_length=10, verbose_name="Hinge-Thickness")
    Product_Hinge_material_Supplier01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Supplier-1")
    Product_Hinge_material_Supplier02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Supplier-2")
    Product_Hinge_material_Supplier03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Supplier-3")
    Product_Hinge_material_Supplier04 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Supplier-4")
    Product_Hinge_Glue_Vendor = models.CharField(default='TBD', null=True, blank=True, max_length=20, verbose_name="Hinge Glue Vendor")
    Product_Hinge_Bonding_Vendor01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-1")
    Product_Hinge_Bonding_Vendor02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-2")
    Product_Hinge_Bonding_Vendor03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-3")

    Product_TouchPanel = models.CharField(null=True, blank=True, max_length=20, verbose_name="Panel Bonding Type")
    Product_TouchPanel_BondingVendor01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-1")
    Product_TouchPanel_BondingVendor02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-2")
    Product_TouchPanel_BondingVendor03 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Bonding Vendor-3")
    Product_TouchPanel_Solution01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Touch Solution-1")#在Ver:3.0a是Touch solution type 欄位
    Product_TouchPanel_Solution02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="Touch Solution-2")#在Ver:3.0a沒有這欄位
    Product_TouchPanel_Outsize = models.CharField(null=True, blank=True, max_length=20, verbose_name="Panel Outsize")#在Ver:3.0a沒有這欄位

    Product_Touchpad_Solution01 = models.CharField(null=True, blank=True, max_length=20, verbose_name="TouchPad Solution01")#在Ver:3.0a是Touch Pad IC solution:vendor-1
    Product_Touchpad_Solution02 = models.CharField(null=True, blank=True, max_length=20, verbose_name="TouchPad Solution02")#V在Ver:3.0a是Touch Pad IC solution: vendor-2
    Product_Touchpad_Outsize = models.CharField(null=True, blank=True, max_length=20, verbose_name="TouchPad Outsize")

    ProductFamilyName = models.CharField(null=True, blank=True, max_length=50, verbose_name="ProductFamilyName")
    ProductStatus = models.CharField(null=True, blank=True, max_length=10, verbose_name="ProductStatus")
    yeildrate_ramp = models.CharField(default="", blank=True, max_length=10, verbose_name="Yield_Ramp")
    yeildrate_rtp = models.CharField(default="", blank=True, max_length=10, verbose_name="Yield_RTP")
    yeildrate_mv_mini1 = models.CharField(default="", blank=True, max_length=10, verbose_name="Yield_MV")
    yeildrate_pv = models.CharField(default="", blank=True, max_length=10, verbose_name="Yield_PV")
    yeildrate_si = models.CharField(default="", blank=True, max_length=10, verbose_name="Yield_SI")
    create_date = models.DateTimeField(default=datetime.now, verbose_name="Create Date")

    #sync pulsar data to PE datahome
    def sync_pulsar_data(self):
        formatStatus = format_html(
            '<a href="javascript:void(0)" id="{}" class="btn_submit" value="{}" style="text-decoration: none"><i class="fa fa-refresh" aria-hidden="true"></i></a>'.format(self.ProductName, self.id)
        )
        return formatStatus

    sync_pulsar_data.short_description = "<span style='color:#428bca'>SyncPulsarInfo</span>"


    class Meta:
        verbose_name = "Products"
        verbose_name_plural = verbose_name
        db_table = "datacube_product" # 指定数据表名称

    def __str__(self):
        return str(self.ProductName)