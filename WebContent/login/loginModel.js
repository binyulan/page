/**
 * 
 */
define([ 'jquery', 'underscore', 'backbone'],
    function($, _, Backbone) {
        var LoginModel = Backbone.Model.extend({
            url: "/service/login",
            defaults: {
                username: undefined,
                password: undefined,
            }
        });
        return LoginModel;
    }
)