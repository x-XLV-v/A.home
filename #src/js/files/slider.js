$(document).ready(function () {
	$('.slider-left').slick({
		dots: true,
		speed: 800,
		infinite: false,
		draggble: false,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false
	});
	$('.slider-right').slick({
		dots: true,
		speed: 800,
		infinite: false,
		draggble: false,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false
	});
});