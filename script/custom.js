(function ($) {

    // Instantiate MixItUp:
    $('#Container').mixItUp();

    $(window).scroll(function (e) {

        var distanceScrolled = $(this).scrollTop();
        $('#blur-scroll').css('-webkit-filter', 'blur(' + distanceScrolled / 90 + 'px)');

    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    // Back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 800);
        });

        // Customers
        $(function () {
            $('.jcarousel')
                .jcarousel({
                    // Core configuration goes here
                })
                .jcarouselAutoscroll({
                    interval: 4000,
                    target: '+=1',
                    autostart: true
                })
                ;
        });

    }
    // Nav.
    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $(".page-scroll").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	});
     
      //Poput portafolio
   $('.item-wrap a').magnificPopup({
       type:'inline',
       fixedContentPos: false,
       removalDelay: 300,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


    'use strict';

console.clear();

var app = function () {
	var body = undefined;
	var menu = undefined;
	var menuItems = undefined;

	var init = function init() {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	};

	var applyListeners = function applyListeners() {
		menu.addEventListener('click', function () {
			return toggleClass(body, 'nav-active');
		});
	};

	var toggleClass = function toggleClass(element, stringClass) {
		if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
	};

	init();
}();

})(jQuery);


