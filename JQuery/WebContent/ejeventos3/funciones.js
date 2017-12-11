$(document).ready(function() {
	$("a").hover(function() {
		$(this).css("background-color", "#ff0");
	}, function() {
		$(this).css("background-color", "#fff");
	});
});