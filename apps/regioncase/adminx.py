from xadmin.filters import MultiSelectFieldListFilter
from django.contrib import messages
from django.http import HttpResponseRedirect

import xadmin
from .models import RegionCase
from xadmin.layout import Main, Fieldset, Side, Row
from import_export import resources
from utils.notification import Notification

# define dfm user interface
class RegionCaseAdmin(object):
    model_icon = 'fa fa-fire-extinguisher'

#后台管理项目注册
xadmin.site.register(RegionCase, RegionCaseAdmin)