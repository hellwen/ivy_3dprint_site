#! ../env/bin/python
# -*- coding: utf-8 -*-
from ivy_3dprint_site import create_app
from ivy_3dprint_site.models import db, User


class TestModels:
    def setup(self):
        app = create_app('ivy_3dprint_site.settings.DevConfig', env='dev')
        self.app = app.test_client()
        db.app = app
        db.create_all()

    def teardown(self):
        db.session.remove()
        db.drop_all()

    def test_user(self):
        admin = User('admin', 'supersafepassword')

        assert admin.username == 'admin'
        assert admin.password == 'supersafepassword'

        db.session.add(admin)
        db.session.commit()
