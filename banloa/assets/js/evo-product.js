$(document).on('click', '.btn-buy-now-click', function(e) {
	e.preventDefault();
	$('[data-role=addtocart]').click();
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
$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	centerMode: false,
	infinite: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 4
			}
		}
	]
});
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	lazyLoad: 'ondemand',
	fade: true,
	infinite: false,
	asNavFor: '.slider-nav',
	adaptiveHeight: false,
	responsive: [
		{
			breakpoint: 480,
			settings:{
				dots: true
			}
		}
	]
});
$('.slider-big-video .slider-for a').each(function() {
	$(this).attr('rel','lightbox-demo'); 
});
var variantsize = false;
var alias = "";
var getLimit = 10;
var productOptionsSize = 1;
var selectCallback = function(variant, selector){
	if (variant){
		var form = jQuery('#' + selector.domIdPrefix).closest('form');
		for(var i=0,length=variant.options.length; i<length; i++){
			var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
			if (radioButton.size()){
				radioButton.get(0).checked = true;
			}
		};
	};
	var addToCart = jQuery('.form-product .btn-cart'),
		form = jQuery('.form-product .form-group'),
		productPrice = jQuery('.details-pro .special-price .product-price'),
		qty = jQuery('.inventory_quantity .a-stock'),
		comparePrice = jQuery('.details-pro .old-price .product-price-old'),
		comparePriceText = jQuery('.details-pro .old-price'),
		savePrice = jQuery('.details-pro .save-price .product-price-save'),
		savePriceText = jQuery('.details-pro .save-price'),
		qtyBtn = jQuery('.form-product .form-group .custom-btn-number'),
		BtnSold = jQuery('.form-product .form-group .btn-mua'),
		product_sku = jQuery('.details-product .sku-product .variant-sku');
	if (variant && variant.sku != "" && variant.sku != null){
		product_sku.html(variant.sku);
	} else {
		product_sku.html('(Đang cập nhật...)');
	};
	if (variant && variant.available) {
		if(variant.inventory_management == "bizweb"){
			if (variant.inventory_quantity != 0) {
				qty.html('<span class="a-stock">Còn hàng</span>');
			} else if (variant.inventory_quantity == ''){
				if (variant.inventory_policy == "continue"){
					qty.html('<span class="a-stock">Còn hàng</span>');
				} else {
					qty.html('<span class="a-stock a-stock-out">Hết hàng</span>');
				}
			}
		}else{
			qty.html('<span class="a-stock">Còn hàng</span>');
		};
		addToCart.html('Thêm vào giỏ').removeAttr('disabled');
		BtnSold.removeClass('btnsold');
		qtyBtn.removeClass('d-none');
		if(variant.price == 0){
			productPrice.html('Liên hệ');
			comparePrice.hide();
			savePrice.hide();
			comparePriceText.hide();
			savePriceText.hide();
			form.addClass('d-none');
		}else{
			form.removeClass('d-none');	
			productPrice.html(Bizweb.formatMoney(variant.price, ""));
												 addToCart.html('Thêm vào giỏ');
							  if ( variant.compare_at_price > variant.price ) {
				comparePrice.html(Bizweb.formatMoney(variant.compare_at_price, "")).show();
													 savePrice.html(Bizweb.formatMoney(variant.compare_at_price - variant.price, "") + ' <span>so với giá thị trường</span>').show();
													 comparePriceText.show();
								  savePriceText.show();
			}else {
				comparePrice.hide();   
				savePrice.hide();
				comparePriceText.hide();
				savePriceText.hide();
			}       										
		};
	}else{	
		qty.html('<span class="a-stock a-stock-out">Hết hàng</span>');
		addToCart.html('Hết hàng').attr('disabled', 'disabled');
		BtnSold.addClass('btnsold');
		qtyBtn.addClass('d-none');
		if(variant){
			if(variant.price != 0){
				form.removeClass('d-none');
				productPrice.html(Bizweb.formatMoney(variant.price, ""));
													 if ( variant.compare_at_price > variant.price ) {
								  comparePrice.html(Bizweb.formatMoney(variant.compare_at_price, "")).show();
								  savePrice.html(Bizweb.formatMoney(variant.compare_at_price - variant.price, "") + ' <span>so với giá thị trường</span>').show();
								  comparePriceText.show();
				savePriceText.show();
			} else {
				comparePrice.hide();  
				savePrice.hide();
				comparePriceText.hide();
				savePriceText.hide();
			}     
		}else{
			productPrice.html('Liên hệ');
			comparePrice.hide();
			savePrice.hide();
			comparePriceText.hide();
			savePriceText.hide();
			form.addClass('d-none');};
	}else{
		productPrice.html('Liên hệ');
		comparePrice.hide();
		savePrice.hide();
		comparePriceText.hide();
		savePriceText.hide();
		form.addClass('d-none');
	};
}
/*begin variant image*/
if (variant && variant.image) {  
	var originalImage = jQuery(".slider-nav img");
	var newImage = variant.image;
	var element = originalImage[0];
	Bizweb.Image.switchImage(newImage, element, function (newImageSizedSrc, newImage, element) {
		$('.slider-nav .slick-slide').each(function(){
			var $this = $(this);
			var imgThis = $this.find('img').attr('data-image');
			if(newImageSizedSrc.split("?")[0] == imgThis.split("?")[0]){
				var pst = $this.attr('data-slick-index');
				jQuery(".slider-for").slick( 'slickGoTo', pst);
			}
		});
	});
}
/*end of variant image*/
};
jQuery(function($) {
	
	
										  
	$('.selector-wrapper').css({
		'text-align':'left',
		'margin-bottom':'15px'
	});
});
jQuery('.swatch :radio').change(function() {
	var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
	var optionValue = jQuery(this).val();
	jQuery(this)
		.closest('form')
		.find('.single-option-selector')
		.eq(optionIndex)
		.val(optionValue)
		.trigger('change');
});
function scrollToxx(){
	if($(window).width() > 767) {
		$('html, body').animate({ scrollTop: $('.product-tab.e-tabs').offset().top }, 'slow');
		$('.tab-content, .product-tab .tab-link').removeClass('current');
		$('#tab-3, .product-tab .tab-link:nth-child(3)').addClass('current');
		return false;
	}else{
		$('html, body').animate({ scrollTop: $('.product-tab.e-tabs #tab-3').offset().top }, 'slow');
		$('.product-tab.e-tabs #tab-3').addClass('active');
	}
};
function scrollToxxs(){
	$('html, body').animate({ scrollTop: $('.product-tab.e-tabs').offset().top }, 'slow');
	return false;
};
$('.btn--view-more .less-text').click(function(){
	scrollToxxs();
});
if ($(window).width() < 767) {
	$('.evo-tab-product-mobile .tab-content .evo-product-tabs-header').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.evo-tab-product-mobile .tab-content').find('.rte').stop().slideToggle();
		$(this).parent().toggleClass('active');
		return false;
	});
};
$('.btn--view-more').on('click', function(e){
	e.preventDefault();
	var $this = $(this);
	$this.parents('#tab-1').find('.product-well').toggleClass('expanded');
	$(this).toggleClass('active');
	return false;
});