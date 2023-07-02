from django.contrib.auth.models import User
from django.db import models
from datetime import datetime
from product.models import Products

class Dfa_Review_Result(models.Model):
    category = (
        ("Bonding", "Bonding"),
        ("Gluing", "Gluing"),
        ("Assembly", "Assembly"),
        ("Screwing", "Screwing"),
        ("Cables Assembly", "Cables Assembly"),
        ("Material Scan & link", "Material Scan & link"),
        ("Audits", "Audits"),
        ("Test", "Test"),
        ("Labeling & Packing", "Labeling & Packing"),
    )
    production_line = (
        ("FA", "FA"),
        ("SA", "SA"),
        ("N/D", "N/D"),
    )
    cnc = (
        ("N", "N"),
        ("Y", "Y"),
        ("N/A", "N/A"),
        ("N/D", "N/D"),
    )
    commodities_design = (
        ("IMPACT", "IMPACT"),
    )
    pictures_from_factory = (
        ("Y", "Y"),
    )
    internal_assessment = (
        ("Y", "Y"),
        ("N", "N"),
    )

    dfa_product = models.ForeignKey(Products, verbose_name="Product", on_delete=models.CASCADE, default="")
    dfa_object = models.CharField(null=True, max_length=100, verbose_name="Item")
    dfa_category = models.CharField(null=True,choices=category, max_length=50, verbose_name="Category")#就是 excel裡面的 sheet name
    dfa_estimated_hc = models.CharField(null=True, blank=True, max_length=50, verbose_name="Est. HC")
    dfa_production_line = models.CharField(null=True, blank=True,choices=production_line, max_length=5, verbose_name="Product line type")
    dfa_cnc = models.CharField(null=True, blank=True, choices=cnc, max_length=5, verbose_name="CNC")
    dfa_si_pv = models.CharField(null=True, blank=True, choices=cnc, max_length=5, verbose_name="SI-PV")
    dfa_mv_mp = models.CharField(null=True, blank=True, choices=cnc, max_length=5, verbose_name="MV-MP")
    dfa_HP_commodities_design = models.CharField(null=True, blank=True, choices=commodities_design, max_length=10, verbose_name="CMDT_design_HP")
    dfa_odm_product_designs = models.CharField(null=True, blank=True, choices=commodities_design, max_length=10, verbose_name="Product_design_ODM")
    dfa_odm_packing_designs_kitting_box_design = models.CharField(null=True, choices=commodities_design, blank=True, max_length=10, verbose_name="PACK_BOX_design_ODM")
    dfa_HP_packing_designs = models.CharField(null=True, blank=True, choices=commodities_design, max_length=10, verbose_name="PACK_design_HP")
    dfa_equipment_facilites_UPH_concerns = models.CharField(null=True, blank=True, choices=commodities_design, max_length=10, verbose_name="EQT/FAC/UPH concern")
    dfa_non_match_reason_cnc = models.CharField(null=True, blank=True, max_length=50, verbose_name="NMR_CNC")
    dfa_non_match_reason_si = models.CharField(null=True, blank=True, max_length=50, verbose_name="NMR_SI")
    dfa_non_match_reason_si2 = models.CharField(null=True, blank=True, max_length=50, verbose_name="NMR_SI2")
    dfa_non_match_reason_pv = models.CharField(null=True, blank=True, max_length=50, verbose_name="NMR_PV")
    dfa_odm_corrective_action_cnc = models.CharField(null=True, blank=True, max_length=50, verbose_name="ODM_CA_CNC")
    dfa_odm_corrective_action_si = models.CharField(null=True, blank=True, max_length=50,verbose_name="ODM_CA_SI")
    dfa_odm_corrective_action_si2 = models.CharField(null=True, blank=True, max_length=50,verbose_name="ODM_CA_SI2")
    dfa_odm_corrective_action_pv = models.CharField(null=True, blank=True, max_length=50,verbose_name="ODM_CA_PV")
    dfa_pictures_from_factory = models.CharField(null=True, blank=True,choices=pictures_from_factory, max_length=5,verbose_name="PIC")
    dfa_HP_internal_discussion = models.CharField(null=True, blank=True, max_length=50, verbose_name="INTL_CMT_HP")
    dfa_HP_internal_assessment = models.CharField(null=True, blank=True, choices=internal_assessment, max_length=5, verbose_name="INTL_ASS_HP")
    dfa_crate_date = models.DateTimeField(default=datetime.now, verbose_name="CreateDate")

    class Meta:
        verbose_name = "Reviewed item"
        verbose_name_plural = verbose_name
        db_table = "datacube_dfa_result"  # 指定数据表名称

    def __str__(self):
        return str(self.dfa_object)


class Dfa_Report_Import_Records(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, editable=False, null=True, verbose_name="User")
    import_product_name = models.CharField(max_length=30, verbose_name="Product Name")
    import_odm = models.CharField(max_length=30, verbose_name="ODM")
    import_date = models.DateTimeField(default=datetime.now, verbose_name="Update Date", help_text="Date")

    class Meta:
        verbose_name = "upload record"
        verbose_name_plural = verbose_name
        db_table = "datacube_dfa_import_records"  # 指定数据表名称

    def __str__(self):
        return str(self.import_product_name)