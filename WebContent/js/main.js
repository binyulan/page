/**
 * requireJs config
 */
require.config({
    paths : {
        'backbone' : 'http://cdn.bootcss.com/backbone.js/1.3.3/backbone-min',
        'underscore' : 'http://cdn.bootcss.com/underscore.js/1.8.3/underscore-min',
        'jquery': 'http://cdn.bootcss.com/jquery/2.2.4/jquery',
        'handlebars' : 'http://cdn.bootcss.com/handlebars.js/4.0.5/handlebars.min',
        'bootstrap' : 'http://cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min'
    },
    shim: {
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },
        'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'backbone'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'handlebars': {
            exports: 'handlebars'
        }
    }
});

require(['jquery'], function(jquery){alert(jquery)})