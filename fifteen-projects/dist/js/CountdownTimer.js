var timeInput = document.getElementById("timeInput");
var timeCounter = document.getElementById("timeCounter");
var deadline = new Date('dec 31, 2020 15:37').getTime();

var x = setInterval(function () {

  let now = new Date().getTime();
  let t = deadline - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);
  timeCounter.innerHTML = days + "d " +
    hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    timeCounter.innerHTML = "EXPIRED" + "Enter a new date.";
  }
}, 1000);

timeInput.addEventListener("change", function () {
  deadline = new Date(timeInput.value).getTime();
  timeCounter.classList.remove("hide");
})