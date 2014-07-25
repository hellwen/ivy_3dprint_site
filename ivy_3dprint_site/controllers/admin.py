from wtforms import fields, widgets
from flask.ext.admin import Admin, BaseView, expose
from flask.ext.admin.contrib.mongoengine import ModelView
from flask.ext.admin.form import rules

from flask.ext.mongoengine.wtf import orm, fields as mongo_fields
from flask.ext.admin.contrib.mongoengine.form import CustomModelConverter, EmbeddedForm


# Customized admin views
class UserView(ModelView):
    column_filters = ['name']
    column_searchable_list = ('name', 'password')


class MyCustomModelConverter(CustomModelConverter):

    @orm.converts('StringField')
    def conv_String(self, model, field, kwargs):
        if 'name' in dir(field) and field.name == 'note':
            return fields.TextAreaField(**kwargs)
        return fields.StringField(**kwargs)

class ProductView(ModelView):
    model_form_converter = MyCustomModelConverter

    #column_filters = ['name']
    #column_searchable_list = ('name')

    form_subdocuments = {
        'name': {
            'form_subdocuments': {
                None: {
                    # Add <hr> at the end of the form
                    'form_rules': ('lang', 'name', rules.HTML('<hr>')),
                    'form_widget_args': {
                        'name': {
                            'style': 'color: red'
                            }
                        }
                    }
                }
            },
        'photo': {
            'form_subdocuments': {
                None: {
                    # Add <hr> at the end of the form
                    'form_rules': ('lang', 'order', 'photo', 'title', 'note', rules.HTML('<hr>')),
                }
            }
        }
    }
