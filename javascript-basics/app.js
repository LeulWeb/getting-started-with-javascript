// comments

//In Javascript we can write comment for explaining our code, Comments are not read or executed by the compiler or interpreter. This applies for all programming language

// there are 2 types of comments in JS, single line comment and multiline comment 

// this is singe line comment 

/* this
        is 
            multiline comment 
            
*/


//-------------------------------------------------------------------------------------

// 1. Variables 


// creating variables
let x
let y


// assigning value to variable
x= 7

// we can create and assign a variable at the same time
let studentName = "Eyobel"
var student_name = "Girmsh"

// updating value of variable
studentName = "Eyobel Hagos";
name2 = "Girmay Zerabruk"

// constants variables
const PI = 3.141592653589793

// ----------------------------------------------------------------------------------
/* How to create variable names */

// variable names should not start with numbers, they should always start with letter or _
// do not use keywords, words reserved by the language
// Naming conventions for variables
// camelCaseType, snake_case, PascalCase

//------------------------------------------------------------------------------------
// 2. Datatypes
/* 
Every programming language has a datatype, that explains the type of data the variable will hold. some programming languages are strongly typed where as some are loosely or dynamically typed. 

let's explore the primitive datatype of javascript

1. String- sequence of characters that are inside "" or ''
2. Number - can be floating, or integer
3. boolean -  true or false
4. undefined
5. null
*/


// string
let fruit = "orange" // 'orange'
let grade = 'A'


// number
let totalStudent = 3 //integer
console.log(typeof totalStudent)

let someNumber = 3.1212312 //decimal 
totalStudent = "3" // this is not number this is string, why ? 
console.log(typeof totalStudent);


// to check the type data we can use typeof

// console.log(typeof grade)

// booleans 
//  isItRaining = "false" // this is string
let isItRaining = false // this is boolean
let isItSunny = true
console.log(typeof isItRaining)



// undefined - data types that are not defined
let companyName
console.log(typeof companyName)


// null
let myAge = null
console.log(typeof myAge)


// Array

let fruitList =[ "orange","Banana","Pineapple","apple"]

// In javascript array items are stored inside [] square brackets, when initializing a new array, and the items are separated by ,  comma

console.log(typeof fruitList)  //  are type objects

// how to know the length of any array, .length
console.log(fruitList.length) // 4 


//  how to access items inside the array
console.log(fruitList[0])
console.log(fruitList[3])


// how to change items value inside the array
fruitList[2]= "Mango"
console.log(fruitList)


// Brain storm 🤯
let myArray = ["Hello","Heyy"]

myArray[5]= "World"

console.log(myArray);  // this will fill the array be giving empty/ undefined values
console.log(myArray[2])


// how to add items to an array
console.log(fruitList)

fruitList.push("PineApple") // add item to the end of the array
console.log(fruitList) //

fruitList.pop() // remove the last item
console.log(fruitList)

fruitList.shift() // remove the very first element
console.log(fruitList) //

fruitList.unshift("Orange") // add the very first element
console.log(fruitList) //


// we can also define an array using constructor
let movies = new Array();
movies[0] = "Avengers"
movies[1] = "Avengers 2"
console.log(movies) //

// function return

function square(x){
    let result = Math.pow(x,2)
    // console.log(result) //

    // return result
}

let result = square(2)
console.log(result)