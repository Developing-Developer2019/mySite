var timeInput = document.getElementById("timeInput");
var timeCounter = document.getElementById("timeCounter");
var deadline = new Date('dec 31, 2020 15:37:25').getTime();
// var deadline = document.getElementsById("timeInput").getTime();
var hide = document.querySelector(".hide");

var x = setInterval(function () {

    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    timeCounter.innerHTML = days + "d " +
        hours + "h " + minutes + "m " + seconds + "s ";
        if (t < 0) {
            clearInterval(x);
            timeCounter.innerHTML = "Expired";
        }
}, 1000);

timeInput.addEventListener("change", function () {
    deadline = new Date(timeInput.value).getTime();
    timeCounter.classList.toggle(".hide");
})