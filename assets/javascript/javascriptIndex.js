$(document).ready(function () {
	$("#menu").on("click", function(){
		console.log("working!");
		if ($(".slideOut").hasClass("active")) {
			$(".slideOut").removeClass("active");
			$("#links").fadeOut(100);
			$("#slideSignIn").fadeOut(100);
			
		} else{
			$(".slideOut").addClass("active");
			$("#links").delay(100).fadeIn(300);
			$("#slideSignIn").delay(100).fadeIn(300);
		}
	});

});