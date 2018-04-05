$(document).ready(function(){
	
	var img = localStorage.getItem("img-avatar");
	$("#miniatura-avatar").attr("src", window.location.origin + "/upload/"+ img);
	
})