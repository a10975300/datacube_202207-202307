import smtplib
import os
from email.mime.text import MIMEText
from email.header import Header
# from email.utils import formataddr
# from email.mime.multipart import MIMEMultipart
from jinja2 import Environment, FileSystemLoader

class Notification(object):
    def send_by_email(self, to_receivers, currentuser, contents, platformname, stage, flag, data, odmName):
        sender = 'notification@hp.com'
        # cc_recivers = []
        cc_recivers = ['jessica.yu@hp.com', 'li-wei.ko@hp.com', 'meg.wu@hp.com', 'matt.peng@hp.com'] # cc email addresses
        subject = '{}_{}_{}'.format(platformname, stage, flag)

        if data != None:
            total = 0
            gating = 0
            tracking = 0
            close = 0
            fix_in_next_stage = 0
            for issue in data.items():
                total += issue[1]['toatl_issue_qty']
                gating += issue[1]['gating']
                tracking += issue[1]['tracking']
                close += issue[1]['close']
                fix_in_next_stage += issue[1]['fix_in_next_stage']

            html_templete_path = os.path.abspath(os.curdir) + r"\apps\utils"
            env = Environment(loader=FileSystemLoader(html_templete_path))
            template = env.get_template('uploaded.html')
            html_content = template.render(
                message=contents,
                user=currentuser,
                data=data,
                product=platformname,
                stage=stage,
                odm=odmName,
                total=total,
                gating=gating,
                tracking=tracking,
                close=close,
                fix_in_next_stage=fix_in_next_stage
            )
            email_contents = MIMEText(
                html_content,
                'html',
                'utf-8'
            )

            email_contents['From'] = sender
            email_contents['To'] = ','.join(to_receivers)
            email_contents['Cc'] = ','.join(cc_recivers)
            email_contents['Subject'] = Header(subject, 'utf-8')

            server = smtplib.SMTP('smtp1.hp.com', 25)
            server.sendmail(sender, to_receivers + cc_recivers, email_contents.as_string())
            server.quit()
            server.close()
        else:
            email_contents = MIMEText(
                """
                <span style="color:red">This is a notification message from the system, Please do not replay.</span><br/>
                <span>user {} triggered this message</span><br/><br/>
                <span>Contents：{}</span><br/><br/>

                <span>SCPE DATAHOME</span><br/>
                <span>http://15.36.145.93/scpe/</span>

                """.format(currentuser, contents),
                'html',
                'utf-8'
            )
            email_contents['From'] = sender
            email_contents['To'] = ','.join(to_receivers)
            email_contents['Cc'] = ','.join(cc_recivers)
            email_contents['Subject'] = Header(subject, 'utf-8')

            server = smtplib.SMTP('smtp1.hp.com', 25)
            server.sendmail(sender, to_receivers + cc_recivers, email_contents.as_string())
            server.quit()
            server.close()

# if __name__ =='__main__':
#     notice = Notification()
#     notice.send_by_email(['matt.peng@hp.com'],'test contents试一下。')
