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
    tags = db.ListField(db.ReferenceField('Tag'))
    password = db.StringField(max_length=40)

    def __unicode__(self):
        return self.name


class Tag(db.Document):
    name = db.StringField(max_length=10)

    def __unicode__(self):
        return self.name


class Photo(db.Document):
    name = db.StringField(max_length=50)
    photo = db.FileField()
    #photo = db.ImageField()

    def __unicode__(self):
        return self.name


class Lang(db.Document):
    name = db.StringField(max_length=20)

    def __unicode__(self):
        return self.name


class Title(db.EmbeddedDocument):
    lang = db.ReferenceField(Lang, required=True)
    name = db.StringField(max_length=50)

    def __unicode__(self):
        return self.name


class Product_photo(db.EmbeddedDocument):
    lang = db.ReferenceField(Lang, required=True)
    #order = db.IntegerField()
    photo = db.ReferenceField(Photo, required=False)
    note = db.StringField(max_length=1000)

    def __unicode__(self):
        return self.note

class Product(db.Document):
    name = db.StringField(max_length=50, required=True)
    title = db.ListField(db.EmbeddedDocumentField(Title))
    photo = db.ListField(db.EmbeddedDocumentField(Product_photo))

