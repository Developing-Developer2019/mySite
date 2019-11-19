var body = document.querySelector("body");
var isBlack = false;

setInterval(function(){
	if (isBlack){
		body.style.background="white";
    } else {
		body.style.background="black";
    }
	isBlack=!isBlack;
}, 1000);