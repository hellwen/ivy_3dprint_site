from flask.ext.admin import Admin, BaseView, expose
from flask.ext.admin.contrib.mongoengine import ModelView
from flask.ext.admin.form import rules

# Customized admin views
class UserView(ModelView):
    column_filters = ['name']

    column_searchable_list = ('name', 'password')

    form_ajax_refs = {
        'tags': {
            'fields': ('name',)
        }
    }


class TodoView(ModelView):
    column_filters = ['done']

    form_ajax_refs = {
        'user': {
            'fields': ['name']
        }
    }


class PostView(ModelView):
    form_subdocuments = {
        'inner': {
            'form_subdocuments': {
                None: {
                    # Add <hr> at the end of the form
                    'form_rules': ('name', 'tag', 'value', rules.HTML('<hr>')),
                    'form_widget_args': {
                        'name': {
                            'style': 'color: red'
                        }
                    }
                }
            }
        }
    }

class ProductView(ModelView):
    form_subdocuments = {
        'title': {
            'form_subdocuments': {
                None: {
                    # Add <hr> at the end of the form
                    'form_rules': ('lang', 'name', rules.HTML('<hr>')),
                    }
                }
            },
        'photo': {
            'form_subdocuments': {
                None: {
                    # Add <hr> at the end of the form
                    'form_rules': ('lang', 'photo', 'note', rules.HTML('<hr>')),
                    }
                }
            }
    }
