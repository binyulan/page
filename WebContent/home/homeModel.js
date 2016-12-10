/**
 * 
 */
define([ 'jquery', 'underscore', 'backbone'],
    function($, _, Backbone) {
        var HomeModel = Backbone.Model.extend({
            defaults: {
                name: "default",
                age: "",
                sex: ""
            }
        });
        return HomeModel;
    }
)