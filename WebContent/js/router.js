/**
 * 
 */
define([ 'jquery', 'underscore', 'backbone', 
         '../home/homeView',
         '../article/articleView',
         '../article/articleMainView',
         '../login/loginView'
       ],
    function($, _, Backbone, HomeView, ArticleView, ArticleMainView) {
        var Router = Backbone.Router.extend({
            routes: {
                '': 'homeView',
                'article/:type': 'articleView',
                'articleMain/:id': 'articleMainView'
            },
            
            homeView: function() {
                var homeView = new HomeView().render();
            },
            
            articleView: function(type) {
                var articleView = new ArticleView().render(type);
            },
            
            articleMainView: function(id) {
                var articleView = new ArticleMainView().render(id);
            }
        });
        return Router;
    }
)