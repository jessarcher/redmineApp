var service = {
    url: '',
    key: '',
    loadConfig: function() {
        if (service.url === '') {
            service.url = localStorage.url;
            service.key = localStorage.apiKey;
        }
    },
    setConfig: function(url, key) {
        localStorage.url = url;
        localStorage.apiKey = key;
        service.loadConfig();
    },
    getCurrentUser: function(callback) {
        $.get(
            service.url + '/users/current.json?key=' + service.key,
            callback
        );
    }
};
