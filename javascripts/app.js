var app = app || {};

$(function() {
	// fade the page in
	$('.container').fadeIn('slow');
	// skills slide in
	d3.selectAll('.skill').transition()
	.duration(1000)
	.delay(function(d,i){ return i * 350; })
	.style('margin-left', '0px');
	// first name slide
	d3.select('.name').transition()
	.duration(2000)
	.style('margin-left', '0px');
	// last name slide
	d3.select('.spacing').transition()
	.duration(2000)
	.style('margin', '0px 0px');
});
