/**
 * 
 */
define([ 'jquery', 'underscore', 'backbone',
         'text!../article/articleMain.html',
         '../article/articleModel',
         '../article/commentModel',
         'handlebars',
         'text!../article/comment.html',
         'shCore',
         'shBrushXml',
         'shBrushJava'],
    function($, _, Backbone,
            ArticleMainTemplate,
            ArticleModel,
            CommentModel,
            Handlebars,
            CommentTemplate) {
        var ArticleMainView = Backbone.View.extend({
            commentTemplate: Handlebars.compile(CommentTemplate),
            articleMainTemplate: Handlebars.compile(ArticleMainTemplate),
            events: {
                "click #saveComment": "saveComment"
            },
            
            render: function(id){
                var article = new ArticleModel();
                article.set("id", id);
                article.fetch({success: _.bind(function(model){
                    this.$el.append(this.articleMainTemplate(model.toJSON()));
                    SyntaxHighlighter.highlight();
                }, this)});
                return this;
            },
            
            saveComment: function() {
                var commentModel = new CommentModel();
                commentModel.set("articleId", $("#articleId").val());
                commentModel.set("comment", $("#comment").val());
                commentModel.save(null, {success:
                    _.bind(function(model) {
                            $("#comments").append(this.commentTemplate(model.toJSON()));
                            $("#comment").val("");
                    },this)
                });
            }
        });
        return ArticleMainView;
    }
)