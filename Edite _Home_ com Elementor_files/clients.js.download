
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

        onElementChange: function() {
            this.initSwiper();
        },
        getDefaultSettings: function() {
            return {
                "autoplay"       : "yes" === this.getElementSettings('bccgs_clients_show_carousel_auto') ? {
                    "delay"          : this.getElementSettings('bccgs_clients_carousel_autoplay_speed'),
                    "stopOnLastSlide": true,
                    "disableOnInteraction": false
                } : false,
                "loop"           : !! this.getElementSettings('bccgs_clients_show_carousel_loop'),
                "speed"          : 500,
                "centeredSlides" : false,
                "grabCursor"     : false,
                "freeMode"       : false,
                "effect" 		 : "slide",
                "navigation" : "yes" === this.getElementSettings('bccgs_clients_show_carousel_nav') ? {
                    "nextEl" : '.clients.meafa-navigation-next',
                    "prevEl" : '.clients.meafa-navigation-prev'
                } : false,
                "watchSlidesProgress": true,
                "pagination" : "yes" === this.getElementSettings('bccgs_clients_show_carousel_dots') ? {
                    "el": '.clients.meafa-swiper-pagination',
                    "clickable": true,
                } : false,
                "slidesPerGroup": 1,
                "slidesPerView": this.getElementSettings('bccgs_clients_per_line_mobile'), //mobile
                "spaceBetween": 30,
                "breakpoints": {
                    // tablet
                    767: {
                        "slidesPerView": this.getElementSettings("bccgs_clients_per_line_tablet")
                    },
                    // desktop
                    1023: {
                        "slidesPerView": this.getElementSettings("bccgs_clients_per_line")
                    },
                }
            };
        },
        initSwiper: function initSwiper() {
            if( this.getElementSettings("bccgs_clients_show_carousel") == "yes"){
                var widgetID        = document.getElementById(this.getID());
                var sliderContainer = widgetID.querySelector(".swiper-container");

                if(this.getElementSettings('bccgs_clients_show_carousel_dots') === "yes") {
                    jQuery('.meafe-clients').addClass('swiper-dots-enabled');
                } else {
                    jQuery('.meafe-clients').removeClass('swiper-dots-enabled');
                }

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

    elementorFrontend.hooks.addAction( 'frontend/element_ready/meafe-clients.default', addHandler );
    
} );