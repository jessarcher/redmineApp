var app = {
    showRootPage: function() {
        // service.loadConfig();
        if (service.url === '') {
            app.showTemplate('loginForm');
        } else {
            app.showHomePage();
        }
    },
    showTemplate: function(name) {
        $.get('build/templates/' + name + '.html', function(data) {
            $('#page').html(data);
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
        app.showTemplate('homePage');
    }
};
