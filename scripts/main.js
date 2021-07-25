console.log("load");

$(".nav-link").on("click", function(){
	$(".nav-link").toggleClass("active", false);
	$(this).toggleClass("active", true);
});