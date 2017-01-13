$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
});

$(document).ready(function() {
    $('.hover_mobile').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});