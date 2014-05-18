from flask.ext.admin import Admin, BaseView, expose
from flask.ext.admin.contrib.mongoengine import ModelView
from flask.ext.admin.form import rules

# Customized admin views
class UserView(ModelView):
    column_filters = ['name']
    column_searchable_list = ('name', 'password')


class ProductView(ModelView):
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
