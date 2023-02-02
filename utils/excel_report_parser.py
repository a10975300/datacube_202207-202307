import datetime
import requests
from PIL import Image
from io import BytesIO
from django.contrib.auth.models import User
from npi.models import Issue, Products, SymptomCategory_First, SymptomCategory_Second

class SafelaunchParser():
    """
    parse safelaunch report
    """
    def parse(self, request, workbook, currentuser):
        """ check safe launch template version then assign the right method()"""
        report_version = workbook['0-Summary Data'].cell(1,1).value   # get safe launch report template version from summary sheet
        if report_version == 'V2.2f (2022/12/09)':
            result = self.new_template(request=request, workbook=workbook, currentuser=currentuser)
            return result

        else: # report_version == 'V2.1 (2022/10/25)' or other old template
            result = self.old_template(request=request, workbook=workbook, currentuser=currentuser)
            return result

    # parse new template V2.2e (2022/12/06)
    def new_template(self,request, workbook, currentuser):
        summary_sheet = workbook['0-Summary Data']
        odm_name = summary_sheet.cell(3, 2).value             # get odm name from summary sheet
        segment = summary_sheet.cell(4, 2).value              # get product segment from summary sheet
        product_name = summary_sheet.cell(5, 2).value         # get product name from summary sheet
        build_stage = summary_sheet.cell(7, 2).value          # get build stage from summary sheet

        sheet_names = workbook.sheetnames
        data = {}  # initial a null dict for collecting issue qty by each sheet
        for sheet_name in sheet_names[2:11]:
            # count issue qty by each sheet (default is 0)
            issue_qty_by_sheet = 0
            issue_qty_gating = 0
            issue_qty_tracking = 0
            issue_qty_close = 0
            issue_qty_fix_in_next_stage = 0

            sheet = workbook[sheet_name]  # 通过sheet名称指定sheet
            rows_number = sheet.max_row  # get total row numbers
            # 调用get_picture_from_excels方法 处理sheet里面的图片，返回每张图片的具体行数和列数
            if sheet._images:
                self.result, self.buildstage, self.platform = self.get_pictures_from_excel(sheet, product_name, build_stage, sheet_name)
            else:
                self.result = {}
            # write excel contents into database by for row in range(4, rows_number):
            for row in range(5, rows_number, 4):
                unit_size = sheet.cell(row, 2).value

                if unit_size:  # check if have contents in excel row? if yes, execute below codings; if no, break
                    productIds = self.create_new_product(unit_size, build_stage, odm_name, segment, currentuser)  # 调用函数 new_product 判断数据库是否已有该产品，
                    for productId in productIds:
                        new_issue = Issue()
                        new_issue.platformName_id = productId
                        new_issue.processName = sheet_name                                 # write process name
                        new_issue.issue_desc = sheet.cell(row, 3).value                    # write issue description
                        issueCategory_1 = sheet.cell(row, 4).value                         # write issue interaction
                        category_1_id = self.new_category_1(issueCategory_1)
                        new_issue.issue_interaction_id = category_1_id
                        issueCategory_2 = sheet.cell(row, 5).value                         # write issue symptom
                        category_2_id = self.new_category_2(issueCategory_2, category_1_id, issueCategory_1)
                        new_issue.issue_symptom_id = category_2_id
                        new_issue.impact_scope = sheet.cell(row, 6).value                  # write issue impact scope

                        pre_build_qty = (0 if (sheet.cell(row, 7).value) == None else (sheet.cell(row, 7).value))
                        pre_build_defcet_qty = (0 if (sheet.cell(row, 8).value) == None else (sheet.cell(row, 8).value))
                        mini1_build_qty = (0 if (sheet.cell(row + 1, 7).value) == None else (sheet.cell(row + 1, 7).value))
                        mini1_build_defcet_qty = (0 if (sheet.cell(row + 1, 8).value) == None else (sheet.cell(row + 1, 8).value))
                        mini2_build_qty = (0 if (sheet.cell(row + 2, 7).value) == None else (sheet.cell(row + 2, 7).value))
                        mini2_build_defcet_qty = (0 if (sheet.cell(row + 2, 8).value) == None else (sheet.cell(row + 2, 8).value))
                        balance_qty = (0 if (sheet.cell(row + 3, 7).value) == None else (sheet.cell(row + 3, 7).value))
                        balance_defcet_qty = (0 if (sheet.cell(row + 3, 8).value) == None else (sheet.cell(row + 3, 8).value))

                        new_issue.pre_build_qty = pre_build_qty                       # pre_build build qty
                        new_issue.pre_build_defcet_qty = pre_build_defcet_qty         # pre_build defect qty
                        new_issue.mini_build_qty = mini1_build_qty                    # mini-1 build qty
                        new_issue.mini_build_defcet_qty = mini1_build_defcet_qty      # mini-1 defect qty
                        new_issue.mini2_build_qty = mini2_build_qty                   # mini-2 build qty
                        new_issue.mini2_build_defcet_qty = mini2_build_defcet_qty     # mini-2 defect qty
                        new_issue.balance_qty = balance_qty                           # balance build qty
                        new_issue.balance_defcet_qty = balance_defcet_qty             # balance defect qty

                        new_issue.input_qty = pre_build_qty + mini1_build_qty + mini2_build_qty + balance_qty                                  # write total inputs
                        new_issue.defect_qty = pre_build_defcet_qty + mini1_build_defcet_qty + mini2_build_defcet_qty + balance_defcet_qty     # write defects

                        new_issue.fail_rate_stage = "NA"                                  # write failure rate by every build stage
                        new_issue.sn = sheet.cell(row, 10).value                          # write fail units S/N information
                        new_issue.sku = sheet.cell(row, 11).value                         # write fail units SKU information

                        # get and write pic path
                        if (sheet_name + str(11) + str(row)) in self.result:
                            new_issue.photo = "issue/images/{}/{}/{}".format(self.platform, self.buildstage, self.result.get(sheet_name + str(11) + str(row)))
                        else:
                            new_issue.photo = ""

                        new_issue.issue_analysis = sheet.cell(row, 13).value.replace("\n", "<br/>")  # write issue analysis contents
                        new_issue.root_cause = sheet.cell(row, 14).value.replace("\n", "<br/>")      # write root cause
                        new_issue.root_cause_category = sheet.cell(row, 15).value                    # write root cause category
                        new_issue.short_term = sheet.cell(row, 16).value.replace("\n", "<br/>")      # write short term solutions
                        new_issue.short_term_category = sheet.cell(row, 17).value                    # write short term solution category
                        new_issue.long_term = sheet.cell(row, 18).value.replace("\n", "<br/>")       # write long-term solutions
                        new_issue.long_term_category = sheet.cell(row, 19).value                     # write long-term solution category
                        new_issue.status = sheet.cell(row, 20).value                                 # write issue status

                        obs = sheet.cell(row, 21).value
                        if obs == '' or obs == 'N/A' or obs == 'N' or obs == 0:
                            obs = 'NA'
                        new_issue.obs = obs                                                          # write obs number

                        new_issue.duplicate = sheet.cell(row, 22).value                              # write duplicate info
                        errorCode = sheet.cell(row, 23).value                                        # write issue error code number
                        if errorCode == '' or errorCode == "N/A" or errorCode == 'N' or errorCode == 0:
                            new_issue.errorCode = 'NA'
                        new_issue.errorCode = errorCode

                        new_issue.repeating = sheet.cell(row, 24).value                              # write issue repeating info
                        new_issue.repeatingstage = sheet.cell(row, 25).value                         # write issue repeated stages
                        new_issue.buildstage = sheet.cell(row, 26).value                             # write issue build stage
                        new_issue.owner = sheet.cell(row, 27).value                                  # write issue owner
                        new_issue.updatedate = sheet.cell(row, 28).value
                        new_issue.obs_link = "http://pulsarweb.twn.hp.com/Nebula//ReportRunner/RunDetailWithObsIds?observationIds={}".format(obs)  # write obs links

                        new_issue.save()

                        issue_qty_by_sheet += 1  # count issue qty by sheet
                        if sheet.cell(row, 20).value == "Gating":
                            issue_qty_gating += 1
                        elif sheet.cell(row, 20).value == "Tracking":
                            issue_qty_tracking += 1
                        elif sheet.cell(row, 20).value == "Close":
                            issue_qty_close += 1
                        elif sheet.cell(row, 20).value == "Fix in next phase":
                            issue_qty_fix_in_next_stage += 1
                        else:
                            issue_qty_tracking += 1
            data[sheet_name] = {
                "toatl_issue_qty": issue_qty_by_sheet,
                "gating": issue_qty_gating,
                "tracking": issue_qty_tracking,
                "close": issue_qty_close,
                "fix_in_next_stage": issue_qty_fix_in_next_stage
            }

        # import logs
        self.safelaunch_import_record(product_name, build_stage, currentuser)
        # log entries
        self.log_entries(request, product_name, build_stage, currentuser)
        return [product_name, build_stage, odm_name, data]

    # parse old template V2.1 (2022/10/25)
    def old_template(self, request, workbook, currentuser):
        summary_sheet = workbook['0-Summary Data']
        odm_name = summary_sheet.cell(3, 2).value  # get odm name from summary sheet
        segment = summary_sheet.cell(4, 2).value  # get product segment from summary sheet
        product_name = summary_sheet.cell(5, 2).value  # get product name from summary sheet
        build_stage = summary_sheet.cell(7, 2).value  # get build stage from summary sheet

        sheet_names = workbook.sheetnames
        data = {}  # initial a null dict for collecting issue qty by each sheet
        for sheet_name in sheet_names[2:11]:
            # count issue qty by each sheet (default is 0)
            issue_qty_by_sheet = 0
            issue_qty_gating = 0
            issue_qty_tracking = 0
            issue_qty_close = 0
            issue_qty_fix_in_next_stage = 0

            sheet = workbook[sheet_name]  # 通过sheet名称指定sheet
            rows_number = sheet.max_row  # get total row numbers
            # 调用get_picture_from_excels方法 处理sheet里面的图片，返回每张图片的具体行数和列数
            if sheet._images:
                self.result, self.buildstage, self.platform = self.get_pictures_from_excel(sheet, product_name,
                                                                                           build_stage, sheet_name)
            else:
                self.result = {}
            # write excel contents into database by for row in range(4, rows_number):
            for row in range(5, rows_number):
                unit_size = sheet.cell(row, 2).value

                if unit_size:  # check if have contents in excel row? if yes, execute below codings; if no, break
                    productIds = self.create_new_product(unit_size, build_stage, odm_name, segment,
                                                         currentuser)  # 调用函数 new_product 判断数据库是否已有该产品，
                    for productId in productIds:
                        new_issue = Issue()
                        new_issue.platformName_id = productId
                        new_issue.processName = sheet_name  # write process name
                        new_issue.issue_desc = sheet.cell(row, 3).value  # write issue description
                        issueCategory_1 = sheet.cell(row, 4).value  # write issue interaction
                        category_1_id = self.new_category_1(issueCategory_1)
                        new_issue.issue_interaction_id = category_1_id
                        issueCategory_2 = sheet.cell(row, 5).value  # write issue symptom
                        category_2_id = self.new_category_2(issueCategory_2, category_1_id, issueCategory_1)
                        new_issue.issue_symptom_id = category_2_id
                        new_issue.impact_scope = sheet.cell(row, 6).value  # write issue impact scope

                        new_issue.pre_build_qty = 0
                        new_issue.pre_build_defcet_qty = 0
                        new_issue.mini_build_qty = 0          # mini-1 build qty
                        new_issue.mini_build_defcet_qty = 0   # mini-1 defect qty
                        new_issue.mini2_build_qty = 0         # mini-2 build qty
                        new_issue.mini2_build_defcet_qty = 0  # mini-2 defect qty
                        new_issue.balance_qty = 0             # balance build qty
                        new_issue.balance_defcet_qty = 0      # balance defect qty

                        # write total input quantity
                        new_issue.input_qty = (sheet.cell(row, 7).value)
                        # write defect quantity
                        new_issue.defect_qty = (sheet.cell(row, 8).value)

                        new_issue.fail_rate_stage = (sheet.cell(row, 9).value)  # write failure rate by every build stage
                        new_issue.sn = sheet.cell(row, 10).value  # write fail units S/N information
                        new_issue.sku = sheet.cell(row, 11).value  # write fail units SKU information

                        # get and write pic path
                        if (sheet_name + str(11) + str(row)) in self.result:
                            new_issue.photo = "issue/images/{}/{}/{}".format(self.platform, self.buildstage,
                                                                             self.result.get(
                                                                                 sheet_name + str(11) + str(row)))
                        else:
                            new_issue.photo = ""

                        new_issue.issue_analysis = sheet.cell(row, 13).value.replace("\n","<br/>")  # write issue analysis contents
                        new_issue.root_cause = sheet.cell(row, 14).value.replace("\n","<br/>")  # write root cause
                        new_issue.root_cause_category = sheet.cell(row, 15).value  # write root cause category
                        new_issue.short_term = sheet.cell(row, 16).value.replace("\n","<br/>")  # write short term solutions
                        new_issue.short_term_category = sheet.cell(row, 17).value  # write short term solution category
                        new_issue.long_term = sheet.cell(row, 18).value.replace("\n","<br/>")  # write long-term solutions
                        new_issue.long_term_category = sheet.cell(row, 19).value  # write long-term solution category
                        new_issue.status = sheet.cell(row, 20).value  # write issue status

                        obs = sheet.cell(row, 21).value
                        if obs == '' or obs == 'N/A' or obs == 'N' or obs == 0:
                            obs = 'NA'
                        new_issue.obs = obs  # write obs number

                        new_issue.duplicate = sheet.cell(row, 22).value  # write duplicate info
                        errorCode = sheet.cell(row, 23).value  # write issue error code number
                        if errorCode == '' or errorCode == "N/A" or errorCode == 'N' or errorCode == 0:
                            new_issue.errorCode = 'NA'
                        new_issue.errorCode = errorCode

                        new_issue.repeating = sheet.cell(row, 24).value  # write issue repeating info
                        new_issue.repeatingstage = sheet.cell(row, 25).value  # write issue repeated stages
                        new_issue.buildstage = sheet.cell(row, 26).value  # write issue build stage
                        new_issue.owner = sheet.cell(row, 27).value  # write issue owner
                        new_issue.updatedate = sheet.cell(row, 28).value
                        new_issue.obs_link = "http://pulsarweb.twn.hp.com/Nebula//ReportRunner/RunDetailWithObsIds?observationIds={}".format(
                            obs)  # write obs links

                        new_issue.save()

                        issue_qty_by_sheet += 1  # count issue qty by sheet
                        if sheet.cell(row, 20).value == "Gating":
                            issue_qty_gating += 1
                        elif sheet.cell(row, 20).value == "Tracking":
                            issue_qty_tracking += 1
                        elif sheet.cell(row, 20).value == "Close":
                            issue_qty_close += 1
                        elif sheet.cell(row, 20).value == "Fix in next phase":
                            issue_qty_fix_in_next_stage += 1
                        else:
                            issue_qty_tracking += 1
            data[sheet_name] = {
                "toatl_issue_qty": issue_qty_by_sheet,
                "gating": issue_qty_gating,
                "tracking": issue_qty_tracking,
                "close": issue_qty_close,
                "fix_in_next_stage": issue_qty_fix_in_next_stage
            }

        # import logs
        self.safelaunch_import_record(product_name, build_stage, currentuser)
        # log entries
        self.log_entries(request, product_name, build_stage, currentuser)
        return [product_name, build_stage, odm_name, data]

    # handel date formate because that the excel 读出数字日期（44557）转换函数
    def date_conversion(self, date):
        delta = datetime.timedelta(days=date)
        newdate = datetime.datetime.strptime('1899-12-30', '%Y-%m-%d') + delta
        return datetime.datetime.strftime(newdate, '%Y-%m-%d')

    # automatically handle product infomation
    def create_new_product(self, unit_size, build_stage, odm_name, segment, currentuser):
        """
        check if this product already in the database 使用productName查询数据库里是否已有该产品,
            if yes, then return product id
            if no, create a new one and return the product id
        """
        product_id =[] # initial a null list to record product IDs

        user = User.objects.filter(username=currentuser)
        unit_size = unit_size.split(",") # convert unit_size to list by ","
        for product in unit_size:
            obj = Products.objects.filter(ProductName=product)
            if obj:
                product_id.append(obj[0].id)
                Products.objects.filter(ProductName=product).update(ProductPhase=build_stage) # update build stage only
            else:
                new_product = Products.objects.create(
                    ProductName = product,
                    Product_Segment = segment,
                    ProductPhase = build_stage,
                    PartnerName = odm_name,
                    user = currentuser,
                    PE = [(res.first_name + " " + res.last_name) for res in user][0]
                )
                new_product.save()
                product_id.append(new_product.id)
        return product_id

    # automatically handle issue's category
    def new_category_1(self, issueCategory_1):
        """
        check if this issue category already in the database
            if yes, return id
            if no, create a new category_1 and also category_2
        """
        category_1 =  SymptomCategory_First.objects.filter(category_Name=issueCategory_1)
        if category_1:
            return category_1[0].id
        else:
            newCategory = SymptomCategory_First.objects.create(
                category_Name = issueCategory_1, # write category name
                category_Desc = "This category name is {} as a 1st issue category.".format(issueCategory_1)
            )
            newCategory.save()
            return newCategory.id

    def new_category_2(self, issueCategory_2, category_1_id, issueCategory_1):
        category_2 = SymptomCategory_Second.objects.filter(category_Name=issueCategory_2)
        if category_2:
            return category_2[0].id
        else:
            newCategory = SymptomCategory_Second.objects.create(
                category_FirstType_id = category_1_id,
                category_Name=issueCategory_2,  # write category name
                category_Desc="This is a 2nd issue category belongs to {}".format(issueCategory_1)
            )
            newCategory.save()
            return newCategory.id

    # get pictures from excel in each sheet
    def get_pictures_from_excel(self, sheet, product_name, build_stage, sheet_name):
        # remove symbols from platform name
        product_name = product_name.replace(" ", "").replace("/", "_").replace("'", "").replace("\"", "").strip()
        # initial a null dict for recording pictures location(stage, sheet, row, column...)
        picture_location_dict = {}
        stages = {
            "SI-1": "SI_1",
            "SI-2": "SI_2",
            "SI-3": "SI_3",
            "PV-1": "PV_1",
            "PV-2": "PV_2",
            "PV-3": "PV_3",
            "PRB/TLD/PVR": "PRB_TLD_PVR",
            "MV-1": "MV_1",
            "MV-2": "MV_2"
        }
        for image in sheet._images:
            img = Image.open(BytesIO(image._data()))
            img.convert("RGB")  # fix error of "OSError: cannot write mode RGBA as JPEG" ,
            # print(image._data())
            """
            png格式图片颜色为四通道RGBA，而jpg格式是三通道RGB, （RGBA是代表Red（红色）Green（绿色）Blue（蓝色）和Alpha的色彩空间。
            虽然它有的时候被描述为一个颜色空间，但是它其实仅仅是RGB模型的附加了额外的信息。alpha通道一般用作不透明度参数。）
            """
            # img.show()
            img_name = ("{}_" + stages.get(build_stage) + "_Sheet" + sheet_name[0] + "_col{}_row{}.jpg").format(
                product_name, image.anchor._from.col, image.anchor._from.row)
            # return
            if (image.anchor._from.col, image.anchor._from.row):
                picture_location_dict["{}{}{}".format(sheet_name, str(image.anchor._from.col), str(image.anchor._from.row + 1))] = img_name

                # 调用pictureUpload方法 requests.post 从本地跨域提交图片到服务器
                self.pictureUpload(product_name, stages.get(build_stage), img_name, image._data())
        return picture_location_dict, stages.get(build_stage), product_name

    # 通过requests.post模拟游览器提交图片和信息
    def pictureUpload(self, product_name, stage_name, img_name, image):
        url = 'http://127.0.0.1:8000/pictures_upload/'  # this url for localhost test only
        # url = 'http://15.36.145.93/pictures_upload/'    # this url for server
        myData = {
            "product_name": product_name,
            "stage_name": stage_name,
            "pic_name": img_name
        }
        myFiles = {
            "img": image
        }
        res = requests.post(url, files=myFiles, data=myData)
        res.close()

    # import logs
    def safelaunch_import_record(self, prodct_name, build_stage, currentuser):
        from npi.models import DataImportRecords
        # 记录数据导入信息
        importRecord = DataImportRecords.objects.create(
            import_product_name=prodct_name,
            import_product_phase=build_stage,
            user=currentuser
        )
        importRecord.save()

        # write a log into Log entries after safe-launch report uploaded
    def log_entries(self, request, product_name, build_stage, currentuser):
        from xadmin.models import Log
        Log.objects.create(user=currentuser,
                           ip_addr=request.META.get('REMOTE_ADDR'),
                           object_repr=str(object),
                           action_flag='',
                           message="{}-{} safelaunch report uploaded sucessfully".format(product_name, build_stage))


class DfmReportParser():
    """
    parse Dfm tear down report
    """
    def __int__(self):
        pass


class DfaReportParser():
    """
    parse DFA report
    """
    def __int__(self):
        pass