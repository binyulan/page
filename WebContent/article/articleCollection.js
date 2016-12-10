define([ 'jquery', 'underscore', 'backbone', './articleModel'],
    function($, _, Backbone, ArticleModel) {
        var ArticleCollection = Backbone.Collection.extend({
            url: "/service/article/articleList",
            model: ArticleModel
        });
        return ArticleCollection;
    }
)