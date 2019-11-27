//First JavaScript lesson
console.log("JavaScript 1");


// Performing a task
function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

greet('Mike', 'Jones');
greet('Jess', 'Evans');

// Calculating a value
function square(number) {
    return number * number;
}
console.log(square(5));

console.log('Testing the "quoted text" method')

let numFinal = 8;

function shirtSize() {
    if (numFinal < 5) {
        return "You need a extra small size"
    } else if (numFinal < 10) {
        return "You need a small size"
    } else if (numFinal < 20) {
        return "You need a medium size"
    } else if (numFinal < 30) {
        return "You need a large size"
    } else {
        return "You need an extra large size"
    }
}

console.log(shirtSize());

var names = ["Hole-in-one!", "Eagle!", "Birdie!", "Par!", "Bogey!", "Double Bogey!", "Go home!"]

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return name[6]
    }
}
console.log(golfScore(5, 4));