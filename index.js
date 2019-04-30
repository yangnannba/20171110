$(document).ready(function () {




    var h = "oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend";
    var logobar = $('.js-loading-logo');
    logobar.addClass('is-complete');
    logobar.css({ transform: "scale(1, 1)" });
    logobar.on(h, function() {
        setTimeout(function() {
            logobar.css({ transform: "scale(0, 0)" });
        }, 300);//300
        $('#loadingShutter').on(h, function() {
            setTimeout(function() {
                $('#loadingShutter').addClass('is-show');

            }, 700);//700

        });
    });


	
	      var bannerSwiper = new Swiper('.swiper-banner', {
            loop : true,
            speed: 1000,
            autoplay : 5000,
            autoplayDisableOnInteraction : false,
            pagination: '.swiper-pagination',
            paginationClickable: '.swiper-pagination',
            spaceBetween: 0,
            effect: 'fade'
        });
	
	 

	var $wrap = $(".wrapper"),
pages = $(".page").length,
scrolling = false,
currentPage = 1,
$navPanel = $(".nav-panel"),
$scrollBtn = $(".scroll-btn"),
$navBtn = $(".nav-btn");

	/*****************************
	***** NAVIGATE FUNCTIONS *****
	*****************************/
	function manageClasses() {
		$wrap.removeClass(function (index, css) {
			return (css.match(/(^|\s)active-page\S+/g) || []).join(' ');
		});
		$wrap.addClass("active-page" + currentPage);
		$navBtn.removeClass("active");
		$(".nav-btn.nav-page" + currentPage).addClass("active");
		$navPanel.addClass("invisible");
		scrolling = true;
		setTimeout(function () {
			$navPanel.removeClass("invisible");
			scrolling = false;
		}, 500);
	}
	function navigateUp() {
		if (currentPage > 1) {
			currentPage--;
			if (Modernizr.csstransforms) {
				manageClasses();
			} else {
				$wrap.animate({ "top": "-" + ((currentPage - 1) * 500) + "%" }, 500);
			}
		}
	}

	function navigateDown() {
		if (currentPage < pages) {
			currentPage++;
			if (Modernizr.csstransforms) {
				manageClasses();
			} else {
				$wrap.animate({ "top": "-" + ((currentPage - 1) * 500) + "%" }, 500);
			}
		} else {
			$("#t").animate({ "top": "-" + ((currentPage - 1) * 500) + "%" }, 500);
			$("#b").animate({ "bottom": "+" +  "0" }, 500);		
		}
	}

	/*********************
	***** MOUSEWHEEL *****
	*********************/
	$(document).on("mousewheel DOMMouseScroll", function (e) {
		if (!scrolling) {
			if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
				navigateUp();
			} else {
				navigateDown();
			}
		}
	});

	/**************************
	***** RIGHT NAVIGATION ****
	**************************/

	/* NAV UP/DOWN BTN PAGE NAVIGATION */
	$(document).on("click", ".scroll-btn", function () {
		if ($(this).hasClass("up")) {
			navigateUp();
		} else {
			navigateDown();
		}
	});

	/* NAV CIRCLE DIRECT PAGE BTN */
	$(document).on("click", ".nav-btn", function () {
		if (!scrolling) {
			var target = $(this).attr("data-target");
			if (Modernizr.csstransforms) {
				$wrap.removeClass(function (index, css) {
					return (css.match(/(^|\s)active-page\S+/g) || []).join(' ');
				});
				$wrap.addClass("active-page" + target);
				$navBtn.removeClass("active");
				$(this).addClass("active");
				$navPanel.addClass("invisible");
				currentPage = target;
				scrolling = true;
				setTimeout(function () {
					$navPanel.removeClass("invisible");
					scrolling = false;
				}, 10);
			} else {
				$wrap.animate({ "top": "-" + ((target - 1) * 100) + "%" }, 10);
			}
		}
	});

}); 