var p1 = document.getElementById("Player1");
var p2 = document.getElementById("Player2");
var reset = document.getElementById("Reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var p = document.getElementById("pText");

p1.addEventListener("click", function () {
    if (!gameOver) {
        p1score++;
        if (p1score == winningScore) {
            p1display.classList.add("winner");
            gameOver = true;
        }
        p1display.textContent = p1score;
    }

})

p2.addEventListener("click", function () {
    if (!gameOver) {
        p2score++;
        if (p2score == winningScore) {
            p2display.classList.add("winner");
            gameOver = true;
        }
        p2display.textContent = p2score;
    }
})

reset.addEventListener("click", function () {
    p1score = 0;
    p2score = 0;
    gameOver = false;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
})

numInput.addEventListener("change", function(){
    p.textContent = numInput.value;
    winningScore = numInput.value;
    reset();
})