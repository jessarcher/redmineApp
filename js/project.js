var project = {
    show: function(id) {
        service.getProjectIssues(id, function(issueList) {
            app.showTemplate('projectIssueList', { issueList: issueList}, 'pageContent');
        });
    }
};
