/****** Counter Handler ******/
var MEAFECounterHandler = function ($scope, $) {
    var counterElement = $scope.find(".meafe-counter");
    elementorFrontend.waypoint(counterElement, function () {
        var counterSettings = counterElement.data(),
            incrementElement = counterElement.find(".meafe-counter-init"),
            iconElement = counterElement.find(".icon");
        $(incrementElement).numerator(counterSettings);
        $(iconElement).addClass("animated " + iconElement.data("animation"));
    });
};
jQuery(window).on("elementor/frontend/init", function() {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/meafe-counter.default",
        MEAFECounterHandler
    );
});
