/**
 * 
 */
define([ 'jquery', 'underscore', 'backbone',
         '../js/router',
         'text!./homeView.html',
         'text!../article/articleMain.html',
         '../article/articleCollection',
         '../article/articleModel',
         '../article/commentModel',
         'handlebars',
         'text!../article/comment.html',
         'shCore',
         'shBrushXml',
         'shBrushJava'],
    function($, _, Backbone,
            router,
            HomeViewTemplate,
            ArticleMainTemplate,
            ArticleCollection,
            ArticleModel,
            CommentModel,
            Handlebars,
            CommentTemplate) {
        var HomeView = Backbone.View.extend({
            template: Handlebars.compile(HomeViewTemplate),
            commentTemplate: Handlebars.compile(CommentTemplate),
            articleMainTemplate: Handlebars.compile(ArticleMainTemplate),
            events: {
                "click a[data-id]": "getArticle",
                "click #saveComment": "saveComment"
                
            },
            
            render: function(){
                var articleCollection = new ArticleCollection();
                articleCollection.url = articleCollection.url + "/JAVA"
                articleCollection.fetch({success: _.bind(function(articles){
                    this.$el.append(this.template(articles.toJSON()));
                    $('#myModal').modal('hide');
                }, this)});
                $(".nav li[data-id]").bind("click", _.bind(this.getArticles, this));
                $(".nav li[data-id]").bind("click", function(){
                    $(".navbar-nav li").removeClass("active");
                    $(this).addClass("active");
                });
                $("#searchArticle").bind("click", function(){
                    if ($("#searchText").val()) {
                        $(".list-group-item").hide();
                        $(".list-group-item").filter(function(){
                            return $(this).html().indexOf($("#searchText").val()) > -1;
                        }).show();
                    }
                })
                return this;
            },
            
            getArticle: function(event){
                $('#myModal').modal();
                window.router.navigate('articleMain/' + $(event.target).data("id"), {trigger: true});
            },
            
            getArticles: function(event){
                $('#myModal').modal();
                this.$el.empty();
                var articleCollection = new ArticleCollection();
                var type = $(event.currentTarget).data("id");
                articleCollection.url = articleCollection.url + "/" + type
                articleCollection.fetch({success: _.bind(function(articles){
                    this.$el.append(this.template(articles.toJSON()));
                    $('#myModal').modal("hide");
                }, this)});
            }
        });
        return HomeView;
    }
)