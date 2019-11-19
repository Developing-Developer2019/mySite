// alert("First problem")
// console.log("Count from -10 to 20")
// var num = -10;
// while (num<20){
//     console.log(num);
//     num++;
// }

// alert("Next problem")
// console.log("Count even numbers between 10 and 40")

// var num = 10;
// while (num<=40){
//     if(num%2 === 0){
//         console.log(num);
//     }
//     num+=1;
// }

// alert("Next problem")
// console.log("Count ODD numbers between 300 and 334")

// var num = 300;
// while (num<=334){
// if (num % 2 !== 0){
//     console.log(num);
// }
// num+=1;
// }

// alert("Next problem")
// console.log("Print all numbers divisible by 5 and 3 between 5 and 50")

// // var num =3;
// // while (num<=50){
// //     if (num%5 == 0){
// //     }
// //     else if (num%3 ==0){
// //         console.log(num)
// //     }
// // }

// var num = 5;
// while (num<=50){
// if (num % 5 === 0 && num % 3 === 0){
//     console.log(num);
// }
// num+=1;
// }

//FOR LOOPS ----------------------------------------------------------

console.log("Count from -10 to 20 with for loop")
for(var count=-10;count<20; count ++){
    console.log(count);
}

for(var i =10; i<=40; i+=1){
    if(i%2 === 0)
    console.log(i)
}

for(var i=300;i<=334;i++){
    if(i%2 !== 0)
    console.log(i)
}

for(var i=3; i<=50;i++){
    if(i%5==0 && i%3==0)
    console.log(i);
}