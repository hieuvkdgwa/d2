(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var rellax = new Rellax('.rellax');

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	

	var tinyslier = function() {

		

		var el = document.querySelectorAll('.wide-slider-testimonial');
		if ( el.length > 0 ) {
			var slider = tns({
				container: ".wide-slider-testimonial",
				items: 1,
				slideBy: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				nav: true,
				loop: true,
				edgePadding: 40,
				controls: true,
				controlsPosition: "bottom",
				autoHeight: true,
				autoplay: true,
				mouseDrag: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
				controlsContainer: "#prevnext-testimonial",
				responsive: {
					350: {
						items: 1
					},
					
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			});
		}


		var destinationSlider = document.querySelectorAll('.destination-slider');

		if ( destinationSlider.length > 0 ) {
			var desSlider = tns({
				container: ".destination-slider",
				mouseDrag: true,
				items: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				edgePadding: 50,
				nav: false,
				gutter: 30,
				autoplay: true,
				lazyload: true,
				autoplayButtonOutput: false,
				responsive: {
					350: {
						items: 1
					},
					
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 4
					}
				},
			})
		}



	}
	tinyslier();


	var lightbox = function() {
		var lightboxVideo = GLightbox({
			selector: '.glightbox3'
		});
	};
	lightbox();

	//menu click
	const sections = document.querySelectorAll("section[id]");
	window.addEventListener("click", navHighlighter);
  
	function navHighlighter() {
	  
	  let scrollY = window.pageYOffset;
	  
	  sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		// sectionId = current.getAttribute("id");
		
		if (
		  scrollY > sectionTop &&
		  scrollY <= sectionTop + sectionHeight
		){
		  document.querySelector(".side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item").addClass('active');
		} else {
		  document.querySelector(".side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item.active").removeClass('active');
		}
	  });
	}
  
	//menu scroll
	$(window).scroll(function() {
		  var scrollDistance = $(window).scrollTop() + 250;
		  $('.component-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
				$('.side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item.active').removeClass('active');
				$('.side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item').eq(i).addClass('active');
			}
		  });
  }).scroll();

  $('.slider').slick({
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
    arrows: true,
    dots: true,
  }).slickAnimation();

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
    panel.querySelector(".panel-detail-btn").classList.remove("d-none");
	panel.querySelector(".panel-description").classList.remove("d-none");
	panel.querySelector(".panel-description-text").classList.remove("d-none");
  });
  });

  function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
    panel.querySelector(".panel-detail-btn").classList.add("d-none");
	panel.querySelector(".panel-description").classList.add("d-none");
	panel.querySelector(".panel-description-text").classList.add("d-none");
  });
  }

  //language
$('.language-desktop').slick({
	dots: false,
	arrows: false,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 6000,
  });
$('.language-mobile').slick({
	dots: false,
	arrows: false,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 6000,
});
  
var $slickElement = $('.slick-carousel');
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

	if(!slick.$dots){
	return;
	}
});
  
$slickElement.slick({
	infinite: true,
	centerMode: false,
	slidesToShow: 3,
	arrows: true, 
	dots: true,
	autoplaySpeed: 1000,
	autoplay: true,
	pauseOnHover: true,
	pauseOnFocus: true,
	pauseOnDotsHover: true,
});

})();