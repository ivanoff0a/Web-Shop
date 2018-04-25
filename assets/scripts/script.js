$(document).ready(function() {

	var radioBtn = $('.picked-item'),
		radioBtn1 = $('.picked-item1'),
		radioBtn2 = $('.picked-item2'),
		radioBtn3 = $('.picked-item3'),
		radioBtn4 = $('.picked-item4'),
		radioBtn5 = $('.picked-item5'),
		furnitureImg = $('.furniture-img'),
		furnitureImgPicked = $('.furniture-img-picked'),
		labelPicked = $('.label-picked'),
		labelPicked2 = $('.label-picked2'),
		left = $('.left-arrow'),
		right = $('.right-arrow'),
		number = $('.number'),
		couch = $('#couch'),
		armchair = $('#armchair'),
		mattress = $('#mattress'),
		chair = $('#chair'),
		carpet = $('#carpet');

	// couch.click(function() {
	// 	furnitureImg.toggleClass('-choosen');
	// 	furnitureImgPicked.toggleClass('-choosen');
	// 	labelPicked.toggleClass('-clicked');
	// 	labelPicked2.toggleClass('-clicked');	
	// })

	let change = 1; 

	number.text(change); 
	right.click(function() { 
	++change; 
	number.text(change) ; 
		if (change > 5) { 
			change = 0; 
		} 
	});

	number.text(change) ; 
	left.click(function() { 
	--change; 
	number.text(change); 
		if (change < 1) { 
			change = 5; 
		} 
	});

	$('[data-toggle="datepicker"]').datepicker();

});