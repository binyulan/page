/**
 * 
 */
define(['../js/baseView', 'text!./loginView.html', './loginModel'],
    function(BaseView, LoginViewTemplate, LoginModel) {
        var LoginView = BaseView.extend({
            el: '#presentation',
            
            events: {
                "click #login": "login",
            },
            
            render: function() {
                this.$el.empty();
                this.$el.append( this.handlebars.compile(LoginViewTemplate));
                return this;
            },
            
            login: function() {
                var model = new LoginModel();
                model.set("username", $("#username").val());
                model.set("password", $("#password").val());
                model.save();
            }
        });
        return LoginView;
    }
)