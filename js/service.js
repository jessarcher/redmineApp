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
    getCurrentUser: function(callback, params) {
        if (typeof params === 'undefined') {
            params = '';
        } else {
            params = '&' + params;
        }

        $.get(
            service.url + '/users/current.json?key=' + service.key + params,
            callback
        );
    },
    getProjects: function(offset, callback) {
        $.get(
            service.url + '/projects.json?key=' + service.key+'&offset=' + offset + '&limit=50',
            callback
        );
    },
    getProjectIssues: function(projectId, callback) {
        $.get(
            service.url + '/issues.json?key=' + service.key + '&project_id=' + projectId,
            callback
        );
    },
    getMemberships: function(id, callback) {
        $.get(
            service.url + '/projects/'+ id + '/memberships.json?key=' + service.key + '&limit=100',
            callback
        );
    },
    getIssue: function(id, callback) {
        $.get(
            service.url + '/issues/' + id + '.json?key=' + service.key,
            callback
        );
    }
};
