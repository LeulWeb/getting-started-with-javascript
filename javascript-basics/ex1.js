// 1. Create a Js function that display name when called

function displayName(name, age) {
  console.log(name,age);
}

displayName("Eyobel",14)


// Note, The concept of Scope


let y= 7 // y is a global scope variable
function testScope() {
    let x =7
    // console.log(y, "Called inside a function")
    console.log(x, "Called inside a function")
}
// console.log(y, "Called outside of function")
//  console.log(x, "Called outside of function")

testScope()


// 2. create simple calc
// arrow function
let simpleCalc = (a, b)=>{
    let sum = a+b
    let product = a*b
    let difference = a-b
    let quotient = a/b
    console.log(a+"+"+b+"="+sum)
    console.log(a+"-"+b+"="+difference)
    console.log(a+"/"+b+"="+quotient)
    console.log(a+"*"+b+"="+product)
}


simpleCalc(10,20)


// concatenation of string
let name = "Girmay"
let fatherName ="Zerabruk"

let fullName = name + " "+ fatherName
let programmingLang = "Javascript"

function displayMessage(name, programmingLang) {
    let template =
      "Hello my name is " +
      name +
      " I am learning a programming language called" +
      programmingLang +
      " and I like i";

      console.log(template)
}

displayMessage("Giramy", "Javascript")
displayMessage("Eyobel", "PHP")
// console.log(fullName)



// calling function for exercsise 2
// simpleCalc()


// 3. Create a function that takes 2 numbers and return the sum of the 2 numbers



// N.B if you a string wth number , the + operation becomes concatenation
let z= 2
console.log(typeof z, "The type of z")
let w = "2"
console.log(typeof w, "The type of w")

let zw = z+w
console.log(typeof zw, "The type of zw")
console.log(zw, "the value of zw")



// 3. array to hold family member

// let fruitList =[ "orange","Banana","Pineapple","apple"]

// // In javascript array items are stored inside [] square brackets, when initializing a new array, 


//  5 temperature converter

function temperatureConverter(celsius){
  let fahrenheit = (celsius * 9/5)+32
  let kelvin = celsius + 273.15


  alert("F temperature"+ fahrenheit)
  alert("K temperature"+ kelvin)

  console.log("F temperature ", fahrenheit)
  console.log("K temperature ", kelvin)
}


// temperatureConverter(0)
let userInput = window.prompt("Temperature in celsius degrees")

console.log(userInput)

temperatureConverter(userInput)


let b = 12
let x = 4
// console.log(b!=7)  
console.log(null === undefined)
console.log("2"===2)


