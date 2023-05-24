import xadmin
from xadmin.views import BaseAdminPlugin, CreateAdminView, UpdateAdminView

class IssueCategoryPlugin(BaseAdminPlugin):
    """
    问题分类联动插件
    """
    is_icp_execute = True #插件开关

    def init_request(self, *args, **kwargs):
        return self.is_icp_execute

    def get_media(self, media):
        #添加我们的js文件
        media = media + self.vendor("xadmin.self.select.js")
        return media

xadmin.site.register_plugin(IssueCategoryPlugin, CreateAdminView)
xadmin.site.register_plugin(IssueCategoryPlugin, UpdateAdminView)
