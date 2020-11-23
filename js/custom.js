/*
 Template Name: Peter Morgan Responsive Portfolio Template
 Template URI: http://bashir-rased.com/portfolio/Demo-1
 Author: Bashir Rased
 Author URI: http://bashir-rased.com/
 Version: 1.0.1
*/

/* Website Preloader */
$(window).on("load",function (){
	$(".preloader").delay(100).fadeOut(),
	setTimeout(function(){$("#preloader").addClass("loading-end"),
	setTimeout(function(){$("#preloader").hide()},1500)},800)
});
/* End */

/* Website Navbar Scroll */
$(window).scroll(function(){
    if ($(window).scrollTop() >= 150) {
        $('.header-menu-area').addClass('fixed-header');
    }
    else {
        $('.header-menu-area').removeClass('fixed-header');
    }
});
/* End */

$(document).ready(function(){
	
	
    $(".btn-show-comments").click(function () {
        $(".re-reply-comments").toggle();
    });

	
	/* Nice Scroll Bar Plugin */
	$("body").niceScroll({
		cursorwidth:10,
		scrollspeed:60,
		cursorminheight:300,
		cursorborder:0,
		cursorborderradius:15,
		cursorcolor:'#007bff',		
		background:'#eeeeee',
		autohidemode:false,
		preservenativescrolling:true,
		enablekeyboard:true,
		horizrailenabled:true,
		bouncescroll:true,
		smoothscroll:true,
		iframeautoresize:true,
		zindex:999,
		railpadding: { top: 4, right: 4, left: 4, bottom: 4 }
	});
	/* End */
	
	/* Header Navbar Menu Scroll and Click Active */
	var sidenav = $('.header-menu a');
    $(sidenav).on('click', function() {
        $(sidenav).removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $(window).on('scroll', function() {
        $('.scroll-menu').each(function() {
            if ($(window).scrollTop() >= $(this).position().top - 50) {
                var id = $(this).attr('id');
                $('.header-menu a').removeClass('menu-active');
                $('.header-menu a[href*=\\#' + id + ']').addClass('menu-active');
            }
        });
    });
	
    $('a.smooth-scroll').on("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
	/* End */
	
	/* Scroll to Top */
	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			$('.back-to-top-area').fadeIn(100);
		}else{
			$('.back-to-top-area').fadeOut(100);
		}
	});
	$(".back-to-top").click(function(event){
		event.preventDefault();
		$("html,body").animate({
			scrollTop:0},3000);
	});
	/* End */
	
	/* Slick Nav Plugin */
	$(function(){
		$('.header-menu').slicknav({
			appendTo:'.header-menu-right',
			label:""
		});
	});
	/* End */
	
	/* CountTo Plugin */
	$('.timer').countTo();
	/* End */
	
	/* Owl Carousel Plugin */
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
		items:1,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	/* End */
	
	/* Custom Portfolio Filtering */
	$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
			//$('.filter[filter-item="'+value+'"]').removeClass('hidden');
			//$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("portfolio-active-menu")) {
		$(this).removeClass("portfolio-active-menu");
	}
		$(this).addClass("portfolio-active-menu");
	/* End */
	
	/* FancyBox 3 Plugin */
	$('[data-fancybox="portfolio-gallery"]').fancybox({
		loop: true,
		keyboard: true,
		buttons: [
			"share",
			"slideShow",
			"fullScreen",
			"download",
			"close"
		],
		animationEffect: "fade",
		animationDuration: 500,
		transitionEffect: "zoom-in-out",
		transitionDuration: 500,
		slideShow: {
		autoStart: true,
		speed: 800
		}
	});
	/* End */
	
}); 

$(document).ready(function(){
	
	/* Calendar */
	$('.calendar').jsRapCalendar({
	  week:6,
		onClick:function(y,m,d){
			alert(y + '-' + m + '-' + d);
		}
	});
	/* End */

});