from wtforms import fields, widgets
from flask.ext.admin.contrib import mongoengine


# Define wtforms widget and field
class CKTextAreaWidget(widgets.TextArea):
    def __call__(self, field, **kwargs):
        kwargs.setdefault('class_', 'ckeditor')
        return super(CKTextAreaWidget, self).__call__(field, **kwargs)


class CKTextAreaField(fields.TextAreaField):
    widget = CKTextAreaWidget()


class CKTextAdmin(mongoengine.ModelView):
    form_overrides = dict(text=CKTextAreaField)

    create_template = 'create.html'
    edit_template = 'edit.html'

