(function($) {
    "use strict";
    
    // Portfolio Gallery
    $(window).on("load", function() {
        if ($('.isotope_items').length) {
            var $container = $('.isotope_items');
            $container.isotope();

            $('.portfolio-filter ul li').on("click", function() {
                $(".portfolio-filter ul li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $(".isotope_items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }

    }); // window load end 

    //Navbar Fixed
    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 80) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });

})(jQuery);