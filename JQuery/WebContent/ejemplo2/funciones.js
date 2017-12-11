$(document).ready(
		function() {
			$("#titulo1").click(
					function() {
						$("#titulo1").css("color", "#ff0000").css(
								"background-color", "#ffff00").css(
								"font-family", "Courier");
					});
			$("#titulo2").click(
					function() {
						$("#titulo2").css("color", "#ffff00").css(
								"background-color", "#ff0000").css(
								"font-family", "Arial");
					});
		});