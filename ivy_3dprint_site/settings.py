class Config(object):
    SECRET_KEY = 'secret key'


class ProdConfig(Config):
    MONGODB_SETTINGS = {'DB': 'ivy_3dprint_site', 'HOST': 'mongodb://ivy_3dprint_site:1qaz2wsx@oceanic.mongohq.com:10046/ivy_3dprint_site'}

    CACHE_TYPE = 'simple'


class DevConfig(Config):
    DEBUG = True

    MONGODB_SETTINGS = {'DB': 'ivy_3dprint_site', 'HOST': 'mongodb://ivy_3dprint_site:1qaz2wsx@oceanic.mongohq.com:10046/ivy_3dprint_site'}

    CACHE_TYPE = 'simple'

    ASSETS_DEBUG = True

    # This allows us to test the forms from WTForm
    WTF_CSRF_ENABLED = False
