from flask import Blueprint, render_template

from ivy_3dprint_site import cache
from ivy_3dprint_site.models import Product, File, Sample, \
        Contact, About, Photo

main = Blueprint('main', __name__)


@main.route('/')
@cache.cached(timeout=1000)
def home():

    products = Product.objects(order__lte=3)[:3]
    banners = Photo.objects(name__startswith='banner-')[:3].order_by("+name")

    return render_template('index.html', products=products, \
            banners=banners)

@main.route('/products')
def products():
    products = Product.objects()

    return render_template('products.html', products=products)

@main.route('/product/<string:iden>')
def product(iden):

    product = Product.objects(iden=iden)[0]

    return render_template('product.html', product=product)

@main.route('/downloads')
def downloads():
    files = File.objects().order_by("+order")

    return render_template('downloads.html', files=files)

@main.route('/sample')
def sample():
    sample = Sample.objects()[0]
    return render_template('sample.html', sample=sample)

@main.route('/contact')
def contact():
    contact = Contact.objects()[0]
    return render_template('contact.html', contact=contact)

@main.route('/about')
def about():
    about = About.objects()[0]
    return render_template('about.html', about=about)

