from datetime import datetime
from django.contrib.auth.models import User
from dfm.models import Dfm_General_Checklist, Dfm_Review_Result
from product.models import Products

#Dfm excel report upload
class Dfm_Import_to_Database(object):
    """
    dfm report upload to database,
    get excel contents from each cell then write to mysql database
    """
    def excel_to_database(self, workbook):
        """
        从excel表dfm sheet里面读取产品相关的信息如：产品类别，segment,产品名称，产品尺寸，ODM名称 以及build year
        """
        dfm_sheet = workbook['DFm ']
        platform_type = dfm_sheet.cell(3, 13).value
        platform_segment = dfm_sheet.cell(4, 13).value
        product_type = dfm_sheet.cell(5, 13).value
        product_name = dfm_sheet.cell(6, 13).value
        product_size = dfm_sheet.cell(7, 13).value
        odm_name = dfm_sheet.cell(8, 13).value
        build_year = dfm_sheet.cell(9, 13).value
        rcto = dfm_sheet.cell(3, 15).value

        key_materials = workbook['Key Material information']
        data = {
            'product_name': product_name,
            'platform_type': platform_type,
            'platform_segment': platform_segment,
            'product_type': product_type,
            'product_size': product_size,
            'odm_name': odm_name,
            'build_year': build_year,
            'rcto': rcto,

            'a_cover_material': key_materials.cell(4, 3).value,
            'a_cover_surface': key_materials.cell(4, 4).value,
            'a_cover_thickness': key_materials.cell(4, 5).value,
            'a_cover_vendor1': key_materials.cell(4, 6).value,
            'a_cover_vendor2': key_materials.cell(4, 7).value,
            'a_cover_vendor3': key_materials.cell(4, 8).value,
            'a_cover_vendor4': key_materials.cell(4, 9).value,
            'a_cover_gule': key_materials.cell(12, 3).value,
            'a_bonding_vendor1': key_materials.cell(12, 4).value,
            'a_bonding_vendor2': key_materials.cell(12, 5).value,
            'a_bonding_vendor3': key_materials.cell(12, 6).value,

            'b_cover_material': key_materials.cell(5, 3).value,
            'b_cover_surface': key_materials.cell(5, 4).value,
            'b_cover_thickness': key_materials.cell(5, 5).value,
            'b_cover_vendor1': key_materials.cell(5, 6).value,
            'b_cover_vendor2': key_materials.cell(5, 7).value,
            'b_cover_vendor3': key_materials.cell(5, 8).value,
            'b_cover_vendor4': key_materials.cell(5, 9).value,
            'b_cover_gule': key_materials.cell(13, 3).value,
            'b_bonding_vendor1': key_materials.cell(13, 4).value,
            'b_bonding_vendor2': key_materials.cell(13, 5).value,
            'b_bonding_vendor3': key_materials.cell(13, 6).value,

            'c_cover_material': key_materials.cell(6, 3).value,
            'c_cover_surface': key_materials.cell(6, 4).value,
            'c_cover_thickness': key_materials.cell(6, 5).value,
            'c_cover_vendor1': key_materials.cell(6, 6).value,
            'c_cover_vendor2': key_materials.cell(6, 7).value,
            'c_cover_vendor3': key_materials.cell(6, 8).value,
            'c_cover_vendor4': key_materials.cell(6, 9).value,
            'c_cover_gule': key_materials.cell(14, 3).value,
            'c_bonding_vendor1': key_materials.cell(14, 4).value,
            'c_bonding_vendor2': key_materials.cell(14, 5).value,
            'c_bonding_vendor3': key_materials.cell(14, 6).value,

            'd_cover_material': key_materials.cell(7, 3).value,
            'd_cover_surface': key_materials.cell(7, 4).value,
            'd_cover_thickness': key_materials.cell(7, 5).value,
            'd_cover_vendor1': key_materials.cell(7, 6).value,
            'd_cover_vendor2': key_materials.cell(7, 7).value,
            'd_cover_vendor3': key_materials.cell(7, 8).value,
            'd_cover_vendor4': key_materials.cell(7, 9).value,
            'd_cover_gule': key_materials.cell(15, 3).value,
            'd_bonding_vendor1': key_materials.cell(15, 4).value,
            'd_bonding_vendor2': key_materials.cell(15, 5).value,
            'd_bonding_vendor3': key_materials.cell(15, 6).value,

            'hinge_material': key_materials.cell(8, 3).value,
            'hinged_cover_surface': key_materials.cell(8, 4).value,
            'hinge_thickness': key_materials.cell(8, 5).value,
            'hinge_vendor1': key_materials.cell(8, 6).value,
            'hinge_vendor2': key_materials.cell(8, 7).value,
            'hinge_vendor3': key_materials.cell(8, 8).value,
            'hinge_vendor4': key_materials.cell(8, 9).value,
            'hinge_gule': key_materials.cell(16, 3).value,
            'hinge_gule_vendor1': key_materials.cell(16, 4).value,
            'hinge_gule_vendor2': key_materials.cell(16, 5).value,
            'hinge_gule_vendor3': key_materials.cell(16, 6).value,

            'touch_panel_bonding_type': key_materials.cell(20, 3).value,
            'touch_panel_vendor1': key_materials.cell(20, 4).value,
            'touch_panel_vendor2': key_materials.cell(20, 5).value,
            'touch_panel_vendor3': key_materials.cell(20, 6).value,
            'touch_panel_solution_1': key_materials.cell(24, 3).value,
            'touch_panel_solution_2': key_materials.cell(24, 4).value,
            'touch_panel_size': key_materials.cell(24, 5).value,

            'touch_pad_solution_1': key_materials.cell(25, 3).value,
            'touch_pad_solution_2': key_materials.cell(25, 4).value,
            'touch_pad_size': key_materials.cell(25, 5).value,

        }
        product_id = NewItemHandler.new_product(self, data)

        # create = Dfm_Review_Result()
        # rows_number = dfm_sheet.max_row  #get total row numbers
        for row in range (31, 150): # rows_number = 100 写固定的行数，节省资源
            checkingItem = dfm_sheet.cell(row, 2).value
            if checkingItem:
                dfm_check_item = (dfm_sheet.cell(row, 2).value).replace("\n", "\r\n")  # 使用.replace("\n", "\r\n")处理excel单元格里有换行问题 "\r\n"是textarea换行符
                check_item_id = NewItemHandler.dfm_check_item_handle(self, dfm_check_item, dfm_sheet.cell(row, 1).value, dfm_sheet.cell(row, 3).value, product_name)
                NewItemHandler.dfm_review_item_handle(self, dfm_sheet,check_item_id,product_id,row)
            else:
                break
        # call method of dfm_import_record_handle to create or update an record when the above steps finished
        NewItemHandler.dfm_import_record_handle(self, dfm_sheet, product_id)

