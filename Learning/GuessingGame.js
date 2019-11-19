var secretNumber=7
var number = Number (prompt("Guess a number"));{   
}
if(number<secretNumber){
    alert("Guess again, too low!")
    console.log("Guess again, too Low");
}
else if(number>secretNumber){
    alert("Guess again, too high!")
    console.log("Guess again, too high!");
}
else{
    alert("That's right!")
    console.log("That's right!"); 
}