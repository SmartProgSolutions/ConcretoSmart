
jQuery( window ).on( 'elementor/frontend/init', () => {
    var TeamSliderBase = elementorModules.frontend.handlers.Base.extend({
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

        getResponsiveDetails: function() {
            var layout = this.getElementSettings('btcccs_team_member_layouts');
            var response_one = {
                768: {
                    slidesPerView: 2, //tablet
                },
                991: {
                    slidesPerView: 4, //desktop
                }
            }

            var response_two = {
                768: {
                    slidesPerView: 2, //tablet
                },
                991: {
                    slidesPerView: 3, //desktop
                }
            }

            return ( layout == '2' ? response_two : response_one );
        },
        
        getDefaultSettings: function getDefaultSettings() {
            return {
                "autoplay"       : "yes" === this.getElementSettings('btcccs_team_member_show_carousel_auto') ? {
                    "delay"          : this.getElementSettings('btcccs_team_member_carousel_autoplay_speed'),
                    "stopOnLastSlide": true,
                    "disableOnInteraction": false
                } : false,
                "loop"           : !! this.getElementSettings('btcccs_team_member_show_carousel_loop'),
                "speed"          : 500,
                "centeredSlides" : false,
                "grabCursor"     : false,
                "freeMode"       : false,
                "effect" 		 : "slide",
                "navigation" : "yes" === this.getElementSettings('btcccs_team_member_show_carousel_nav') ? {
                    "nextEl" : '.team.meafa-navigation-next',
                    "prevEl" : '.team.meafa-navigation-prev'
                } : false,
                "watchSlidesProgress": true,
                "pagination" : "yes" === this.getElementSettings('btcccs_team_member_show_carousel_dots') ? {
                    "el": '.team.meafa-swiper-pagination',
                    "clickable": true,
                } : false,
                "slidesPerGroup": 1,
                "slidesPerView": 1, //mobile
                "spaceBetween": 30,
                "breakpoints": this.getResponsiveDetails()
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
        elementorFrontend.elementsHandler.addHandler( TeamSliderBase, {
            $element,
        } );
    };

    elementorFrontend.hooks.addAction( 'frontend/element_ready/meafe-team-carousel.default', addHandler );
    
} );