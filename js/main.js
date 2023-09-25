// WEB303 Assignment 2
// Esta Cimo 0825062

$(document).ready(function() {
	$('#prospect-link').click(function () {
		$('#content').load('prospect.html #content');
	});
	
	$('#convert').click(function () {
		$('#content').load('convert.html #content');
	});
	
	$('#retain').click(function () {
		$('#content').load('retain.html #content');
	});
});

