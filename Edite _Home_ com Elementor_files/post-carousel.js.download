
jQuery( window ).on( 'elementor/frontend/init', () => {
    var PCSliderBase = elementorModules.frontend.handlers.Base.extend({
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
            console.log(typeof this.getElementSettings('PC_spacing_tablet.size'));      
            console.log(typeof this.getElementSettings('PC_spacing_tablet').size);
            return {
                "autoplay"       :false,
                "loop"           : !! this.getElementSettings('PC_enable_carousel_loop'),
                "speed"          : 500,
                "centeredSlides" : false,
                "grabCursor"     : false,
                "freeMode"       : false,
                "effect" 		 : "slide",
                "navigation" : "yes" === this.getElementSettings('PC_swiper_nav') ? {
                    "nextEl" : '.post-carousel.meafe-navigation-next',
                    "prevEl" : '.post-carousel.meafe-navigation-prev'
                } : false,
                "watchSlidesProgress": true,
                "pagination" : "yes" === this.getElementSettings('PC_swiper_dots') ? {
                    "el": '.post-carousel.meafe-swiper-pagination',
                    "clickable": true,
                } : false,
                "slidesPerGroup": 1,
                "slidesPerView": this.getElementSettings('PC_per_line_mobile'), //mobile
                "spaceBetween": this.getElementSettings('PC_spacing_mobile').size,
                "breakpoints": {
                    // tablet
                    768: {
                        "slidesPerView": this.getElementSettings('PC_per_line_tablet'),
                        "spaceBetween": this.getElementSettings('PC_spacing_tablet').size,
                    },
                    // desktop
                    991: {
                        "slidesPerView": this.getElementSettings('PC_per_line'),
                        "spaceBetween": this.getElementSettings('PC_spacing').size,
                    },
                }
            };
        },


        initSwiper: function initSwiper() {
            var widgetID        = document.getElementById('meafe-post-grid-' +this.getID());
            var sliderContainer = widgetID.querySelector(".swiper-container");
            if(!!sliderContainer.swiper) sliderContainer.swiper.destroy();

            if(this.getElementSettings('PC_swiper_dots') === "yes") {
                jQuery('.meafe-post-carousel').addClass('swiper-dots-enabled');
            } else {
                jQuery('.meafe-post-carousel').removeClass('swiper-dots-enabled');
            }

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
        elementorFrontend.elementsHandler.addHandler( PCSliderBase, {
            $element,
        } );
    };

    elementorFrontend.hooks.addAction( 'frontend/element_ready/meafe-post-carousel.default', addHandler );

} );