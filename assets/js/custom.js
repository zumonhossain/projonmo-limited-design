// select
$('select').niceSelect();


// Best Sellers
$('.premium-ads-active').owlCarousel({
	loop:true,
	margin:30,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
	responsive:{
			0:{
					items:1
			},
			768:{
					items:2
			},
			992:{
					items:3
			},
			1200:{
					items:3
			}
	}
})