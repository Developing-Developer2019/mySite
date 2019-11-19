function isEven(num) {
    return num % 2 === 0;
}

var n = (prompt("What number would you like to factorial check?"));

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(n));

function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
}

var num = 8;

function doMath() {
    num += 1;
    if (num % 5 == 0) {
        return true
    } else {
        return false
    }
}

num += 1;
doMath()