var service = {
    url: '',
    key: '',
    loadConfig: function() {
        if (service.url === '' && typeof localStorage.url !== 'undefined') {
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
    },
    getProjects: function(callback) {
        $.get(
            service.url + '/projects.json?key=' + service.key,
            callback
        );
    },
    getProjectIssues: function(projectId, callback) {
        $.get(
            service.url + '/issues.json?key=' + service.key + '&project_id=' + projectId,
            callback
        );
    }
};
