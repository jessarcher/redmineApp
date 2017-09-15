var project = {
    show: function(id) {
        service.getProjectIssues(id, function(issueList) {
            app.showTemplate('projectIssueList', { issueList: issueList}, 'pageContent');
        });
    },
    nextList: function(count, limit, offset) {
        if (count > (offset + limit)) {
            offset += limit;
            project.list(offset);
        }
    },
    list: function(offset) {
        service.getProjects(offset, function(projectList) {
            app.showTemplate('projectList', { projectList: projectList }, 'pageContent');
        });
    },
    listFavourites: function(favourites) {
        if (typeof favourites === 'undefined') {
            favourites = {};
        }

        service.getCurrentUser(
            function(currentUser) {
                app.showTemplate('myProjectList', { memberships:  currentUser.user.memberships}, 'pageContent');
            },
            'include=memberships'
        );
    }
};
