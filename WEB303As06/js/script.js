/*
    Assignment 06
	
*/

$(document).ready(function () {
	
	//tabs
	$('.tab-list').each(function() {
		var $this = $(this);
		var $tab = $this.find('li.active');
		var $link = $tab.find('a');
		var $panel = $($link.attr('href'));
		
		$this.on('click', '.tab-control', function(e) {
			
			e.preventDefault();
			var $link = $(this);
			var id = this.hash;
			
			if (id && !$link.parent().is('active')) {
				$panel.removeClass('active');
				$tab.removeClass('active');
				$panel = $(id).addClass('active');
				$tab = $link.parent().addClass('active');
			}
		});
	});
	
	//accordions
	$('.accordion').on('click', '.accordion-control', function(e) {
		e.preventDefault();
		
		$(this)
		  .next('.accordion-panel')
		  .not(':animated')
		  .slideToggle();
	});
	
});

