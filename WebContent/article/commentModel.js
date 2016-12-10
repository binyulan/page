define([ 'jquery', 'underscore', 'backbone'],
    function($, _, Backbone) {
        var CommentModel = Backbone.Model.extend({
            urlRoot: "/service/article/comment",
            defaults: {
                id: undefined,
                comment: undefined,
                createDate: undefined
            }
        });
        return CommentModel;
    }
)