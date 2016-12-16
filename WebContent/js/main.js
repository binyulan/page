/**
 * requireJs config
 */
require.config({
    paths : {
        'backbone' : 'http://cdn.bootcss.com/backbone.js/1.3.3/backbone-min',
        'underscore' : 'http://cdn.bootcss.com/underscore.js/1.8.3/underscore-min',
        'jquery': 'http://cdn.bootcss.com/jquery/2.2.4/jquery',
        'handlebars' : 'http://cdn.bootcss.com/handlebars.js/4.0.5/handlebars.min',
        'bootstrap' : 'http://cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min',
        'text': 'http://cdn.bootcss.com/require-text/2.0.12/text.min',
        //'ztree': './jquery.ztree.all.min',
        'shCore': '../lib/syntaxhighlighter/scripts/shCore',
        'shBrushXml': '../lib/syntaxhighlighter/scripts/shBrushXml',
        'shBrushJava': '../lib/syntaxhighlighter/scripts/shBrushJava'
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
        },
        /*
        'ztree': {
            deps: ['jquery'],
            exports: 'ztree'
        },*/
        'shCore': {
            exports: 'shCore'
        },
        'shBrushXml': {
            deps: ['shCore'],
            exports: 'shBrushXml'
        },
        'shBrushJava': {
            deps: ['shCore'],
            exports: 'shBrushJava'
        }
    }
});

require(['router'], function(Router){
    var router = new Router();
    window.router = router;
    Backbone.history.start();
    $('#myModal').modal();
    $('.progress-bar').css("width", "100%");
    $(".nav li[data-id]").bind("click", function(){
        $(".navbar-nav li").removeClass("active");
        $(this).addClass("active");
    });
})