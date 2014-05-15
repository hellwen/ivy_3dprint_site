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


class Todo(db.Document):
    title = db.StringField(max_length=60)
    text = db.StringField()
    done = db.BooleanField(default=False)
    pub_date = db.DateTimeField(default=datetime.datetime.now)
    user = db.ReferenceField(User, required=False)

    # Required for administrative interface
    def __unicode__(self):
        return self.title


class Tag(db.Document):
    name = db.StringField(max_length=10)

    def __unicode__(self):
        return self.name


class Comment(db.EmbeddedDocument):
    name = db.StringField(max_length=20, required=True)
    value = db.StringField(max_length=20)
    tag = db.ReferenceField(Tag)


class Post(db.Document):
    name = db.StringField(max_length=20, required=True)
    value = db.StringField(max_length=20)
    inner = db.ListField(db.EmbeddedDocumentField(Comment))
    lols = db.ListField(db.StringField(max_length=20))


class File(db.Document):
    name = db.StringField(max_length=20)
    data = db.FileField()


# Define my documents

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
    photo = db.ReferenceField(Photo, required=False)
    note = db.StringField(max_length=1000)

    def __unicode__(self):
        return self.note

class Product(db.Document):
    name = db.StringField(max_length=50, required=True)
    title = db.ListField(db.EmbeddedDocumentField(Title))
    photo = db.ListField(db.EmbeddedDocumentField(Product_photo))

