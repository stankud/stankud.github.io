var app = app || {}

$(function() {
	// fade the page in
	$('.container').fadeIn('slow');
	// fade in/out screenshots
	$('.screen-shot').on('mouseover', function(){
		$(this).animate({opacity: 1});
	})
	$('.screen-shot').on('mouseout', function(){
		$(this).animate({opacity: 0.4});
	})
});