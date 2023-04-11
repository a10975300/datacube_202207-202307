# -*- coding : utf-8 -*-
# @Author    : matt
# @Time      : 2022/1/15 21:52
# @File      : adminx_old.py
# @Function  :
import xadmin
from xadmin.layout import Main, TabHolder, Tab, Fieldset, Row, Col, AppendedText, Side, Field
from .models import Products
from xadmin.filters import MultiSelectFieldListFilter

class ProductAdmin(object):
    list_display = ["PartnerName","Product_Segment", "ProductName", "Product_RCTO_Type", "PE", "BuildDate_PV", "BuildDate_MV", "RTP", "yeildrate_mv_mini1", 'yeildrate_rtp', "yeildrate_ramp", "sync_pulsar_data"]
    list_filter = [
        ("Product_Segment", MultiSelectFieldListFilter),
        ("ProductName", MultiSelectFieldListFilter),
        ("ProductPhase", MultiSelectFieldListFilter),
        ("Chipset", MultiSelectFieldListFilter),
        ("PartnerName", MultiSelectFieldListFilter),
        ("PE", MultiSelectFieldListFilter),
        ("PM", MultiSelectFieldListFilter),
        ("SM", MultiSelectFieldListFilter),
    ]
    search_fields = ["ProductName", "PE", "ProductPhase","Chipset","PartnerName"]
    model_icon = 'fa fa-laptop'
    list_per_page = 10
    list_display_links = ["ProductName"]

    # 配置 编辑页面
    def get_form_layout(self):
        # if self.org_obj:
        self.form_layout = (
            Main(
                Fieldset('',
                         Row('ProductName', 'ProductPhase'),
                         Row('Platform_Type', 'Product_Segment'),
                         Row('Product_Type', 'Product_Size'),
                         Row('Chipset', 'Product_RCTO_Type'),
                         Row('PartnerName', 'Product_MV_date'),
                         css_class='unsort no_title'
                         ),

                Fieldset(('Yeild Rate'),
                         Row('yeildrate_si', 'yeildrate_pv'),
                         Row('yeildrate_mv_mini1', 'yeildrate_rtp', 'yeildrate_ramp'),
                         ),
                Fieldset(('Key Owners'),
                         Row('PE', 'PM'),
                         Row('SM', 'PDM'),
                         ),

                TabHolder(
                    Tab("A-Cover",
                        Row('Product_A_Cover_material_Thickness', 'Product_A_Cover_Glue_Vendor'),
                        Row('Product_A_Cover_material_Type', 'Product_A_Cover_material_Surface'),
                        Row('Product_A_Cover_material_Supplier01', 'Product_A_Cover_Bonding_Vendor01'),
                        Row('Product_A_Cover_material_Supplier02', 'Product_A_Cover_Bonding_Vendor02'),
                        Row('Product_A_Cover_material_Supplier03', 'Product_A_Cover_Bonding_Vendor03'),
                        Row('Product_A_Cover_material_Supplier04'),
                        ),

                    Tab("Bezel",
                        Row('Product_B_Cover_material_Thickness', 'Product_B_Cover_Glue_Vendor'),
                        Row('Product_B_Cover_material_Type', 'Product_B_Cover_material_Surface'),
                        Row('Product_B_Cover_material_Supplier01', 'Product_B_Cover_Bonding_Vendor01'),
                        Row('Product_B_Cover_material_Supplier02', 'Product_B_Cover_Bonding_Vendor02'),
                        Row('Product_B_Cover_material_Supplier03', 'Product_B_Cover_Bonding_Vendor03'),
                        Row('Product_B_Cover_material_Supplier04'),
                        ),
                    Tab("C-Cover",
                        'Product_C_Cover_material_Thickness',
                        Row('Product_C_Cover_material_Type', 'Product_C_Cover_material_Surface'),
                        Row('Product_C_Cover_material_Supplier01', 'Product_C_Cover_Glue_Vendor'),
                        Row('Product_C_Cover_material_Supplier02', 'Product_C_Cover_Bonding_Vendor01'),
                        Row('Product_C_Cover_material_Supplier03', 'Product_C_Cover_Bonding_Vendor02'),
                        Row('Product_C_Cover_material_Supplier04', 'Product_C_Cover_Bonding_Vendor03'),
                        ),
                    Tab("D-Cover",
                        'Product_D_Cover_material_Thickness',
                        Row('Product_D_Cover_material_Type', 'Product_D_Cover_material_Surface'),
                        Row('Product_D_Cover_material_Supplier01', 'Product_D_Cover_Glue_Vendor'),
                        Row('Product_D_Cover_material_Supplier02', 'Product_D_Cover_Bonding_Vendor01'),
                        Row('Product_D_Cover_material_Supplier03', 'Product_D_Cover_Bonding_Vendor02'),
                        Row('Product_D_Cover_material_Supplier04', 'Product_D_Cover_Bonding_Vendor03'),
                        ),
                    Tab("Hinge",
                        Row('Product_Hinge_material_Type', 'Product_Hinge_material_Surface', 'Product_Hinge_material_Thickness'),
                        Row('Product_Hinge_material_Supplier01', 'Product_Hinge_Glue_Vendor'),
                        Row('Product_Hinge_material_Supplier02', 'Product_Hinge_Bonding_Vendor01'),
                        Row('Product_Hinge_material_Supplier03', 'Product_Hinge_Bonding_Vendor02'),
                        Row('Product_Hinge_material_Supplier04', 'Product_Hinge_Bonding_Vendor03'),
                        ),
                    Tab("Panel",
                        Row('Product_TouchPanel', 'Product_TouchPanel_Outsize'),
                        Row('Product_TouchPanel_BondingVendor01', 'Product_TouchPanel_Solution01'),
                        Row('Product_TouchPanel_BondingVendor02', 'Product_TouchPanel_Solution02'),
                        Row('Product_TouchPanel_BondingVendor03'),
                        ),
                    Tab("Touchpad",
                        Row('Product_Touchpad_Outsize', 'Product_Touchpad_Solution01', 'Product_Touchpad_Solution02'),
                        ),
                    Tab("Other Information"),
                    ),
                ),
            Side(
                Fieldset(('Build Schedule'),
                         'BuildDate_SI', 'BuildDate_PV', 'BuildDate_PRB_TLD_PVR', 'BuildDate_MV', 'RTP',
                         ),
                ),
            )
        return super(ProductAdmin, self).get_form_layout()

#后台管理项目注册
xadmin.site.register(Products, ProductAdmin)
