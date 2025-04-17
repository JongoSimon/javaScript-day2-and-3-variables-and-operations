//? Variable Declarations
//! legacy variable keyword
var age = 30;
//! "blocked scope variable declaration"
let name = "Simon Jongo"
//! constant declaration for the variable that should not be updated. 
const isStudent = true;


//? Primitive data types
let temperature = 79.6; //* Number
let greeting = "Hello!" //* String
let isLoggedIn =false; //* Boolean
let emptyValue = null; //* Null
let notDefined; //*undefined

//? Basic setup for sending data to html console
console.log("Hey Jongo");

console.log(name);
console.log(isLoggedIn);

//? Arithmetic Operators
let numOne = 10;
let numTwo = 3;

let sum = numOne + numTwo
console.log(sum); //13
let difference = numOne - numTwo;
console.log(difference) //7
let product = numOne * numTwo;
console.log(product) //30
let quotient = numOne / numTwo;
console.log(quotient); //3.33
let remainder = numOne % numTwo;
console.log(remainder); //1

//? Increment and Decrement
//also numOne = numOne + 1
numOne++ //11
console.log(numOne)
numOne-- //10
console.log(numOne)

//?Assignment Operators
let numThree = 5;

numThree += 2;
console.log(numThree);
numThree *= 3;
console.log(numThree);