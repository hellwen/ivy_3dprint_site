from flask_assets import Bundle

common_css = Bundle(
    # bootstrap
    Bundle('css/vendor/bootstrap.css',
        'css/vendor/bootstrap-theme.css'),
    'css/vendor/typelate.css',
    'css/vendor/helper.css',
    'css/main.css',
    filters='cssmin',
    output='public/css/common.css'
)

common_js = Bundle(
    'js/vendor/jquery.min.js',
    'js/vendor/modernizr.min.js',
    'js/vendor/bootstrap.js',
    'js/vendor/holder.min.js',
    'js/main.js',
    filters='jsmin',
    output='public/js/common.js'
)
