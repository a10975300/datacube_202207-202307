# Generated by Django 2.2 on 2023-05-24 15:50

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ProductVersionId', models.IntegerField(blank=True, null=True, verbose_name='Product Id')),
                ('ProductPhase', models.CharField(blank=True, choices=[('SI-1', 'SI-1'), ('SI-2', 'SI-2'), ('SI-3', 'SI-3'), ('PV-1', 'PV-1'), ('PV-2', 'PV-2'), ('PV-3', 'PV-3'), ('PRB/TLD/PVR', 'PRB/TLD/PVR'), ('MV-1', 'MV-1'), ('MV-2', 'MV-2'), ('Ramp', 'Ramp'), ('Production', 'Production')], max_length=15, null=True, verbose_name='Current Stage')),
                ('ProductName', models.CharField(max_length=30, null=True, verbose_name='Product Name')),
                ('PartnerName', models.CharField(blank=True, max_length=15, null=True, verbose_name='ODM')),
                ('PE', models.CharField(choices=[('Kevin Qian', 'Kevin Qian'), ('Wilson Xiao', 'Wilson Xiao'), ('Scott She', 'Scott She'), ('Chris Cui', 'Chris Cui'), ('Ivy Zeng', 'Ivy Zeng'), ('Niko Zhou', 'Niko Zhou'), ('Damon Wang', 'Damon Wang'), ('Tian Zhang', 'Tian Zhang'), ('Miller Shih', 'Miller Shih'), ('Franky He', 'Franky He'), ('Matt Peng', 'Matt Peng')], max_length=20, null=True, verbose_name='PE')),
                ('SM', models.CharField(blank=True, max_length=20, null=True, verbose_name='SM')),
                ('PDM', models.CharField(blank=True, max_length=20, null=True, verbose_name='PDM')),
                ('PM', models.CharField(blank=True, max_length=20, null=True, verbose_name='PM')),
                ('BuildDate_SI', models.DateField(blank=True, null=True, verbose_name='SI')),
                ('BuildDate_PV', models.DateField(blank=True, null=True, verbose_name='PV')),
                ('BuildDate_PRB_TLD_PVR', models.DateField(blank=True, null=True, verbose_name='PRB/TLD/PVR')),
                ('BuildDate_MV', models.DateField(blank=True, null=True, verbose_name='MV')),
                ('RTP', models.DateField(blank=True, null=True, verbose_name='RTP')),
                ('Chipset', models.CharField(blank=True, max_length=50, null=True, verbose_name='Chipset')),
                ('Platform_Type', models.CharField(blank=True, choices=[('CMIT', 'CMIT'), ('Consumer', 'Consumer')], max_length=10, verbose_name='bNB/cNB')),
                ('Product_Segment', models.CharField(blank=True, choices=[('1000', '1000'), ('800', '800'), ('600', '600'), ('400', '400'), ('mWS', 'mWS'), ('Spectre', 'Spectre'), ('ENVY', 'ENVY'), ('Pavilion', 'Pavilion'), ('OMEN', 'OMEN'), ('Pavilion Gaming', 'Pavilion Gaming'), ('OPP', 'OPP'), ('Victus', 'Victus'), ('Chromebook', 'Chromebook'), ('Education', 'Education'), ('Dock', 'Dock'), ('TC', 'TC'), ('RPOS', 'RPOS')], max_length=20, verbose_name='Segment')),
                ('Product_Type', models.CharField(blank=True, choices=[('X360', 'X360'), ('Clamshell', 'Clamshell'), ('Detachable (2 in 1)', 'Detachable (2 in 1)'), ('Slate(Tablet)', 'Slate(Tablet)'), ('Folio', 'Folio'), ('Dock', 'Dock'), ('HP Engage Go( POS)', 'HP Engage Go( POS)')], max_length=50, verbose_name='Product Type')),
                ('Product_Size', models.CharField(blank=True, max_length=10, null=True, verbose_name='Product Size')),
                ('Product_RCTO_Type', models.CharField(blank=True, choices=[('1.0', '1.0'), ('1.5', '1.5'), ('2.0', '2.0'), ('N/A', 'N/A')], max_length=5, verbose_name='RCTO')),
                ('Product_MV_date', models.IntegerField(blank=True, null=True, verbose_name='Year')),
                ('Product_A_Cover_material_Type', models.TextField(blank=True, null=True, verbose_name='A-Cover Material')),
                ('Product_A_Cover_material_Surface', models.TextField(blank=True, null=True, verbose_name='A-Cover Surface')),
                ('Product_A_Cover_material_Thickness', models.CharField(blank=True, max_length=10, null=True, verbose_name='A-Cover Thickness')),
                ('Product_A_Cover_material_Supplier01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-1')),
                ('Product_A_Cover_material_Supplier02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-2')),
                ('Product_A_Cover_material_Supplier03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-3')),
                ('Product_A_Cover_material_Supplier04', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-4')),
                ('Product_A_Cover_Glue_Vendor', models.CharField(blank=True, default='TBD', max_length=20, null=True, verbose_name='Cover Glue Vendor')),
                ('Product_A_Cover_Bonding_Vendor01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-1')),
                ('Product_A_Cover_Bonding_Vendor02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-2')),
                ('Product_A_Cover_Bonding_Vendor03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-3')),
                ('Product_B_Cover_material_Type', models.TextField(blank=True, null=True, verbose_name=' B-Cover Material')),
                ('Product_B_Cover_material_Surface', models.TextField(blank=True, null=True, verbose_name='B-Cover Surface')),
                ('Product_B_Cover_material_Thickness', models.CharField(blank=True, max_length=10, null=True, verbose_name='B-Cover Thickness')),
                ('Product_B_Cover_material_Supplier01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-1')),
                ('Product_B_Cover_material_Supplier02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-2')),
                ('Product_B_Cover_material_Supplier03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-3')),
                ('Product_B_Cover_material_Supplier04', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-4')),
                ('Product_B_Cover_Glue_Vendor', models.CharField(blank=True, default='TBD', max_length=20, null=True, verbose_name='Cover Glue Vendor')),
                ('Product_B_Cover_Bonding_Vendor01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-1')),
                ('Product_B_Cover_Bonding_Vendor02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-2')),
                ('Product_B_Cover_Bonding_Vendor03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-3')),
                ('Product_C_Cover_material_Type', models.TextField(blank=True, null=True, verbose_name='C-Cover Material')),
                ('Product_C_Cover_material_Surface', models.TextField(blank=True, null=True, verbose_name='C-Cover Surface')),
                ('Product_C_Cover_material_Thickness', models.CharField(blank=True, max_length=10, null=True, verbose_name='C-Cover Thickness')),
                ('Product_C_Cover_material_Supplier01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-1')),
                ('Product_C_Cover_material_Supplier02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-2')),
                ('Product_C_Cover_material_Supplier03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-3')),
                ('Product_C_Cover_material_Supplier04', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-4')),
                ('Product_C_Cover_Glue_Vendor', models.CharField(blank=True, default='TBD', max_length=20, null=True, verbose_name='Cover Glue Vendor')),
                ('Product_C_Cover_Bonding_Vendor01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-1')),
                ('Product_C_Cover_Bonding_Vendor02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-2')),
                ('Product_C_Cover_Bonding_Vendor03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-3')),
                ('Product_D_Cover_material_Type', models.TextField(blank=True, null=True, verbose_name='D-Cover Material')),
                ('Product_D_Cover_material_Surface', models.TextField(blank=True, null=True, verbose_name='D-Cover Surface')),
                ('Product_D_Cover_material_Thickness', models.CharField(blank=True, max_length=10, null=True, verbose_name='D-Cover Thickness')),
                ('Product_D_Cover_material_Supplier01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-1')),
                ('Product_D_Cover_material_Supplier02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-2')),
                ('Product_D_Cover_material_Supplier03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-3')),
                ('Product_D_Cover_material_Supplier04', models.CharField(blank=True, max_length=20, null=True, verbose_name='Cover Supplier-4')),
                ('Product_D_Cover_Glue_Vendor', models.CharField(blank=True, default='TBD', max_length=20, null=True, verbose_name='Cover Glue Vendor')),
                ('Product_D_Cover_Bonding_Vendor01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-1')),
                ('Product_D_Cover_Bonding_Vendor02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-2')),
                ('Product_D_Cover_Bonding_Vendor03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-3')),
                ('Product_Hinge_material_Type', models.CharField(blank=True, max_length=50, null=True, verbose_name='Hinge-Material')),
                ('Product_Hinge_material_Surface', models.CharField(blank=True, max_length=50, null=True, verbose_name='Hinge-Surface')),
                ('Product_Hinge_material_Thickness', models.CharField(blank=True, max_length=10, null=True, verbose_name='Hinge-Thickness')),
                ('Product_Hinge_material_Supplier01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Supplier-1')),
                ('Product_Hinge_material_Supplier02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Supplier-2')),
                ('Product_Hinge_material_Supplier03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Supplier-3')),
                ('Product_Hinge_material_Supplier04', models.CharField(blank=True, max_length=20, null=True, verbose_name='Supplier-4')),
                ('Product_Hinge_Glue_Vendor', models.CharField(blank=True, default='TBD', max_length=20, null=True, verbose_name='Hinge Glue Vendor')),
                ('Product_Hinge_Bonding_Vendor01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-1')),
                ('Product_Hinge_Bonding_Vendor02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-2')),
                ('Product_Hinge_Bonding_Vendor03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-3')),
                ('Product_TouchPanel', models.CharField(blank=True, max_length=20, null=True, verbose_name='Panel Bonding Type')),
                ('Product_TouchPanel_BondingVendor01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-1')),
                ('Product_TouchPanel_BondingVendor02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-2')),
                ('Product_TouchPanel_BondingVendor03', models.CharField(blank=True, max_length=20, null=True, verbose_name='Bonding Vendor-3')),
                ('Product_TouchPanel_Solution01', models.CharField(blank=True, max_length=20, null=True, verbose_name='Touch Solution-1')),
                ('Product_TouchPanel_Solution02', models.CharField(blank=True, max_length=20, null=True, verbose_name='Touch Solution-2')),
                ('Product_TouchPanel_Outsize', models.CharField(blank=True, max_length=20, null=True, verbose_name='Panel Outsize')),
                ('Product_Touchpad_Solution01', models.CharField(blank=True, max_length=20, null=True, verbose_name='TouchPad Solution01')),
                ('Product_Touchpad_Solution02', models.CharField(blank=True, max_length=20, null=True, verbose_name='TouchPad Solution02')),
                ('Product_Touchpad_Outsize', models.CharField(blank=True, max_length=20, null=True, verbose_name='TouchPad Outsize')),
                ('ProductFamilyName', models.CharField(blank=True, max_length=50, null=True, verbose_name='ProductFamilyName')),
                ('ProductStatus', models.CharField(blank=True, max_length=10, null=True, verbose_name='ProductStatus')),
                ('yeildrate_ramp', models.CharField(blank=True, default='', max_length=10, verbose_name='Yield_Ramp')),
                ('yeildrate_rtp', models.CharField(blank=True, default='', max_length=10, verbose_name='Yield_RTP')),
                ('yeildrate_mv_mini1', models.CharField(blank=True, default='', max_length=10, verbose_name='Yield_MV')),
                ('yeildrate_pv', models.CharField(blank=True, default='', max_length=10, verbose_name='Yield_PV')),
                ('yeildrate_si', models.CharField(blank=True, default='', max_length=10, verbose_name='Yield_SI')),
                ('create_date', models.DateTimeField(default=datetime.datetime.now, verbose_name='Create Date')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Products',
                'verbose_name_plural': 'Products',
                'db_table': 'datacube_product',
            },
        ),
    ]
