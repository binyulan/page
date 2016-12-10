define(['bootstrap', 'jquery', 'underscore', 'backbone',
        'text!./articleView.html',
        './articleModel',
        './articleCollection',
        'handlebars'],
    function(bootstrap, $, _, Backbone,
            ArticleViewTemplate,
            ArticleModel,
            ArticleCollection,
            Handlebars) {
        var ArticleView = Backbone.View.extend({
            el: '#presentation',
            events: {
                "click #submit": "submit"
            },
            template: Handlebars.compile(ArticleViewTemplate),  
            render: function(type) {
                this.$el.empty();
                var articleCollection = new ArticleCollection();
                articleCollection.url = articleCollection.url + "/" + type
                articleCollection.fetch({success: _.bind(function(articles){
                    this.$el.append(this.template(articles.toJSON()));
                    $(".list-group-item").bind("click", function(){
                        _.each(articles.toJSON(), _.bind(function(article){
                            if (article.id == $(this).data("id")) {
                                $("#id").val(article.id);
                                $("#title").val(article.title);
                                $("#text").val(article.text);
                            }
                        }, this))
                    });
                    $('#myModal').modal("hide");
                }, this)});
                return this;
            },
            
            submit: function() {
                var articleModel = new ArticleModel();
                if($("#id").val() !== "") {
                    articleModel.set("id", $("#id").val());
                }
                articleModel.set("title", $("#title").val());
                articleModel.set("text", $("#text").val());
                articleModel.set("articleType", $("#articleType").val());
                articleModel.save();
            }
        });
        return ArticleView;
    }
)