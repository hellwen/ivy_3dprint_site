from flask import Blueprint, render_template, flash, request

from ivy_3dprint_site import cache
from ivy_3dprint_site.models import Product, Photo
from ivy_3dprint_site.forms import MyForm

main = Blueprint('main', __name__)


@main.route('/')
@cache.cached(timeout=1000)
def home():

    #products = Product.objects(order__lte=3)
    products = Product.objects()

    return render_template('index.html', products=products)

@main.route('/products')
def products():
    products = Product.objects()

    return render_template('products.html', products=products)

@main.route('/product/<string:iden>')
def product(iden):

    product = Product.objects()[0]

    return render_template('product.html', product=product)

@main.route('/wtform', methods=['GET', 'POST'])
def wtform():
    form = MyForm()

    if request.method == 'GET':
        return render_template('wtform_example.html', form=form)
    elif request.method == 'POST':
        if form.validate_on_submit():
            flash("The form was successfully submitted", 'success')
        else:
            flash("There was a problem submitting the form!", 'danger')
        return render_template('wtform_example.html', form=form)