# automatically handle product, new check-item related information
class NewItemHandler(object):
    def new_product(self, data):
        """
        check if this product already in the database 使用productName查询数据库里是否已有该产品,
            if yes, then return product id
            if no, create a new one and return the product id
        """
        item = Products.objects.filter(ProductName=data['product_name']).update_or_create(defaults={
            'ProductName': data['product_name'],
            'Platform_Type': data['platform_type'],
            'Product_Segment': data['platform_segment'],
            'Product_Type': data['product_type'],
            'Product_Size': data['product_size'],
            'PartnerName': data['odm_name'],
            "Product_RCTO_Type": data['rcto'],
            # Product_MV_date = data['build_year'],

            'Product_A_Cover_material_Type': data['a_cover_material'],
            'Product_A_Cover_material_Surface': data['a_cover_surface'],
            'Product_A_Cover_material_Thickness': data['a_cover_thickness'],
            'Product_A_Cover_material_Supplier01': data['a_cover_vendor1'],
            'Product_A_Cover_material_Supplier02': data['a_cover_vendor2'],
            'Product_A_Cover_material_Supplier03': data['a_cover_vendor3'],
            'Product_A_Cover_material_Supplier04': data['a_cover_vendor4'],
            'Product_A_Cover_Glue_Vendor': data['a_cover_gule'],
            'Product_A_Cover_Bonding_Vendor01': data['a_bonding_vendor1'],
            'Product_A_Cover_Bonding_Vendor02': data['a_bonding_vendor2'],
            'Product_A_Cover_Bonding_Vendor03':data['a_bonding_vendor3'],

            'Product_B_Cover_material_Type': data['b_cover_material'],
            'Product_B_Cover_material_Surface': data['b_cover_surface'],
            'Product_B_Cover_material_Thickness': data['b_cover_thickness'],
            'Product_B_Cover_material_Supplier01': data['b_cover_vendor1'],
            'Product_B_Cover_material_Supplier02': data['b_cover_vendor2'],
            'Product_B_Cover_material_Supplier03': data['b_cover_vendor3'],
            'Product_B_Cover_material_Supplier04': data['b_cover_vendor4'],
            'Product_B_Cover_Glue_Vendor': data['b_cover_gule'],
            'Product_B_Cover_Bonding_Vendor01': data['b_bonding_vendor1'],
            'Product_B_Cover_Bonding_Vendor02': data['b_bonding_vendor2'],
            'Product_B_Cover_Bonding_Vendor03': data['b_bonding_vendor3'],

            'Product_C_Cover_material_Type': data['c_cover_material'],
            'Product_C_Cover_material_Surface': data['c_cover_surface'],
            'Product_C_Cover_material_Thickness': data['c_cover_thickness'],
            'Product_C_Cover_material_Supplier01': data['c_cover_vendor1'],
            'Product_C_Cover_material_Supplier02': data['c_cover_vendor2'],
            'Product_C_Cover_material_Supplier03': data['c_cover_vendor3'],
            'Product_C_Cover_material_Supplier04': data['c_cover_vendor4'],
            'Product_C_Cover_Glue_Vendor': data['c_cover_gule'],
            'Product_C_Cover_Bonding_Vendor01': data['c_bonding_vendor1'],
            'Product_C_Cover_Bonding_Vendor02': data['c_bonding_vendor2'],
            'Product_C_Cover_Bonding_Vendor03': data['c_bonding_vendor3'],

            'Product_D_Cover_material_Type': data['d_cover_material'],
            'Product_D_Cover_material_Surface': data['d_cover_surface'],
            'Product_D_Cover_material_Thickness': data['d_cover_thickness'],
            'Product_D_Cover_material_Supplier01': data['d_cover_vendor1'],
            'Product_D_Cover_material_Supplier02': data['d_cover_vendor2'],
            'Product_D_Cover_material_Supplier03': data['d_cover_vendor3'],
            'Product_D_Cover_material_Supplier04': data['d_cover_vendor4'],
            'Product_D_Cover_Glue_Vendor': data['d_cover_gule'],
            'Product_D_Cover_Bonding_Vendor01': data['d_bonding_vendor1'],
            'Product_D_Cover_Bonding_Vendor02': data['d_bonding_vendor2'],
            'Product_D_Cover_Bonding_Vendor03':data['d_bonding_vendor3'],

            'Product_Hinge_material_Type': data['hinge_material'],
            'Product_Hinge_material_Surface': data['hinged_cover_surface'],
            'Product_Hinge_material_Thickness': data['hinge_thickness'],
            'Product_Hinge_material_Supplier01': data['hinge_vendor1'],
            'Product_Hinge_material_Supplier02': data['hinge_vendor2'],
            'Product_Hinge_material_Supplier03': data['hinge_vendor3'],
            'Product_Hinge_material_Supplier04': data['hinge_vendor4'],
            'Product_Hinge_Glue_Vendor': data['hinge_gule'],
            'Product_Hinge_Bonding_Vendor01': data['hinge_gule_vendor1'],
            'Product_Hinge_Bonding_Vendor02': data['hinge_gule_vendor2'],
            'Product_Hinge_Bonding_Vendor03': data['hinge_gule_vendor3'],

            'Product_TouchPanel': data['touch_panel_bonding_type'],
            'Product_TouchPanel_BondingVendor01': data['touch_panel_vendor1'],
            'Product_TouchPanel_BondingVendor02': data['touch_panel_vendor2'],
            'Product_TouchPanel_BondingVendor03': data['touch_panel_vendor3'],
            'Product_TouchPanel_Solution01': data['touch_panel_solution_1'],
            'Product_TouchPanel_Solution02': data['touch_panel_solution_2'],
            'Product_TouchPanel_Outsize': data['touch_panel_size'],

            'Product_Touchpad_Solution01': data['touch_pad_solution_1'],
            'Product_Touchpad_Solution02': data['touch_pad_solution_2'],
            'Product_Touchpad_Outsize': data['touch_pad_size'],
            'user_id': User.objects.filter(username=self.request.user)[0].id,
        })
        return item[0].id

    # handle checking items
    def dfm_check_item_handle(self, dfm_check_item, dfm_item_item_no, dfm_item_priority, dfm_item_attributes):
        """
        check if this check item in reprot and compare with general check items
            if yes, return dfm_review_item_desc_id
            if no, create a new check item under the prodcut
        """
        item = Dfm_General_Checklist.objects.filter(dfm_item_desc=dfm_check_item)  # 通过从excel单元格获取到的item_desc，然后查询数据库获取id,priority...
        if item:
            return item[0].id
        else:
            item = Dfm_General_Checklist.objects.create(
            dfm_item_item_no = dfm_item_item_no,
            # dfm_assembly_level = dfm_sheet.cell(row, 2).value, # for the version 2023 +
            dfm_item_desc = dfm_check_item,
            dfm_item_priority = dfm_item_priority,
            dfm_item_attributes = dfm_item_attributes,
        )
        item.save()
        return item.id

    # create or update an record when dfm report import sucessfully
    def dfm_import_record_handle(self, dfm_sheet, product_id):
        from .models import DFM_Report_Import_Records
        import_date = datetime.now().strftime('%Y-%m-%d')

        new_item = DFM_Report_Import_Records.objects.filter(import_product_name_id=product_id)
        new_item.update_or_create(defaults={
            'user_id': User.objects.filter(username=self.request.user)[0].id,
            'import_product_name_id': product_id,
        })
        if dfm_sheet.cell(32, 4).value and not new_item[0].import_stage_cnc:
            new_item.update_or_create(defaults={
                'import_stage_cnc': import_date,
            })
        elif dfm_sheet.cell(32, 5).value and not new_item[0].import_stage_si:
            new_item.update_or_create(defaults={
                'import_stage_si': import_date
            })
        elif dfm_sheet.cell(32, 6).value and not new_item[0].import_stage_pv:
            new_item.update_or_create(defaults={
                'import_stage_pv': import_date
            })
        elif dfm_sheet.cell(32, 7).value and not new_item[0].import_stage_mv:
            new_item.update_or_create(defaults={
                'import_stage_mv': import_date
            })


    # creare or update new item
    def dfm_review_item_handle(self, dfm_sheet, check_item_id, product_id, row):
        nud = dfm_sheet.cell(row, 8).value
        cnc = dfm_sheet.cell(row, 4).value
        si = dfm_sheet.cell(row, 5).value
        pv = dfm_sheet.cell(row, 6).value
        mv = dfm_sheet.cell(row, 7).value

        new_item = Dfm_Review_Result.objects.filter(dfm_review_item_desc_id=check_item_id, dfm_product_id=product_id)
        new_item.update_or_create(defaults={
            'dfm_review_item_no': dfm_sheet.cell(row, 1).value,
            'dfm_review_item_desc_id': check_item_id,
            'dfm_product_id': product_id,
            'dfm_product_part_category': dfm_sheet.cell(row, 9).value,
            'dfm_product_issue_symptom': dfm_sheet.cell(row, 10).value,
            'dfm_product_design_structures': dfm_sheet.cell(row, 11).value,
            'dfm_product_nonmacth_item': dfm_sheet.cell(row, 13).value,
            'dfm_product_odm_actions': dfm_sheet.cell(row, 14).value,
            'dfm_product_solution_category': dfm_sheet.cell(row, 15).value,
            'dfm_product_nud': nud if nud else '...',
            'dfm_product_cnc': cnc if cnc else '...',
            'dfm_product_si': si if si else '...',
            'dfm_product_pv': pv if pv else '...',
            'dfm_product_mv': mv if mv else '...',
        })


