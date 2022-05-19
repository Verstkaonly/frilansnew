alert("Привет!"); 

$(document).ready(function() {
	$('.header__line').click(function(event) {
		$('.header__line,.header__menu,.header__icon').toggleClass('active');
	});
});

$(document).ready(function(){
	$('.slider').slick();
});
