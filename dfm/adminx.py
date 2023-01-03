from xadmin.filters import MultiSelectFieldListFilter
from django.contrib import messages
from django.http import HttpResponseRedirect

import xadmin
from .models import Dfm_General_Checklist,Dfm_Review_Result,DFM_Report_Import_Records
from xadmin.layout import Main, Fieldset, Side, Row
from import_export import resources

# define dfm user interface
class DfmAdmin(object):
    list_display = [
        "dfm_item_item_no",
        "dfm_item_desc",
        "dfm_item_priority",
        "dfm_assembly_level",
        "dfm_item_attributes",
        "dfm_item_version",
        "dfm_item_notes",
        "crate_date"
        ]
    list_filter = [
        ("dfm_assembly_level", MultiSelectFieldListFilter),
        # ("dfm_item_desc", MultiSelectFieldListFilter),
        ("dfm_item_priority", MultiSelectFieldListFilter),
        ("dfm_item_attributes", MultiSelectFieldListFilter),
        ("dfm_item_version", MultiSelectFieldListFilter),
        ("dfm_item_notes", MultiSelectFieldListFilter),
        ("crate_date"),
        ]
    search_fields = ["dfm_assembly_level","dfm_item_desc", "dfm_item_priority", "dfm_item_attributes", "dfm_item_version", "dfm_item_notes", "crate_date"]
    list_display_links = ["dfm_item_desc"]
    list_per_page = 50
    date_hierarchy = 'crate_date'
    list_editable = ('dfm_item_desc', 'dfm_item_attributes')
    ordering = ['dfm_item_item_no']
    model_icon = 'fa fa-list-alt'

    # 配置 编辑页面
    def get_form_layout(self):
        # if self.org_obj:
        self.form_layout = (
            Main(
                Fieldset('',
                         Row('dfm_item_item_no', 'dfm_item_priority'),
                         'dfm_item_desc',
                         Row("dfm_assembly_level", 'dfm_item_attributes'),
                         'crate_date',
                         css_class='unsort no_title'
                         ),
            ),
            Side(
                Fieldset(('Additional info'),
                         'dfm_item_version', 'dfm_item_notes',
                         ),
            )
        )
        return super(DfmAdmin, self).get_form_layout()

class Dfm_Review_Admin(object):
    list_display = [
                    "dfm_review_item_desc",
                    "dfm_product",
                    "dfm_product_nud",
                    "dfm_product_cnc",
                    "dfm_product_si",
                    "dfm_product_pv",
                    "dfm_product_mv",
                    "dfm_product_part_category",
                    "dfm_product_issue_symptom",
                    "dfm_product_design_structures",
                    # "dfm_product_nonmacth_item",
                    # "dfm_product_odm_actions",
                    # "dfm_product_solution_category",
                    ]
    list_filter = [
        ("dfm_product__ProductName", MultiSelectFieldListFilter),
        ("dfm_product_part_category", MultiSelectFieldListFilter),
        ("dfm_product_issue_symptom", MultiSelectFieldListFilter),
        ("dfm_product_design_structures", MultiSelectFieldListFilter),
        ("dfm_product_solution_category", MultiSelectFieldListFilter),
        ("dfm_product_nud", MultiSelectFieldListFilter),
        ("dfm_product_cnc", MultiSelectFieldListFilter),
        ("dfm_product_si", MultiSelectFieldListFilter),
        ("dfm_product_pv", MultiSelectFieldListFilter),
        ("dfm_product_mv", MultiSelectFieldListFilter),
        ]
    search_fields = ["dfm_review_item_desc",]
    list_display_links = ["dfm_review_item_desc"]
    list_per_page = 10
    date_hierarchy = 'crate_date'
    list_editable = ('')
    model_icon = 'fa fa-check-square-o'

    ### Dfm_review_product 注册导入导出功能
    class Issue_import_export_Resource(resources.ModelResource):
        class Meta:
            model = Dfm_Review_Result
    import_export_args = {'export_resource_class':Issue_import_export_Resource}
    import_excel = True

    def post(self, request, *args, **kwargs):
        if 'excel' in request.FILES:
            dfm_report = request.FILES.get('excel')
            from openpyxl import load_workbook
            workbook = load_workbook(dfm_report, data_only=True)

            # 调用方法处理导入数据 Dfm_Import_to_Database.excel_to_database
            from .views import Dfm_Import_to_Database
            Dfm_Import_to_Database().excel_to_database(workbook)

            messages.success(request, "Dfm report was imported successfully.")
            return HttpResponseRedirect('/scpe/dfm/dfm_review_result/')
        return super(Dfm_Review_Admin, self).post(request, *args, **kwargs)

    # 配置 编辑页面
    def get_form_layout(self):
        # if self.org_obj:
        self.form_layout = (
            Main(
                Fieldset('',
                         Row('dfm_review_item_no', 'dfm_product'),
                         Row('dfm_review_item_desc'),
                         Row('dfm_product_nud', 'dfm_product_part_category'),
                         Row('dfm_product_issue_symptom', 'dfm_product_design_structures'),

                         css_class='unsort no_title'
                    ),
                Fieldset('',
                         Row('dfm_product_nonmacth_item', 'dfm_product_odm_actions'),
                         'dfm_product_solution_category',
                         css_class='unsort no_title'
                    ),
            ),
            Side(
                Fieldset('Teardown Review Result',
                         Row('dfm_product_cnc', 'dfm_product_si'),
                         Row('dfm_product_pv','dfm_product_mv'),
                         'photo'
                         ),
            )
        )
        return super(Dfm_Review_Admin, self).get_form_layout()

class Dfm_Upload_Records_Admin(object):
    list_display = ["user","import_product_name","import_stage_cnc","import_stage_si","import_stage_pv","import_stage_mv","import_date"]
    list_display_links =["import_product_name"]

    def save_models(self):
        self.new_obj.user = self.request.user
        return super().save_models()

#后台管理项目注册
xadmin.site.register(Dfm_General_Checklist, DfmAdmin)
xadmin.site.register(Dfm_Review_Result, Dfm_Review_Admin)
xadmin.site.register(DFM_Report_Import_Records, Dfm_Upload_Records_Admin)