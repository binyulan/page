/**
 * 
 */
define([ 'jquery', 'underscore', 'backbone', 'handlebars'],
    function($, _, Backbone, Handlebars) {
        var BaseView = Backbone.View.extend({
            handlebars: Handlebars,
            save: function() {
                var model = new LoginModel();
                model.set("username", $("#username").val());
                model.set("password", $("#password").val());
                model.save();
            }        });
        return BaseView;
    }
)