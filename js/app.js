var app = {
    showRootPage: function() {
        service.loadConfig();
        if (service.url === '') {
            app.showTemplate('loginForm');
        } else {
            app.showHomePage();
        }
    },
    showTemplate: function(name, options, callback) {
        $.get('build/templates/' + name + '.html', function(source) {
            if (typeof options !== 'undefined') {
                var template = Handlebars.compile(source);
                source = template(options);
            }

            if (typeof callback === 'function') {
                callback(source);
            } else if (typeof callback !== 'undefined') {
                $('#' + callback).html(source);
            } else {
                $('#page').html(source);
            }
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
            app.showTemplate('homePage', { currentUser: data.user }, function(source) {
                $('#page').html(source);
                service.getProjects(function(projectList) {
                    app.showTemplate('projectList', { projectList: projectList }, 'projects');
                });
            });
        });
    }
};
