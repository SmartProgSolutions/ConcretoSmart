jQuery( window ).on( 'elementor/frontend/init', () => {
    var SliderBase = elementorModules.frontend.handlers.Base.extend({
        onInit: function () {
            elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
            this.initSwiper();
        },
        getDefaultElements: function () {
            return {
                $container: this.findElement('.swiper-container')
            };
        },
        getDefaultSettings: function() {
            return {
                "autoplay"       : false,
                "loop"           : false,
                "speed"          : 500,
                "centeredSlides" : false,
                "grabCursor"     : false,
                "freeMode"       : false,
                "effect" 		 : "slide",
                "navigation" : "yes" === this.getElementSettings('btcsis_timeline_swiper_nav') ? {
                    "nextEl" : '.timeline.meafa-navigation-next',
                    "prevEl" : '.timeline.meafa-navigation-prev',
                } : false,
                "watchSlidesProgress": true,
                "pagination" : "yes" === this.getElementSettings('btcsis_timeline_swiper_dots') ? {
                    "el": '.timeline.meafa-swiper-pagination',
                    "clickable": true,
                } : false,
                "slidesPerGroup": 1,
                "slidesPerView": this.getElementSettings('btcsis_timeline_per_line_mobile') , //mobile
                "spaceBetween": 30,
                "breakpoints": {
                    // tablet
                    767: {
                        "slidesPerView": this.getElementSettings('btcsis_timeline_per_line_tablet') 
                    },
                    // desktop
                    1023: {
                        "slidesPerView": this.getElementSettings('btcsis_timeline_per_line') 
                    },
                }
            };
        },

        onElementChange: function() {
            this.initSwiper();
        },

        initSwiper: function initSwiper() {
            if( this.getElementSettings("btccgs_timeline_layouts") == "2"){
                var widgetID        = document.getElementById(this.getID());
                var sliderContainer = widgetID.querySelector(".swiper-container");
                if(!!sliderContainer.swiper) sliderContainer.swiper.destroy();

                if ( 'undefined' === typeof Swiper ) {
                    const asyncSwiper = elementorFrontend.utils.swiper;
                    new asyncSwiper( sliderContainer, this.getDefaultSettings()).then( ( newSwiperInstance ) => {
                        mySwiper = newSwiperInstance;
                    } );
                } else {
                    mySwiper = new Swiper( sliderContainer, this.getDefaultSettings() );
                }
            }
        }
    });

    const addHandler = ( $element ) => {
        elementorFrontend.elementsHandler.addHandler( SliderBase, {
            $element,
        } );
    };

    elementorFrontend.hooks.addAction( 'frontend/element_ready/meafe-timeline.default', addHandler );
} );