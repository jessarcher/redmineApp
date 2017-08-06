var service = {
    url: '',
    key: '',
    loadConfig: function() {
        if (service.url === '') {
            service.url = localStorage.url;
            service.key = localStorage.key;
        }
    },
    setConfig: function(url, key) {
        localStorage.url = url;
        localStorage.key = key;
    },
    getCurrentUser: function() {
        $.get(
            service.url + '/users/current.json?key=' + service.key,
            function(data) {
                console.log(data);
            }
        );
    }
};
