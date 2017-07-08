var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.styles([
        "clndr.css",
        "custom.css",
        "font-awesome.css",
        "jqvmap.css",
        "lines.css",
        "style.css"],'public/css/all.css');

    mix.scripts([
        'app.js',
        'eveneListner/event.js'
    ], 'public/js/app.js');

    mix.scripts([
        'controllers/userController.js',
        'controllers/globalController.js',
        'controllers/navController.js',
        'controllers/pageController.js',
    ], 'public/js/controllers.js');

    mix.scripts([
        'models/userModel.js',
    ], 'public/js/models.js');

    mix.version([
        'js/app.js',
        'js/models.js',
        'js/controllers.js'
    ]);
});
