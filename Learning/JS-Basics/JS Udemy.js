let height;
height = prompt("What is your height in metres?");
let weight;
weight = prompt("What is your weight in Kilograms?");
let bmi;

bmi = weight / (height * height);

if (bmi <= 18) {
    alert("You are underweight.")
} else if (bmi => 25) {
    alert("You are healthy.")
} else {
    alert("You are overweight.")
}