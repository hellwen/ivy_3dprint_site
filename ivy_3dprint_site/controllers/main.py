from flask import Blueprint, render_template, flash, request

from ivy_3dprint_site import cache
from ivy_3dprint_site.models import Product, Photo
from ivy_3dprint_site.forms import MyForm

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

