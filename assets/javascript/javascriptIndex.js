$(document).ready(function () {
	$("#menu").on("click", function(){
		console.log("working!");
		if ($(".slideOut").hasClass("active")) {
			$(".slideOut").removeClass("active");
			$("#links").fadeOut(300);
			
		} else{
			$(".slideOut").addClass("active");
			$("#links").delay(600).fadeIn(800);
		}
	});

});