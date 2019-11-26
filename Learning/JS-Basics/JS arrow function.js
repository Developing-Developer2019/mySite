var firstCar = {
    make: "Subaru",
    color: "Blue"
};

var secondCar = {
    make: "ferrari",
    color: "Red"
};

//x points to the first key of the object
for (var x in firstCar) {
    console.log(firstCar[x])
};

for (var x in secondCar) {
    console.log(secondCar[x])
};

var firstName = prompt("What's your first name?");
var age = prompt("How old are you?");
var job = prompt("What's your job? (Leave blank if no job)");
var drink = age >= 18 ? 'beer' : 'juice';

switch (job) {
    case job:
        console.log(firstName + " is " + age + " and can have " + drink);
        console.log(firstName + " has a job as a " + job);
        break;
    case "":
        console.log(firstName + " is " + age + " and can have " + drink);
        console.log(firstName + " doesn't do anything.")
        break;
}