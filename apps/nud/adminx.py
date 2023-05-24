from xadmin.filters import MultiSelectFieldListFilter
from django.contrib import messages
from django.http import HttpResponseRedirect

import xadmin
from .models import Nud_list
from xadmin.layout import Main, Fieldset, Side, Row
from import_export import resources
from utils.notification import Notification

# define dfm user interface
class NudAdmin(object):
    model_icon = 'fa fa-file-text-o' # fa fa-fire-extinguisher


#后台管理项目注册
xadmin.site.register(Nud_list, NudAdmin)