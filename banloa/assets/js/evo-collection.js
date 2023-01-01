$(document).ready(function($){
	$('.evo-sidebar-collection .heading').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.evo-sidebar-collection').find('.evo-sidebar-collection-content').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	$('.slide-collection').slick({
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
	$('.evo-owl-product').slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
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
					slidesToShow: 3,
					slidesToScroll: 3
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
	$('.tab-sort').add('.category-products .sort-cate .sort-cate-left .close-sort').click(function(){
		$('.category-products .sort-cate').toggleClass('active');
		$('.evo-sidebar-collection .collection-category').removeClass('active');
		$('.evo-sidebar-collection .aside-filter').removeClass('active');
	});
	$('.tab-cate').add('.evo-sidebar-collection .collection-category .close-categories').click(function(){
		$('.evo-sidebar-collection .collection-category').toggleClass('active');
		$('.category-products .sort-cate').removeClass('active');
		$('.evo-sidebar-collection .aside-filter').removeClass('active');
	});
	$('.tab-filter').add('.evo-sidebar-collection .aside-filter .close-filter').click(function(){
		$('.evo-sidebar-collection .aside-filter').toggleClass('active');
		$('.category-products .sort-cate').removeClass('active');
		$('.evo-sidebar-collection .collection-category').removeClass('active');
	});
	$('.sort-cate .sort-cate-left .btn-quick-sort a').click(function(){
		$('.sort-cate').toggleClass('active');
	});
});