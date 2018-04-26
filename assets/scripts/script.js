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
		couchItem = $('#couch-item'),
		armchair = $('#armchair'),
		mattress = $('#mattress'),
		chair = $('#chair'),
		carpet = $('#carpet'),
		sumprice = $('.price'),
		sale = $('.sale'),
		btn = $('.btn-purchase');
		
	let	change = 1,
		price = 0,
		couchPrice = 6700,
		armchairPrice = 18000,
		mattressPrice = 8000,
		chairPrice = 3200,
		carpetPrice = 12000;
	// couch.click(function() {
	// 	furnitureImg.toggleClass('-choosen');
	// 	furnitureImgPicked.toggleClass('-choosen');
	// 	labelPicked.toggleClass('-clicked');
	// 	labelPicked2.toggleClass('-clicked');	
	// })


	// function discount () {
	// 	if (couchPrice || armchairPrice || mattressPrice || couchPrice || carpetPrice > 9000 ) {
	// 		sale.text("10%");
	// 	}
	// }

	btn.click(function() {
		alert('Спасибо за заказ! Наш менеджер перезвонит Вам через несколько минут, чтобы обговорить все условия!')
	})

	couch.click(function() {
		sumprice.text(couchPrice + " руб.");
		if (couchPrice > 9000 ) {
			sale.text("10%");
		}
		if(change == 2) {
			couchPrice = couchPrice * 2;
		}
		if(change == 3) {
			couchPrice = couchPrice * 3;
		}
		if(change == 4) {
			couchPrice = couchPrice * 4;
		}
		if(change == 6) {
			couchPrice = couchPrice * 6;
		}
		if(change == 6) {
			couchPrice = couchPrice * 6;
		}												
	})

	armchair.click(function() {
		sumprice.text(armchairPrice + " руб.");
		if (armchairPrice > 9000 ) {
			sale.text("10%");
		}
		if(change == 2) {
			armchairPrice = armchairPrice * 2;
		}
		if(change == 3) {
			armchairPrice = armchairPrice * 3;
		}
		if(change == 4) {
			armchairPrice = armchairPrice * 4;
		}
		if(change == 5) {
			armchairPrice = armchairPrice * 5;
		}
		if(change == 6) {
			armchairPrice = armchairPrice * 6;
		}						
	})

	mattress.click(function() {
		sumprice.text(mattressPrice + " руб.");
		if (mattressPrice > 9000 ) {
			sale.text("10%");
		}
		if(change == 2) {
			mattressPrice = mattressPrice * 2;
		}
		if(change == 3) {
			mattressPrice = mattressPrice * 3;
		}
		if(change == 4) {
			mattressPrice = mattressPrice * 4;
		}
		if(change == 5) {
			mattressPrice = mattressPrice * 5;
		}
		if(change == 6) {
			mattressPrice = mattressPrice * 6;
		}													
	})

	chair.click(function() {
		sumprice.text(chairPrice + " руб.");
		if (chairPrice > 9000 ) {
			sale.text("10%");
		}
		if(change == 2) {
			chairPrice = chairPrice * 2;
		}
		if(change == 3) {
			chairPrice = chairPrice * 3;
		}
		if(change == 4) {
			chairPrice = chairPrice * 4;
		}
		if(change == 5) {
			chairPrice = chairPrice * 5;
		}
		if(change == 6) {
			chairPrice = chairPrice * 6;
		}											
	})

	carpet.click(function() {
		sumprice.text(carpetPrice + " руб.");
		if (carpetPrice > 9000 ) {
			sale.text("10%");
		}
		if(change == 2) {
			carpetPrice= carpetPrice * 2;
		}
		if(change == 3) {
			carpetPrice= carpetPrice * 3;
		}	
		if(change == 4) {
			carpetPrice= carpetPrice * 4;
		}	
		if(change == 5) {
			carpetPrice= carpetPrice * 5;
		}	
		if(change == 6) {
			carpetPrice= carpetPrice * 6;
		}	
	})


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


	$("#only_num").keydown(function(event) {
	  	 // Разрешаем: backspace, delete, tab и escape
	    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
	      // Разрешаем: Ctrl+A
	      (event.keyCode == 65 && event.ctrlKey === true) ||
	      // Разрешаем: home, end, влево, вправо
	      (event.keyCode >= 35 && event.keyCode <= 39)) {
	      // Ничего не делаем
	      return;
	    } else {
	      // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
	      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault();
	      }
	    }
  	});
});