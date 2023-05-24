# -*- coding : utf-8 -*-
# @Author    : matt
# @Time      : 2021/12/24 21:36
import xadmin
from xadmin import views
from django.utils.html import format_html

class BaseSetting(object):
    # enable_themes = True
    use_bootswatch = True

class GlobalSettings(object):
    site_title = "DataHome_Product Engineering"
    site_footer = format_html(
        """
        PRODUCT ENGINEERING<br/>
        <a href="https://pulsarweb.twn.hp.com/pulsar2" style="vertical-align:middle" target="_blank">Pulsar</a> |
        <a href="https://hp.sharepoint.com/sites/ww/corpstandards/documents/forms/allitems.aspx?skipSignal=true" style="vertical-align:middle" target="_blank">HP Standards</a> |
        <a href="https://pulsarweb.twn.hp.com/pulsar2/mspeksreport?isPlanningReport=false" style="vertical-align:middle" target="_blank">PDD</a> |
        <a href="https://pulsarweb.twn.hp.com/Nebula/" style="vertical-align:middle" target="_blank">OBS</a> |
        <a href="https://pulsarweb.twn.hp.com/pulsar2/PartNumber/Index" style="vertical-align:middle" target="_blank">BOM</a> |
        <a href="https://hp.sharepoint.com/teams/SVTP/default.aspx" style="vertical-align:middle" target="_blank">SVTP</a>
        """
    )
    #site_footer = format_html("please contact with - <span style='color:#428bca'>matt.peng@hp.com</span>")
    menu_style = "accordion"  # 设置菜单折叠

xadmin.site.register(views.BaseAdminView, BaseSetting)
xadmin.site.register(views.CommAdminView, GlobalSettings)