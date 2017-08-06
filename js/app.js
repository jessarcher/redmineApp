var app = {
    showRootPage: function() {
        if (service.url === '') {
            app.showTemplate('loginForm');
        }
    },
    showTemplate: function(name) {
        $.get('build/templates/' + name + '.html', function(data) {
            $('#page').html();
        });
    }
}
