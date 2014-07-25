from flask import Blueprint, render_template, flash, request

from ivy_3dprint_site import cache
from ivy_3dprint_site.models import Product, Photo, File, Contact

main = Blueprint('main', __name__)


@main.route('/')
@cache.cached(timeout=1000)
def home():

    products = Product.objects(order__lte=3)[:3]

    return render_template('index.html', products=products)

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
    files = File.objects()

    return render_template('downloads.html', files=files)

@main.route('/sample')
def sample():
    return render_template('sample.html')

@main.route('/contact')
def contact():
    contact = Contact.objects()[0]
    return render_template('contact.html', contact=contact)

