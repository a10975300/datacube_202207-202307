from xadmin.filters import MultiSelectFieldListFilter
import xadmin
from .models import RegionCase
from xadmin.layout import Main, Fieldset, Side, Row
from utils.notification import Notification

# define dfm user interface
class RegionCaseAdmin(object):
    list_display = ["issue_status", "issue_desc", "platform_name", "process_name", "build_stage", "input_qty",
                    "defect_qty", "rpe_owner", "gpe_owner",]
    list_filter = [("platform_name__ProductName", MultiSelectFieldListFilter),
                   ("odm_name", MultiSelectFieldListFilter),
                   ("process_name", MultiSelectFieldListFilter),
                   ("root_cause_category", MultiSelectFieldListFilter),
                   ("long_term_category", MultiSelectFieldListFilter),
                   ("impact_scope", MultiSelectFieldListFilter),
                   ("build_stage", MultiSelectFieldListFilter),
                   ("issue_status", MultiSelectFieldListFilter),
                   ("crate_date"),
                   ]
    search_fields = ["platform_name__ProductName", "rpe_owner__username", "gpe_owner", "build_stage", "issue_status",
                     "odm_name","process_name", "impact_scope"]
    list_display_links = ["issue_desc"]
    list_per_page = 20
    date_hierarchy = 'crate_date'
    # list_editable = ('issue_desc')
    model_icon = 'fa fa-fire-extinguisher'

    # 配置 编辑页面
    def get_form_layout(self):
        # if self.org_obj:
        self.form_layout = (
            Main(
                Fieldset('',
                         'crate_date',
                         Row('rpe_owner', 'platform_name'),
                         Row('odm_name', 'product_segment',),
                         Row('process_name', 'build_stage'),
                         'issue_desc',

                         css_class='unsort no_title'
                         ),
                Fieldset('',
                         'issue_analysis',
                         'root_cause',
                         'short_term',
                         'long_term',

                         css_class='unsort no_title'
                         ),
            ),
            Side(
                Fieldset('',
                         'gpe_owner',
                         Row('issue_status'),
                         Row('impact_scope'),
                         Row('input_qty', 'defect_qty'),
                         'fail_rate_stage',
                         'issue_photo',

                         css_class='unsort no_title'
                         ),
                Fieldset('',
                         'root_cause_category',
                         'short_term_category',
                         'long_term_category',

                         css_class='unsort no_title'
                         ),
            )
        )
        return super(RegionCaseAdmin, self).get_form_layout()

#后台管理项目注册
xadmin.site.register(RegionCase, RegionCaseAdmin)