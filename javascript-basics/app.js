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