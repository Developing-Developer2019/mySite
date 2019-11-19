var button1 = document.querySelector("button");
var body =document.querySelector("body");
var isWhite=false;

button1.addEventListener("click", function(){
    if (isWhite){
        body.style.background = "purple";
    }
    else {
        body.style.background ="white";
    }
    isWhite=!isWhite;
})