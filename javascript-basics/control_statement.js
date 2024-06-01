// In javascript code is executed top to down and left to right
console.log(2)
console.log(1)

// conditional statements in javascript are executed if the condition is true


/* 

Syntax - 

if(condition){
    //our code 
}

condition will be evaluated to truth or false value

*/


let age = 12

if(age>=13){
    console.log("You are allowed")
    console.log("heyyyy")
    console.log("heyyyy")
    console.log("heyyyy")
    console.log("heyyyy")
}
console.log("heyyyy")


// 5 minute challenge ask user for their age using prompt and alert message if they are allowed or not allowed, age must be greater than 20
// let name = prompt("What is your name")
// alert(name)

// using if-else 

// let yourAge = prompt("how old are you")

/*
 if(condition){
    //when true
 }else{
    // when false
 }


*/

// if(yourAge > 20){
//     alert("You are allowed")
// }else{
//     alert("You are not allowed")
// }


// let's create age group

// 85 A
// 75 B
// 65 C 
// 55 D

// let mark = prompt("What is your score")

// if(mark >= 85){
//     alert("A")
// }else if (mark >= 75) {
//   alert("B");
// } else if (mark >= 65) {
//   alert("C");
// } else {
//   alert("D");
// }


//  The order of those statements matter

// if(mark>= 75){
//     alert("B")
// }else if(mark>= 85){
//     alert("A")
// }else{
//     alert("C")
// }


// switch 

let day = prompt("What is the day")

switch (day) {
  case "1":
    console.log("Monday");
    console.log("Maths 📑");
    break;
  case "2":
    console.log("Tuesday");
    console.log("English 📑");
    break;
  case "3":
    console.log("Wednesday");
    console.log("Physics 📑");
    break;
  case "4":
    console.log("Thursday");
    console.log("Chemistry 📑");
    break;
  case "5":
    console.log("Thursday");
    console.log("Biology 📑");
    break;
  default:
    console.log("I don't know the day");
}


// let day = 1
// if(day == 1){
//     console.log("Monday")
// }else if(day == 2){
//     console.log("Tuesday")
// }else{
//     console.log("I don't know th day")
// }


// Exercise - create your complete study plan using switch statement for all the 7 days, use day name as a  key "monday", "tuesday" ...