/****** Countdown Handler ******/
var MEAFECountDownHandler = function ($scope, $) {
    var countDownElement = $scope.find(".meafe-countdown-main").each(function () {
        var countDownSettings = $(this).data("settings");
        var label = countDownSettings["label"],
            newLabel = label.split(",");
        if (countDownSettings["event"] === "onExpiry") {
            $(this).find(".meafe-countdown-init").pre_countdown({
                labels: newLabel,
                until: new Date(countDownSettings["until"]),
                format: countDownSettings["format"],
                padZeroes: true,
                timeSeparator: countDownSettings["separator"],
                onExpiry: function () {
                    $(this).html(countDownSettings["text"]);
                },
                serverSync: function () {
                    return new Date(countDownSettings["serverSync"]);
                }
            });
        } else if (countDownSettings["event"] === "expiryUrl") {
            $(this).find(".meafe-countdown-init").pre_countdown({
                labels: newLabel,
                until: new Date(countDownSettings["until"]),
                format: countDownSettings["format"],
                padZeroes: true,
                timeSeparator: countDownSettings["separator"],
                expiryUrl: countDownSettings["text"],
                serverSync: function () {
                    return new Date(countDownSettings["serverSync"]);
                }
            });
        } else if (countDownSettings["event"] === "None") {
            $(this).find(".meafe-countdown-init").pre_countdown({
                labels: newLabel,
                until: new Date(countDownSettings["until"]),
                format: countDownSettings["format"],
                padZeroes: true,
                timeSeparator: countDownSettings["separator"],
                serverSync: function () {
                    return new Date(countDownSettings["serverSync"]);
                }
            });
        }
        times = $(this).find(".meafe-countdown-init").pre_countdown("getTimes");

        function runTimer(el) {
            return el == 0;
        }
        if (times.every(runTimer)) {
            if (countDownSettings["event"] === "none") {
                $(this).find(".meafe-countdown-init").html(countDownSettings["text"]);
            }
            if (countDownSettings["event"] === "onExpiry") {
                $(this).find(".meafe-countdown-init").html(countDownSettings["text"]);
            }
            if (countDownSettings["event"] === "expiryUrl") {
                var editMode = $("body").find("#elementor").length;
                if (editMode > 0) {
                    $(this).find(".meafe-countdown-init").html(
                        "<h1>You can not redirect url from elementor Editor!!</h1>");
                } else {
                    window.location.href = countDownSettings["text"];
                }
            }
        }
    });
};


jQuery(window).on("elementor/frontend/init", function() {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/meafe-countdown.default",
        MEAFECountDownHandler
    );
});

   
