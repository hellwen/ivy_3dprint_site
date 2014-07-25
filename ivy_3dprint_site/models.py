"""
from flask.ext.sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)

    def __init__(self, username, password):
        self.username = username
        self.password = password
"""
import datetime

from flask.ext.mongoengine import MongoEngine
db = MongoEngine()


# Define mongoengine documents
class User(db.Document):
    name = db.StringField(max_length=40)
    password = db.StringField(max_length=40)

    def __unicode__(self):
        return self.name


class Tag(db.Document):
    name = db.StringField(max_length=10)

    def __unicode__(self):
        return self.name


class Photo(db.Document):
    name = db.StringField(max_length=50)
    photo = db.ImageField()

    def __unicode__(self):
        return self.name


class Lang(db.Document):
    name = db.StringField(max_length=20)

    def __unicode__(self):
        return self.name


class Product_name(db.EmbeddedDocument):
    lang = db.ReferenceField(Lang, required=True)
    name = db.StringField(max_length=100)

    def __unicode__(self):
        return self.name


class Product_photo(db.EmbeddedDocument):
    lang = db.ReferenceField(Lang, required=True)
    order = db.IntField()
    photo = db.ReferenceField(Photo, required=False)
    title = db.StringField(max_length=100)
    note = db.StringField(max_length=1000)

    def __unicode__(self):
        return self.note

class Product(db.Document):
    iden = db.StringField(max_length=50, required=True)
    order = db.IntField()
    tags = db.ListField(db.ReferenceField('Tag'))
    name = db.ListField(db.EmbeddedDocumentField(Product_name))
    photo = db.ListField(db.EmbeddedDocumentField(Product_photo))


class File(db.Document):
    lang = db.ReferenceField(Lang, required=True)
    order = db.IntField()
    name = db.StringField(max_length=50)
    file = db.FileField()

    def __unicode__(self):
        return self.name


class Contact(db.Document):
    lang = db.ReferenceField(Lang, required=True)
    text = db.StringField(max_length=1000)

