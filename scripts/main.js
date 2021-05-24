console.log("load");

$(".nav-link").on("click", function(){
	$(".nav-link").removeClass("active");
	$(this).toggleClass("active");
});