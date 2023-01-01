// $(document).ready(function ($) {
// 	awe_backtotop();
// 	awe_category();
// 	awe_tab();
// 	awe_lazyloadImage();
// 	$('#trigger-mobile').click(function(){
// 		$(".mobile-main-menu").toggleClass('active');
// 		$(".backdrop__body-backdrop___1rvky").addClass('active');
// 	});
// 	$('.backdrop__body-backdrop___1rvky').click(function(){
// 		$("body").removeClass('show-search');
// 		$(".mobile-main-menu").removeClass('active');
// 		$(".backdrop__body-backdrop___1rvky").removeClass('active');
// 	});
// 	$(window).resize( function(){if ($(window).width() > 1023){$(".mobile-main-menu").removeClass('active');$(".backdrop__body-backdrop___1rvky").removeClass('active');}});
// 	$(".backdrop__body-backdrop___1rvky").removeClass('active');
// 	$('.ng-has-child1 a .svg1').on('click', function(e){
// 		e.preventDefault();var $this = $(this);
// 		$this.parents('.ng-has-child1').find('.ul-has-child1').stop().slideToggle();
// 		$(this).toggleClass('active');
// 		return false;
// 	});
// 	$('.ng-has-child1 .ul-has-child1 .ng-has-child2 a .svg2').on('click', function(e){
// 		e.preventDefault();var $this = $(this);
// 		$this.parents('.ng-has-child1 .ul-has-child1 .ng-has-child2').find('.ul-has-child2').stop().slideToggle();
// 		$(this).toggleClass('active');
// 		return false;
// 	});
// 	$('#nav .has-mega').hover(function(){
// 		var $this = $(this);
// 		var divHeight = $(this).find('.mega-content').height() - 10; 
// 		$(this).find('.evo-sub-cate-1').css('height', divHeight+'px');
// 	});
// 	$(".mega-content .level0 .level1").hover(function() {
// 		$('.mega-content .level0 .level1').removeClass('active');
// 		$(this).addClass('active');
// 	});
// 	$(".mega-content").on('mouseleave', function(event){
// 		$('.mega-content .level0 .level1').removeClass('active');
// 		$('.mega-content .level0 .level1:first-child').addClass('active');
// 	});
// });
// var placeholderText = ['Nhập tên sản phẩm...','Combo máy chiết rót tự động','Mạch kích trễ', 'Cảm biến', 'Âm thanh bluetooth', 'Arduino'];
// $('.search-auto').placeholderTypewriter({text: placeholderText});
// $(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
// 	hidePopup('.awe-popup'); 	
// 	setTimeout(function(){$('.loading').removeClass('loaded-content');},500);
// 	return false;
// })
// function awe_lazyloadImage() {
// 	var ll = new LazyLoad({
// 		elements_selector: ".lazy",
// 		load_delay: 500,
// 		threshold: 0
// 	});
// } window.awe_lazyloadImage=awe_lazyloadImage;
// function awe_showNoitice(selector) {
// 	$(selector).animate({right: '0'}, 500);
// 	setTimeout(function(){$(selector).animate({right: '-300px'}, 500);}, 3500);
// }  window.awe_showNoitice=awe_showNoitice;
// function awe_showLoading(selector) {
// 	var loading = $('.loader').html();
// 	$(selector).addClass("loading").append(loading); 
// }  window.awe_showLoading=awe_showLoading;
// function awe_hideLoading(selector) {
// 	$(selector).removeClass("loading"); 
// 	$(selector + ' .loading-icon').remove();
// }  window.awe_hideLoading=awe_hideLoading;
// function awe_showPopup(selector) {
// 	$(selector).addClass('active');
// }  window.awe_showPopup=awe_showPopup;
// function awe_hidePopup(selector) {
// 	$(selector).removeClass('active');
// }  window.awe_hidePopup=awe_hidePopup;
// function awe_convertVietnamese(str) { 
// 	str= str.toLowerCase();str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");str= str.replace(/đ/g,"d"); str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");str= str.replace(/-+-/g,"-");str= str.replace(/^\-+|\-+$/g,""); 
// 	return str; 
// } window.awe_convertVietnamese=awe_convertVietnamese;
// function awe_category(){
// 	$('.nav-category .Collapsible__Plus').click(function(e){
// 		$(this).parent().toggleClass('active');
// 	});
// } window.awe_category=awe_category;
// function awe_backtotop() { 
// 	if ($('.back-to-top').length) {
// 		var scrollTrigger = 100,
// 			backToTop = function () {
// 				var scrollTop = $(window).scrollTop();
// 				if (scrollTop > scrollTrigger) {
// 					$('.back-to-top').addClass('show');
// 				} else {
// 					$('.back-to-top').removeClass('show');
// 				}
// 			};
// 		backToTop();
// 		$(window).on('scroll', function () {
// 			backToTop();
// 		});
// 		$('.back-to-top').on('click', function (e) {
// 			e.preventDefault();
// 			$('html,body').animate({
// 				scrollTop: 0
// 			}, 700);
// 		});
// 	}
// } window.awe_backtotop=awe_backtotop;
// function awe_tab() {
// 	$(".e-tabs:not(.not-dqtab)").each( function(){
// 		$(this).find('.tabs-title li:first-child').addClass('current');
// 		$(this).find('.tab-content').first().addClass('current');
// 		$(this).find('.tabs-title li').click(function(){
// 			var tab_id = $(this).attr('data-tab');
// 			var url = $(this).attr('data-url');
// 			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
// 			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
// 			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
// 			$(this).addClass('current');
// 			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
// 		});    
// 	});
// } window.awe_tab=awe_tab;
// $('.btn-close').click(function() {
// 	$(this).parents('.dropdown').toggleClass('open');
// }); 
// $(document).on('keydown','#qty, #quantity-detail, .number-sidebar',function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
// var buy_now = function(id) {
// 	var quantity = 1;
// 	var params = {
// 		type: 'POST',
// 		url: '/cart/add.js',
// 		data: 'quantity=' + quantity + '&variantId=' + id,
// 		dataType: 'json',
// 		success: function(line_item) {
// 			window.location = '/checkout';
// 		},
// 		error: function(XMLHttpRequest, textStatus) {
// 			Bizweb.onError(XMLHttpRequest, textStatus);
// 		}
// 	};
// 	jQuery.ajax(params);
// }
// if ($(window).width() > 1100){
	
	
// 	var menu_limit = "9";
// 	if (isNaN(menu_limit)){
// 		menu_limit = 10;
// 	} else {
// 		menu_limit = 8;
// 	}
// }else{
	
	
// 	var menu_limit = "7";
// 	if (isNaN(menu_limit)){
// 		menu_limit = 8;
// 	} else {
// 		menu_limit = 6;
// 	}
// }
// var sidebar_length = $('.menu-item-count').length;
// if (sidebar_length > (menu_limit + 1) ){
// 	if ($(window).width() > 767){
// 		$('.nav-cate:not(.site-nav-mobile) > ul').each(function(){
// 			$('.menu-item-count',this).eq(menu_limit).nextAll().hide().addClass('toggleable');
// 			$(this).append('<li class="more"><a class="evo-categories-a" title="Xem thêm"><label>Xem thêm ... </label></a></li>');
// 		});
// 		$('.nav-cate > ul').on('click','.more', function(){
// 			if($(this).hasClass('less')){
// 				$(this).html('<a class="evo-categories-a" title="Xem thêm"><label>Xem thêm ...</label></a>').removeClass('less');
// 			} else {
// 				$(this).html('<a class="evo-categories-a" title="Thu gọn"><label>Thu gọn ... </label></a>').addClass('less');;
// 			}
// 			$(this).siblings('li.toggleable').slideToggle({
// 				complete: function () {
// 					var divHeight = $('#menu2017').height(); 
// 					$('.subcate.gd-menu').css('min-height', divHeight+'px');
// 				}
// 			});
// 		});
// 	}
// }
// var _0xa1c3=["\x74\x68\x65\x6D\x65"];window[_0xa1c3[0]]= window[_0xa1c3[0]]|| {}
// theme.wishlist = (function (){
// 	var wishlistButtonClass = '.js-btn-wishlist',
// 		wishlistRemoveButtonClass = '.js-remove-wishlist',
// 		$wishlistCount = $('.js-wishlist-count'),
// 		$wishlistContainer = $('.js-wishlist-content'),
// 		$wishlistSmall = $('.wish-list-small'),
// 		wishlistViewAll = $('.wish-list-button-all'),
// 		wishlistObject = JSON.parse(localStorage.getItem('localWishlist')) || [],
// 		wishlistPageUrl = $('.js-wishlist-link').attr('href'),
// 		loadNoResult = function (){
// 			$wishlistContainer.html('<div class="col text-center"><div class="alert alert-warning d-inline-block"><h3>Sản phẩm nào của chúng tôi bạn mong muốn sở hữu nhất?</h3><p>Hãy thêm vào danh sách sản phẩm yêu thích ngay nhé!</p></div></div>');
// 			$wishlistSmall.html('<div class="empty-description"><span class="empty-icon"><i class="ico ico-favorite-heart"></i></span><div class="empty-text"><h3>Sản phẩm nào của chúng tôi bạn mong muốn sở hữu nhất?</h3><p>Hãy thêm vào danh sách sản phẩm yêu thích ngay nhé!</p></div></div><style>.container--wishlist .js-wishlist-content{border:none;}</style>');
// 			wishlistViewAll.addClass('d-none');
// 		};
// 	function loadSmallWishList(){
// 		$wishlistSmall.html('');
// 		if(wishlistObject.length > 0){
// 			for (var i = 0; i < wishlistObject.length; i++) { 
// 				var productHandle = wishlistObject[i];
// 				Bizweb.getProduct(productHandle,function(product){
// 					var htmlSmallProduct = '';
// 					if(product.variants[0].price > 0 ){
// 						var productPrice = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.variants[0].price);
// 					}else{
// 						var productPrice = "Liên hệ";
// 					}
// 					if(product.featured_image != null){
// 						var src = Bizweb.resizeImage(product.featured_image, 'small');
// 					}else{
// 						var src = "//bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif";
// 					}
// 					htmlSmallProduct += '<div class="wish-list-item-small js-wishlist-item clearfix">';
// 					htmlSmallProduct += '<a class="product-image" href="'+ product.url +'" title="'+ product.name +'">';
// 					htmlSmallProduct += '<img class="lazy" alt="'+ product.name +'" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="'+ src +'" width="80"></a>';
// 					htmlSmallProduct += '<div class="detail-item"><div class="product-details">';
// 					htmlSmallProduct += '<a href="javascript:;" data-handle="'+product.alias+'" title="Bỏ yêu thích" class="js-remove-wishlist">×</a>';
// 					htmlSmallProduct += '<p class="product-name">';
// 					htmlSmallProduct += '<a href="'+ product.url +'" title="'+ product.name +'">'+ product.name +'</a>';
// 					htmlSmallProduct += '</p></div><div class="product-details-bottom">';
// 					htmlSmallProduct += '<span class="price pricechange">' +productPrice+ '</span>';
// 					htmlSmallProduct += '</div></div></div>';
// 					$wishlistSmall.append(htmlSmallProduct);
// 					awe_lazyloadImage();
// 				});
// 			}
// 			wishlistViewAll.removeClass('d-none');
// 		}else{
// 			loadNoResult();
// 		}
// 	}
// 	function loadWishlist(){
// 		$wishlistContainer.html('');
// 		if (wishlistObject.length > 0){
// 			for (var i = 0; i < wishlistObject.length; i++) { 
// 				var productHandle = wishlistObject[i];
// 				Bizweb.getProduct(productHandle,function(product){
// 					var htmlProduct = '';
// 					if(product.variants[0].price > 0 ){
// 						var productPrice = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.variants[0].price);
// 					}else{
// 						var productPrice = "Liên hệ";
// 					}
// 					if(product.variants[0].compare_at_price > product.variants[0].price ){
// 						var productPriceCompare = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.variants[0].compare_at_price);
// 						var productDiscount = Math.round((product.variants[0].compare_at_price - product.variants[0].price)/product.variants[0].compare_at_price * 100);
// 					}
// 					if(product.featured_image != null){
// 						var src = Bizweb.resizeImage(product.featured_image, 'large');
// 					}else{
// 						var src = "//bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif";
// 					}
// 					htmlProduct += '<div class="col-6 col-sm-4 col-md-15 col-lg-15 js-wishlist-item">';
// 					htmlProduct += '<div class="evo-product-block-item">';
// 					htmlProduct += '<div class="box-image"><a class="product-item-photo" href="'+ product.url +'" title="'+ product.name +'">';
// 					htmlProduct += '<img class="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="'+ src +'" alt="'+ product.name +'" />';
// 					htmlProduct += '</a>';
// 					if(product.variants[0].compare_at_price > product.variants[0].price ){
// 						htmlProduct += '<div class="label_product"><span class="label_sale">-'+productDiscount+'%</span></div>';
// 					}
// 					htmlProduct += '</div>';
// 					htmlProduct += '<div class="product-item-details"><h3 class="product-item-name"><a href="'+ product.url +'" title="'+ product.name +'">'+ product.name +'</a></h3>';
// 					htmlProduct += '<div class="price-box">';
// 					htmlProduct += '<span class="price">' +productPrice+ '</span>';
// 					if(product.variants[0].compare_at_price > product.variants[0].price ){
// 						htmlProduct += '<span class="old-price">' +productPriceCompare+ '</span>';
// 					}
// 					htmlProduct += '</div>';
// 					htmlProduct += '<button type="button" class="favorites-btn js-favorites js-remove-wishlist cart-button" title="Bỏ yêu thích" data-handle="'+product.alias+'">Bỏ yêu thích</button>';
// 					htmlProduct += '</div>';
// 					htmlProduct += '</div></div>';
// 					$wishlistContainer.append(htmlProduct);
// 					awe_lazyloadImage();
// 				});
// 			}
// 		}else{
// 			loadNoResult();
// 		}
// 		$wishlistCount.text(wishlistObject.length);
// 		$(wishlistButtonClass).each(function(){
// 			var productHandle = $(this).data('handle');
// 			var iconWishlist = $.inArray(productHandle,wishlistObject) !== -1 ? "<svg class='evo-added' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 51.997 51.997' style='enable-background:new 0 0 51.997 51.997;' xml:space='preserve'><path d='M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z'/></svg>" : "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 51.997 51.997' style='enable-background:new 0 0 51.997 51.997;' xml:space='preserve'><path d='M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z'/></svg>";
// 			var textWishlist = $.inArray(productHandle,wishlistObject) !== -1 ? "Đến trang sản phẩm yêu thích" : "Thêm vào yêu thích";
// 			$(this).html(iconWishlist).attr('title',textWishlist);
// 		});
// 	}
// 	var _0xcd91=["\x68\x61\x6E\x64\x6C\x65","\x64\x61\x74\x61","\x5B\x64\x61\x74\x61\x2D\x68\x61\x6E\x64\x6C\x65\x3D\x22","\x22\x5D","\x69\x6E\x41\x72\x72\x61\x79","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x70\x75\x73\x68","\x77\x69\x73\x68\x6C\x69\x73\x74\x49\x63\x6F\x6E\x41\x64\x64\x65\x64","\x73\x74\x72\x69\x6E\x67\x73","\x68\x74\x6D\x6C","\x66\x61\x73\x74","\x66\x61\x64\x65\x49\x6E","\x73\x6C\x6F\x77","\x66\x61\x64\x65\x4F\x75\x74","\x74\x69\x74\x6C\x65","\x77\x69\x73\x68\x6C\x69\x73\x74\x54\x65\x78\x74\x41\x64\x64\x65\x64","\x61\x74\x74\x72","\x6C\x6F\x63\x61\x6C\x57\x69\x73\x68\x6C\x69\x73\x74","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x73\x65\x74\x49\x74\x65\x6D","\x6C\x65\x6E\x67\x74\x68","\x74\x65\x78\x74"];function updateWishlist(_0xfc06x2){var _0xfc06x3=$(_0xfc06x2)[_0xcd91[1]](_0xcd91[0]),_0xfc06x4=$(wishlistButtonClass+ _0xcd91[2]+ _0xfc06x3+ _0xcd91[3]);var _0xfc06x5=$[_0xcd91[4]](_0xfc06x3,wishlistObject)!==  -1?true:false;if(_0xfc06x5){window[_0xcd91[6]][_0xcd91[5]]= wishlistPageUrl}else {wishlistObject[_0xcd91[7]](_0xfc06x3);_0xfc06x4[_0xcd91[14]](_0xcd91[13])[_0xcd91[12]](_0xcd91[11])[_0xcd91[10]](theme[_0xcd91[9]][_0xcd91[8]]);_0xfc06x4[_0xcd91[17]](_0xcd91[15],theme[_0xcd91[9]][_0xcd91[16]])};localStorage[_0xcd91[20]](_0xcd91[18],JSON[_0xcd91[19]](wishlistObject));loadSmallWishList();$wishlistCount[_0xcd91[22]](wishlistObject[_0xcd91[21]])}
// 	var _0xd3ea=["\x63\x6C\x69\x63\x6B","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x6F\x6E","\x68\x61\x6E\x64\x6C\x65","\x64\x61\x74\x61","\x5B\x64\x61\x74\x61\x2D\x68\x61\x6E\x64\x6C\x65\x3D\x22","\x22\x5D","\x77\x69\x73\x68\x6C\x69\x73\x74\x49\x63\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x73","\x68\x74\x6D\x6C","\x74\x69\x74\x6C\x65","\x77\x69\x73\x68\x6C\x69\x73\x74\x54\x65\x78\x74","\x61\x74\x74\x72","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x70\x6C\x69\x63\x65","\x6C\x6F\x63\x61\x6C\x57\x69\x73\x68\x6C\x69\x73\x74","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x73\x65\x74\x49\x74\x65\x6D","\x66\x61\x64\x65\x4F\x75\x74","\x2E\x6A\x73\x2D\x77\x69\x73\x68\x6C\x69\x73\x74\x2D\x69\x74\x65\x6D","\x63\x6C\x6F\x73\x65\x73\x74","\x6C\x65\x6E\x67\x74\x68","\x74\x65\x78\x74"];$(document)[_0xd3ea[2]](_0xd3ea[0],wishlistButtonClass,function(_0xdfa5x1){_0xdfa5x1[_0xd3ea[1]]();updateWishlist(this)});$(document)[_0xd3ea[2]](_0xd3ea[0],wishlistRemoveButtonClass,function(){var _0xdfa5x2=$(this)[_0xd3ea[4]](_0xd3ea[3]),_0xdfa5x3=$(wishlistButtonClass+ _0xd3ea[5]+ _0xdfa5x2+ _0xd3ea[6]);_0xdfa5x3[_0xd3ea[9]](theme[_0xd3ea[8]][_0xd3ea[7]]);_0xdfa5x3[_0xd3ea[12]](_0xd3ea[10],theme[_0xd3ea[8]][_0xd3ea[11]]);wishlistObject[_0xd3ea[14]](wishlistObject[_0xd3ea[13]](_0xdfa5x2),1);localStorage[_0xd3ea[17]](_0xd3ea[15],JSON[_0xd3ea[16]](wishlistObject));$(this)[_0xd3ea[20]](_0xd3ea[19])[_0xd3ea[18]]();$wishlistCount[_0xd3ea[22]](wishlistObject[_0xd3ea[21]]);if(wishlistObject[_0xd3ea[21]]=== 0){loadNoResult()}});loadWishlist();loadSmallWishList();return {load:loadWishlist}
// })()
// theme.compare = (function (){
// 	var compareButtonClass = '.js-btn-compare',
// 		compareRemoveButtonClass = '.js-remove-compare',
// 		$compareShowButton = $('.site-header__compare'),
// 		$compareCount = $('.js-compare-count'),
// 		$compareContainer = $('.js-compare-content'),
// 		compareObject = JSON.parse(localStorage.getItem('localCompare')) || [],
// 		alertClass='alert-success',
// 		evoCheckProductType='',
// 		evoDefaultProductType='';
// 	function updateCompare(self) {
// 		var productHandle = $(self).data('handle'),
// 			productType = $(self).data('type'),
// 			alertText = '';
// 		var isAdded = $.inArray(productHandle,compareObject) !== -1 ? true:false;
// 		evoCheckProductType = $(self).data('type');
// 		if (isAdded) {
// 			compareObject.splice(compareObject.indexOf(productHandle), 1);
// 			alertText = 'Đã xóa khỏi dánh sách so sánh';
// 			alertClass = 'alert-success';
// 		}else{
// 			if(compareObject.length === 4){
// 				alertText = 'So sánh tối đa 4 sản phẩm';
// 				alertClass = 'alert-danger';
// 			}else{
// 				if(evoDefaultProductType == ''){
// 					alertClass = 'alert-success';
// 					compareObject.push(productHandle);
// 					alertText = 'Đã thêm vào danh sách so sánh';
// 				}else{
// 					if(evoDefaultProductType != evoCheckProductType){
// 						alertText = 'Sản phẩm so sánh phải cùng loại';
// 						alertClass = 'alert-danger';
// 					}else{
// 						alertClass = 'alert-success';
// 						compareObject.push(productHandle);
// 						alertText = 'Đã thêm vào danh sách so sánh';
// 					}
// 				}
// 			}
// 		}
// 		localStorage.setItem('localCompare', JSON.stringify(compareObject)); 
// 		theme.alert.new('So sánh sản phẩm',alertText,3000,alertClass);
// 		$compareCount.text(compareObject.length);
// 		var evoFirstCompareProductHandle = compareObject[0];
// 		Bizweb.getProduct(evoFirstCompareProductHandle,function(product){
// 			evoDefaultProductType = product.product_type;
// 		});
// 	};
// 	function loadCompare(){
// 		var compareGrid;
// 		$compareContainer.html('');
// 		if (compareObject.length > 0){
// 			$compareShowButton.removeClass('d-none');
// 			compareGrid = compareObject.length === 1? 'col' : 'col';
// 			for (var i = 0; i < compareObject.length; i++) { 
// 				var productHandle = compareObject[i];
// 				Bizweb.getProduct(productHandle,function(product){
// 					var htmlProduct = '',
// 						productComparePrice = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.variants[0].compare_at_price),
// 						productAvailable = product.available ? "Còn hàng" : "Hết hàng",
// 						productAvailableClass = product.available ? 'alert-success' : 'alert-danger',
// 						productVendorHTML = product.vendor !== null ? '<a href="/collections/vendors?q='+ product.vendor +'">'+ product.vendor +'</a>' : '<span>Đang cập nhật</span>';
// 					if(product.featured_image != null){
// 						var src = Bizweb.resizeImage(product.featured_image, 'large');
// 					}else{
// 						var src = "//bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif";
// 					}
// 					if(product.variants[0].price > 0 ){
// 						var productPrice = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.variants[0].price);
// 					}else{
// 						var productPrice = "Liên hệ";
// 					}
// 					if(product.content != null){
// 						var productContent = product.content;
// 						if(productContent.includes('---')){
// 							var productMainContent = productContent.split('---')[0];
// 						}else{
// 							var productMainContent = "Nội dung đang cập nhật";
// 						}
// 					}else{
// 						var productMainContent = "Nội dung đang cập nhật";
// 					}
// 					htmlProduct += '<div class="compare-item '+compareGrid+' col-6 col-lg-3 col-md-3 padding-2">';
// 					htmlProduct += '	<div class="compage-image"><button class="js-remove-compare" data-handle="'+product.alias+'" title="Xóa"></button>';
// 					htmlProduct += '	<a href="'+ product.url +'" title="'+ product.name +'">';
// 					htmlProduct += '		<img src="'+ src +'" alt="'+ product.name +'" />';
// 					htmlProduct += '	</a></div>';
// 					htmlProduct += '	<hr /><h5><a href="'+ product.url +'" title="'+ product.name +'">'+ product.name +'</a></h5>';
// 					htmlProduct += '	<hr /><span class="price"> '+ productPrice +'</span>';
// 					if(product.variants[0].compare_at_price > product.variants[0].price ){
// 						htmlProduct += '	<s class="old-price">'+ productComparePrice +'</s>';
// 					}
// 					htmlProduct += '	<hr /><span class='+ productAvailableClass +'> '+ productAvailable +'</span>';
// 					htmlProduct += '	<hr /><span class="brand">Thương hiệu: '+ productVendorHTML + '</span>';
// 					htmlProduct += '	<hr /><span class="comparecontens">'+ productMainContent + '</span>';
// 					htmlProduct += '  <hr /><button class="btn js-remove-compare btn-theme gradient-theme" data-handle="'+product.alias+'" title="Xóa">Xóa</button>';
// 					htmlProduct += '</div>';
// 					$compareContainer.append(htmlProduct);
// 				});
// 			}
// 			var evoFirstCompareProductHandle = compareObject[0];
// 			Bizweb.getProduct(evoFirstCompareProductHandle,function(product){
// 				evoDefaultProductType = product.product_type;
// 			});
// 		}else{
// 			$compareContainer.html('<div class="alert alert-warning d-inline-block margin-10">Vui lòng chọn sản phẩm để so sánh</div>');
// 			$compareShowButton.addClass('d-none');
// 			evoDefaultProductType = '';
// 		}
// 		$(compareButtonClass).each(function(){
// 			var productHandle = $(this).data('handle');
// 			var status = $.inArray(productHandle,compareObject) !== -1 ? 'added' : '';
// 			$(this).removeClass('added').addClass(status);
// 		});
// 		$compareCount.text(compareObject.length);
// 	}
// 	$(document).on('click',compareButtonClass,function (event) {
// 		event.preventDefault();
// 		updateCompare(this);
// 		loadCompare();
// 	});
// 	$(document).on('click',compareRemoveButtonClass,function(){
// 		var productHandle = $(this).data('handle');
// 		compareObject.splice(compareObject.indexOf(productHandle), 1);
// 		localStorage.setItem('localCompare', JSON.stringify(compareObject)); 
// 		loadCompare();
// 	});
// 	loadCompare();
// 	$(document).on('Bizweb:section:load', loadCompare);
// 	return{
// 		load:loadCompare
// 	}
// })()
// theme.alert = (function(){
// 	var $alert = $('#js-global-alert'),
// 		$title = $('#js-global-alert .alert-heading'),
// 		$content = $('#js-global-alert .alert-content'),
// 		close = '#js-global-alert .close';
// 	$(document).on('click',close,function(){
// 		$alert.removeClass('active');
// 	});
// 	function createAlert(title,mess,time,type){
// 		var alertTitle = title || '',
// 			showTime = time || 3000,
// 			alertClass = type || 'alert-success';
// 		$alert.removeClass('alert-success').removeClass('alert-danger').removeClass('alert-warning')
// 		$alert.addClass(alertClass);
// 		$title.html(title);
// 		$content.html(mess);
// 		$alert.addClass('active');
// 		setTimeout(function(){
// 			$alert.removeClass('active');
// 		}, showTime); 
// 	}
// 	return{
// 		new:createAlert
// 	}
// })()
// theme.strings = {
// 	wishlistNoResult: "<h3>Sản phẩm nào của chúng tôi bạn mong muốn sở hữu nhất?</h3><p>Hãy thêm vào danh sách sản phẩm yêu thích ngay nhé!</p>",
// 	wishlistIcon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 51.997 51.997' style='enable-background:new 0 0 51.997 51.997;' xml:space='preserve'><path d='M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z'/></svg>",
// 	wishlistIconAdded: "<svg class='evo-added' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 51.997 51.997' style='enable-background:new 0 0 51.997 51.997;' xml:space='preserve'><path d='M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z'/></svg>",
// 	wishlistText: "Thêm vào yêu thích",
// 	wishlistTextAdded: "Đến trang sản phẩm yêu thích",
// 	wishlistRemove: "Xóa",
// 	compareNoResult: "Vui lòng chọn sản phẩm để so sánh",
// 	compareIcon: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 477.867 477.867' style='enable-background:new 0 0 477.867 477.867;' xml:space='preserve'><path d='M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479c-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933c0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207c-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4C426.667,7.641,419.026,0,409.6,0z'/><path d='M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696c-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606c-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068c40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z'/></svg>",
// 	compareText: "So sánh",
// 	compareRemove: "Xóa khỏi danh sách",
// 	compareNotifyAdded: 'Đã thêm vào danh sách so sánh',
// 	compareNotifyRemoved: "Đã xóa khỏi dánh sách so sánh",
// 	compareNotifyMaximum: "So sánh tối đa 4 sản phẩm",
// };


