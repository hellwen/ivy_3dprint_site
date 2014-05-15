class Config(object):
    SECRET_KEY = 'secret key'


class ProdConfig(Config):
    #SQLALCHEMY_DATABASE_URI = 'sqlite:///../database.db'

    CACHE_TYPE = 'simple'


class DevConfig(Config):
    DEBUG = True

    #SQLALCHEMY_DATABASE_URI = 'sqlite:///../database.db'
    #SQLALCHEMY_ECHO = True

    MONGODB_SETTINGS = {'DB': 'ivy_3dprint_site', 'HOST': 'mongodb://ivy_3dprint_site:1qaz2wsx@oceanic.mongohq.com:10046/ivy_3dprint_site', 'PORT': 10046}
    #MONGODB_SETTINGS = {'DB': 'ivy_3dprint_site', 'HOST': 'mongodb://ivy_3dprint_site:1qaz2wsx@oceanic.mongohq.com:10046/ivy_3dprint_site', 'PORT': 10046, 'USERNAME': 'ivy_3dprint_site', 'PASSWORD': '1qaz2wsx'} 

    CACHE_TYPE = 'simple'

    # This allows us to test the forms from WTForm
    WTF_CSRF_ENABLED = False
