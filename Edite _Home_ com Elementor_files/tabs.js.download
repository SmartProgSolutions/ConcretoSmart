;(function ($) {
    'use strict';

    var $window = $(window)

    $window.on('elementor/frontend/init', function() {
        var TabsBase = function($scope) {
            var rowTR = $scope.find('.meafe--tabs--wrapper');

            rowTR.each(function() {
                let _self = this;
                var tabBtns = _self.querySelectorAll('.tab-button');
                var tabContents = _self.querySelectorAll('.nacc--wrapper');
                tabBtns.forEach((btn, index) => {
                    $(btn).on('click', function() {
                        tabContents.forEach(function(tc, i) {
                            if (i != index) {
                                jQuery(tc).fadeOut(200)
                                tc.classList.remove('active')
                            } else {
                                jQuery(tc).fadeIn(200)
                                tc.classList.add('active')
                            }
                        })
                        tabBtns.forEach(function(tc, i) {
                            if (i != index) {
                                tc.classList.remove('active')
                            } else {
                                tc.classList.add('active')
                            }
                        });
                    });
                });

            });

        };

        elementorFrontend.hooks.addAction( 'frontend/element_ready/meafe-tabs.default', TabsBase );
    });
}(jQuery));