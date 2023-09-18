/*
	WEB 303 Assignment 1 - jQuery
	Esta Cimo
*/

$(document).ready(function() {
	
	$('#yearly-salary, #percent').on('keyup', function() {
		var salary = parseFloat($('#yearly-salary').val());
		var percent = parseFloat($('#percent').val());
		var amount = $('#amount');
		
		
		if (!isNaN(salary) && !isNaN(percent)) {
			var calculate = salary * percent / 100;
			amount.text("$" + calculate.toFixed(2));
		}
		
	});
});

