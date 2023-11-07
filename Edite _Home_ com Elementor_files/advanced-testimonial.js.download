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
                "autoplay"       : "yes" === this.getElementSettings('adv_testimonial_swiper_auto') ? {
                    "delay"          : this.getElementSettings('adv_testimonial_autoplay_speed'),
                    "stopOnLastSlide": true,
                    "disableOnInteraction": false
                } : false,
                "loop"           : true,
                "speed"          : 500,
                "centeredSlides" : true,
                "grabCursor"     : false,
                "freeMode"       : false,
                "effect" 		 : '1' === this.getElementSettings('adv_testimonial_layouts') ? "coverflow" : "slide",
                "coverflowEffect": {
                    "rotate": 0,
                    "stretch": 0,
                    "depth": 10,
                    "modifier": 20,
                    "slideShadows": false,
                },
                "direction"      : "horizontal",
                "navigation" : "yes" === this.getElementSettings('adv_testimonial_show_swiper_nav') ? {
                    "nextEl" : '.adv-testimonial.meafa-navigation-next',
                    "prevEl" : '.adv-testimonial.meafa-navigation-prev'
                } : false,
                "watchSlidesProgress": true,
                "pagination" : "yes" === this.getElementSettings('adv_testimonial_show_swiper_dots') ? {
                    "el": '.adv-testimonial.meafa-swiper-pagination',
                    "clickable": true,
                } : false,
                "slidesPerGroup": 1,
                "slidesPerView": 1, //mobile
                "spaceBetween": 20,
                "breakpoints": {
                    // tablet
                    768: {
                        "slidesPerView": '1' === this.getElementSettings('adv_testimonial_layouts') ? 'auto' : 2,
                    },
                    // desktop
                    991: {
                        "slidesPerView":  '1' === this.getElementSettings('adv_testimonial_layouts') ? 'auto' : 3,
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

    elementorFrontend.hooks.addAction( 'frontend/element_ready/meafe-advanced-testimonial.default', addHandler );

} );