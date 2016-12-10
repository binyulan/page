define([ 'jquery', 'underscore', 'backbone'],
    function($, _, Backbone) {
        var ArticleModel = Backbone.Model.extend({
            urlRoot: "/service/article",
            defaults: {
                id: undefined,
                title: undefined,
                text: undefined,
                articleType: undefined
            }
        });
        return ArticleModel;
    }
)