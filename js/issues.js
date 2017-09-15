var issues = {
    edit: function(id) {
        service.getIssue(id, function(result) {
            app.showTemplate('issueDetails', { issue: result.issue }, 'pageContent');
        });
    },
    startTime: function() {
        var d = new Date();
        var n = d.getTime();
        $('#start_time').val(n);
    },
    stopTime: function() {
        var d = new Date();
        var endTime = d.getTime();
        console.log($('#start_time').val());
        console.log(endTime);
        var startTime = parseInt($('#start_time').val());
        console.log(endTime - startTime);
    }
};
