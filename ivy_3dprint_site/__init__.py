#! ../env/bin/python
import os

from flask import Flask
from flask_assets import Environment
from webassets.loaders import PythonLoader as PythonAssetsLoader
from flask.ext.cache import Cache
from flask.ext.admin import Admin

from ivy_3dprint_site import assets
from ivy_3dprint_site.models import db

# Setup flask cache
cache = Cache()

# init flask assets
assets_env = Environment()


def create_app(object_name, env="prod"):
    """
    An flask application factory, as explained here:
    http://flask.pocoo.org/docs/patterns/appfactories/

    Arguments:
        object_name: the python path of the config object,
                     e.g. ivy_3dprint_site.settings.ProdConfig

        env: The name of the current environment, e.g. prod or dev
    """

    app = Flask(__name__)

    app.config.from_object(object_name)
    app.config['ENV'] = env

    #init the cache
    cache.init_app(app)

    #init SQLAlchemy
    db.init_app(app)

    #int Flask-admin
    admin = Admin(app)
    from controllers.admin import MyView
    admin.add_view(MyView(name='Hello'))

    # Import and register the different asset bundles
    assets_env.init_app(app)
    assets_loader = PythonAssetsLoader(assets)
    for name, bundle in assets_loader.load_bundles().iteritems():
        assets_env.register(name, bundle)

    # register our blueprints
    from controllers.main import main
    app.register_blueprint(main)

    return app

if __name__ == '__main__':
    # Import the config for the proper environment using the
    # shell var ivy_3dprint_site_ENV
    env = os.environ.get('ivy_3dprint_site_ENV', 'prod')
    app = create_app('ivy_3dprint_site.settings.%sConfig' % env.capitalize(), env=env)

    app.run()
