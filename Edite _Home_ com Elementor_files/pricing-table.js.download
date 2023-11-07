(function ($) {
    "use strict";
    
    var getElementSettings = function( $element ) {
        var elementSettings = {},
            modelCID        = $element.data( 'model-cid' );

        if ( isEditMode && modelCID ) {
            var settings        = elementorFrontend.config.elements.data[ modelCID ],
                settingsKeys    = elementorFrontend.config.elements.keys[ settings.attributes.widgetType || settings.attributes.elType ];

            jQuery.each( settings.getActiveControls(), function( controlKey ) {
                if ( -1 !== settingsKeys.indexOf( controlKey ) ) {
                    elementSettings[ controlKey ] = settings.attributes[ controlKey ];
                }
            } );
        } else {
            elementSettings = $element.data('settings') || {};
        }

        return elementSettings;
    };

    var isEditMode       = false;

    var PricingTableHandler = function( $scope, $ ) {
        var id                   = $scope.data('id'),
            toolTopElm           = $scope.find('.meafe-pricing-table-tooptip[data-tooltip]'),
            elementSettings      = getElementSettings( $scope ),
            ttArrow              = elementSettings.tooltip_arrow,
            ttTrigger            = elementSettings.tooltip_trigger,
            elementorBreakpoints = elementorFrontend.config.breakpoints;

        toolTopElm.each(function () {
            var ttPosition   = $(this).data('tooltip-position'),
                ttTemplate   = '',
                ttSize       = $(this).data('tooltip-size'),
                animationIn  = '',
                animationOut = '';

            // tablet
            if ( window.innerWidth <= elementorBreakpoints.lg && window.innerWidth >= elementorBreakpoints.md ) {
                ttPosition = $scope.find('.meafe-pricing-table-tooptip[data-tooltip]').data('tooltip-position-tablet');
            }

            // mobile
            if ( window.innerWidth < elementorBreakpoints.md ) {
                ttPosition = $scope.find('.meafe-pricing-table-tooptip[data-tooltip]').data('tooltip-position-mobile');
            }
            
            if ( ttArrow === 'yes' ) {
                ttTemplate = '<div class="meafe-tooltip meafe-tooltip-' + id + ' meafe-tooltip-' + ttSize + '"><div class="meafe-tooltip-body"><div class="meafe-tooltip-content"></div><div class="meafe-tooltip-callout"></div></div></div>';
            } else {
                ttTemplate = '<div class="meafe-tooltip meafe-tooltip-' + id + ' meafe-tooltip-' + ttSize + '"><div class="meafe-tooltip-body"><div class="meafe-tooltip-content"></div></div></div>';
            }
            
            var tooltipConfig = {
                template:     ttTemplate,
                position:     ttPosition,
                animationIn:  '',
                animationOut: '',
                animDuration: 400,
                alwaysOpen:   false,
                toggleable:   (ttTrigger === 'click') ? true : false
            };
            
            $(this)._tooltip( tooltipConfig );
        });
    };
    

    $(window).on('elementor/frontend/init', function () {
        if ( elementorFrontend.isEditMode() ) {
            isEditMode = true;
        }
        elementorFrontend.hooks.addAction( 'frontend/element_ready/meafe-pricing-table.default', PricingTableHandler );
    });
    
}(jQuery));