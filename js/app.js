var app = {
    showRootPage: function() {
        service.loadConfig();
        if (service.url === '') {
            app.showTemplate('loginForm');
        } else {
            app.showHomePage();
        }
    },
    showTemplate: function(name, options) {
        $.get('build/templates/' + name + '.html', function(source) {
            if (typeof options !== 'undefined') {
                var template = Handlebars.compile(source);
                source = template(options);
            }
            $('#page').html(source);
        });
    },
    login: function() {
        service.setConfig(
            $('#url').val(),
            $('#key').val()
        );
        app.showHomePage();
    },
    showHomePage: function() {
        service.getCurrentUser(function(data) {
            app.showTemplate('homePage', { currentUser: data.user });
        });
    }
};
