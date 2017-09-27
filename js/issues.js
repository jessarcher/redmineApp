var issues = {
    timer : null,
    startTime: null,
    edit: function(id) {
        service.getIssue(id, function(result) {
            app.showTemplate('issueDetails', { issue: result.issue }, function(result) {
                $('#pageContent').html(result);
            });
        });
    },
    startTime: function() {
        var d = new Date();
        issues.startTime = '00:' + (d.getHours() + 1);
        issues.startTime += ':' + d.getMinutes();
        issues.timer = Timr(issues.startTime, { formatOutput: 'hh:mm:ss', 'countdown' : false });
        issues.timer.ticker(({ formattedTime, percentDone }) => {
            var startTime = Timr.timeToSeconds(issues.startTime);
            var endTime = Timr.timeToSeconds(formattedTime);
            var diff = endTime - startTime;
            $('#timer').html('' + Timr.formatTime(diff, 'hh:mm:ss').formattedTime);
        });
        issues.timer.start();
    },
    stopTime: function() {
        var d = new Date();
        var endTime = d.getTime();
        var startTime = parseInt($('#start_time').val());
    }
};
