#!/usr/bin/env python
import os

from flask.ext.script import Manager, Server
from ivy_3dprint_site import create_app
from ivy_3dprint_site.models import db, User

env = os.environ.get('IVY_3DPRINT_SITE_ENV', 'prod')
app = create_app('ivy_3dprint_site.settings.%sConfig' % env.capitalize(), env=env)

manager = Manager(app)
manager.add_command("server", Server())


@manager.shell
def make_shell_context():
    """ Creates a python REPL with several default imports
        in the context of the app
    """

    return dict(app=app, User=User)


@manager.command
def createdb():
    """ Creates a database with all of the tables defined in
        your Alchemy models
    """

    db.create_all()

if __name__ == "__main__":
    manager.run()
