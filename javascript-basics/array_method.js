// https://ink-book-7a9.notion.site/JavaScript-7deb50e0267542bbb3619a7449c9d933

let a1 = [1,2,3]

// push
a1.push(24)
console.log(a1)

//pop 
a1.pop()
console.log(a1)

// unshift
a1.unshift(0)
console.log(a1)

// shift
a1.shift()
console.log(a1)


let car = ["BMW","FORD","Toyota","Mercedes","Honda"]

let slicedCars = car.slice(0,2)
console.log(car)
console.log(slicedCars)

// ["BMW", "Toyota"]
// ["BMW","FORD","Toyota","Mercedes","Honda"]
//["BMW","FORD"]

// HOF

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const innerFunction = makeAdder(5);
console.log(innerFunction(2)); // 7


// In js  a function input,/ argument and or output can be function
function OuterFunction(evenOddCheckerFun, number){
    evenOddCheckerFun(number)
}

function checkEvenOrOdd(number){
    if(number % 2 == 0 ){
        console.log('Even')
    }else{
        console.log('odd')
    }
}

OuterFunction(checkEvenOrOdd,4)



// Map


let list = [1,2,3]


// function(){}   ()=>{}
let doubledList = list.map((item)=>{
    return item*2
})

console.log(doubledList)