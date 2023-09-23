jQuery( window ).on( 'elementor/frontend/init', () => {
    var TCSliderBase = elementorModules.frontend.handlers.Base.extend({
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

        getDefaultSettings: function getDefaultSettings() {
            return {
                "autoplay"       : "yes" === this.getElementSettings('btccgs_testimonial_carousel_show_carousel_auto') ? {
                    "delay"          : this.getElementSettings('btccgs_testimonial_carousel_carousel_autoplay_speed'),
                    "stopOnLastSlide": true,
                    "disableOnInteraction": false
                } : false,
                "loop"           : !! this.getElementSettings('btccgs_testimonial_carousel_show_carousel_loop'),
                "speed"          : 500,
                "centeredSlides" : false,
                "grabCursor"     : false,
                "freeMode"       : false,
                "effect" 		 : "slide",
                "navigation" : "yes" === this.getElementSettings('btccgs_testimonial_carousel_show_carousel_nav') ? {
                    "nextEl" : '.testimonial.meafa-navigation-next',
                    "prevEl" : '.testimonial.meafa-navigation-prev'
                } : false,
                "watchSlidesProgress": true,
                "pagination" : "yes" === this.getElementSettings('btccgs_testimonial_carousel_show_carousel_dots') ? {
                    "el": '.testimonial.meafa-swiper-pagination',
                    "clickable": true,
                } : false,
                "slidesPerGroup": 1,
                "slidesPerView": 1, //mobile
                "spaceBetween": 30,
                "breakpoints": {
                    // tablet
                    768: {
                        "slidesPerView": '4' == this.getElementSettings("btccgs_testimonial_carousel_layouts") ? 2 : 1
                    },
                    // desktop
                    991: {
                        "slidesPerView": '4' == this.getElementSettings("btccgs_testimonial_carousel_layouts") ? 3 : 1
                    },
                }
            };
        },
        initSwiper: function initSwiper() {
            var widgetID        = document.getElementById(this.getID());
            var sliderContainer = widgetID.querySelector(".swiper-container");
            if(!!sliderContainer.swiper) sliderContainer.swiper.destroy();

            if ( 'undefined' === typeof Swiper ) {
                const asyncSwiper = elementorFrontend.utils.swiper;
                new asyncSwiper( sliderContainer, this.getDefaultSettings() ).then( ( newSwiperInstance ) => {
                    mySwiper = newSwiperInstance;
                } );
            } else {
                mySwiper = new Swiper( sliderContainer, this.getDefaultSettings() );
            }
        }
    });

    const addHandler = ( $element ) => {
        elementorFrontend.elementsHandler.addHandler( TCSliderBase, {
            $element,
        } );
    };

    elementorFrontend.hooks.addAction( 'frontend/element_ready/meafe-testimonial-carousel.default', addHandler );

} );