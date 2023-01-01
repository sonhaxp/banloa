$(document).ready(function ($) {
	$('.home-slider').slick({
		lazyLoad: 'ondemand',
		autoplay: true,
		autoplaySpeed: 6000,
		fade: true,
		cssEase:'linear',
		dots: true,
		arrows: false,
		infinite: true
	});
	$('.evo-block-product-sport').slick({
		autoplay: false,
		autoplaySpeed: 6000,
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive:[
			{
				breakpoint: 1024,
				settings:{
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 991,
				settings:{
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 767,
				settings:{
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings:{
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});
	$('.slide-collection').slick({
		lazyLoad: 'ondemand',
		autoplay: false,
		autoplaySpeed: 6000,
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});
	if ($(window).width() < 768){
		$('.evo-index-list-product-brand-and-menu .evo-index-category-menu').append($('.evo-header-mobile .mainmenu #menu2017').html());
	}
});