# dashboard data
class DfmDashboardData:
    def get_dfm_dashbaord_data(self):
        from django.db.models import Max, Min, Sum, Count, Avg, Q

        dfm_issues = Dfm_Review_Result.objects.all()
        dfm_issue_qty = dfm_issues.count()

        dfm_p1_qty = dfm_issues.filter(dfm_review_item_desc__dfm_item_priority='1').count()
        dfm_nud_qty = dfm_issues.filter().exclude(dfm_product_nud='...').count()
        dfm_close_qty = dfm_issues.exclude(Q(dfm_product_mv='N') | Q(dfm_product_mv='Open')).count()#取得dfm的close的item數量

        # statistics by factory related issue
        dfm_issue = dfm_issues.values('dfm_product__ProductName',
                                      'dfm_review_item_desc__dfm_assembly_level',
                                          'dfm_review_item_desc__dfm_item_priority',
                                          'dfm_product_cnc',
                                          'dfm_product_si',
                                          'dfm_product_pv',
                                          'dfm_product_mv',
                                          'dfm_product_nud',
                                          'dfm_product_issue_symptom',
                                          'dfm_product_design_structures',
                                          'dfm_product_solution_category',
                                            'create_date').annotate(Count('dfm_review_item_desc'))

        dfm_context = {
            "dfm_closerate": "" if dfm_close_qty or dfm_issue_qty == 0 else round((dfm_close_qty / dfm_issue_qty * 100), 2),
            "dfm_p1_qty": dfm_p1_qty,
            "dfm_nud_qty": dfm_nud_qty,
            "dfm_issue_qty": dfm_issue_qty,
            'dfm_issue': dfm_issue,
        }
        return dfm_context