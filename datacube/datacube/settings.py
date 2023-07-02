import os
import sys
import django.contrib.auth.apps
# from ..apps import regioncase

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

#配置apps,extra_apps访问路径
sys.path.insert(0,BASE_DIR)
sys.path.insert(0, os.path.join(BASE_DIR, "apps"))
sys.path.insert(0, os.path.join(BASE_DIR, "extra_apps"))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'b=ep-+g@4y!697wbw#_wx-uy2!v#d3*tsk3rxj!oa%!1z1mu-i'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
ALLOWED_HOSTS = ['*']
handler404 = 'regioncase.views.my_custom_404_view'

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    #自定义应用
    'xadmin',
    'ckeditor', # django-ckeditor 富文本编辑器配置
    'ckeditor_uploader', # django-ckeditor 富文本编辑器配置
    'crispy_forms',
    'users.apps.UsersConfig',
    'dfm.apps.DfmConfig',
    'product.apps.ProductConfig',
    'npi.apps.NpiConfig',
    'ic.apps.IcConfig',
    'import_export',
    'dfa.apps.DfaConfig',
    'nud.apps.NudConfig',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'datacube.urls'
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR, '/templates']
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'datacube.wsgi.application'

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases
DATABASES = {
    # 'default': {
    #         'ENGINE': 'django.db.backends.sqlite3',
    #         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    #     }

    'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'datacube',
            'USER': 'root',
            'PASSWORD': '19831129',
            'HOST': '127.0.0.1',
            'OPTIONS': {
                'charset': 'utf8',
                'init_command': 'SET default_storage_engine=INNODB',
            }
        }
}

# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    # {
    #     'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    # },
    # {
    #     'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    # },
]

# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Shanghai'
USE_I18N = True
USE_L10N = True
USE_TZ = False

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# django-ckeditor 富文本编辑器配置
CKEDITOR_UPLOAD_PATH = 'upload/'
CKEDITOR_IMAGE_BACKEND = 'pillow'

CKEDITOR_CONFIGS = {
    'myConfig': {
        # 使用简体中文
        'language':'zh-cn',
        # 编辑器的宽高请根据你的页面自行设置
        'width':'auto',
        'height':'auto',
        'image_previewText':' ',
        'tabSpaces': 4,
        'toolbar': 'Custom',
        # 添加按钮在这里
        'toolbar_Custom': [
            ['Preview', 'Image', 'Maximize'],
        ],
        # 插件
        'extraPlugins': ','.join(['uploadimage']),
    },

    # 配置名是default时，django-ckeditor默认使用这个配置
    'default': {
        'enterMode': 2,
        'shiftEnterMode': 2,
        # 使用简体中文
        'language':'zh-cn',
        # 编辑器的宽高请根据你的页面自行设置
        'width':'auto',
        'height':'200px',
        'image_previewText':' ',
        'tabSpaces': 4,
        'toolbar': 'Custom',
        # 添加按钮在这里
        'toolbar_Custom': [
            ['Preview','Smiley'],
            ['Bold', 'Italic', 'Underline', 'Format', 'RemoveFormat'],
            ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
            ['NumberedList', 'BulletedList'],
            ['Blockquote', 'CodeSnippet'],
            ['TextColor', 'BGColor', 'PasteFromWord'],
            ['Image', 'Link'],
            ['Maximize']
        ],
        # 插件
        'extraPlugins': ','.join(['uploadimage','widget','lineutils']),
    }
}

