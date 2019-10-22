$(function() {

	// fixed header
	let header = $('#header');
	let scrollPos = $(window).scrollTop();
	let nav = $('#nav');

	function checkScroll(scrollPos) {
		if(scrollPos > 0) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	};

	checkScroll(scrollPos);

	$(window).on('scroll load resize', function() {
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos);
	});



	// navToggle
	$('#navToggle').on('click', function(event){
		event.preventDefault();

		nav.toggleClass('show');
	})
})