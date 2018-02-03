$(document).ready(function () {
	$("#menu").on("click", function(){
		console.log("working!");
		if ($(".slideOut").hasClass("active")) {
			$(".slideOut").removeClass("active");
			$(".slideOut").hide(400);
		} else{
			$(".slideOut").addClass("active");
			$(".slideOut").show(400);
		}
	});


});