// var Ant = {
// 	clone_item_view: function(product) { 
// 		var src = Bizweb.resizeImage(product.featured_image, 'medium');
// 		if(src == null){
// 			src = "//bizweb.dktcdn.net/thumb/medium/assets/themes_support/noimage.gif";
// 		}
// 		jQuery('<div class="item recently-item-pro clearfix">'
// 			   +'<div class="wrp">'
// 			   +'<div class="box-image">'
// 			   +'<a class="image url-product" href="'+product.url+'" title="'+product.name+'">'
// 			   +'<img class="image-review" src="' + src +  '" alt="'+product.name+'" />'
// 			   +'</a>'
// 			   +'</div>'
// 			   +'<div class="info">'
// 			   +'<h3>'
// 			   +'<a href="'+product.url+'" title="'+product.name+'" class="url-product"><span class="title-review">'+product.name+'</span></a>'
// 			   +'</h3>'
// 			   +'<div class="price">'+product.price+'</div>'
// 			   +'</div>'
// 			   +'</div>'
// 			   +'</div>').appendTo('#owl-demo-daxem > .product-item');
// 	},
// 	setCookiePopup: function (cvalue, exdays, nameCookie) {
// 		var d = new Date();
// 		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
// 		$.cookie(nameCookie, cvalue, { expires: d, path: '/' });
// 	},
// 	getCookiePopup: function (nameCookie) {
// 		return $.cookie(nameCookie);
// 	}
// };


