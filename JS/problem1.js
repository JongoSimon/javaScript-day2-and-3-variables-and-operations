var age = 30; // Replace 25 with your actual age
let firstName = "Jongo"; 

const isStudent = true;

// Print each variable to the console
console.log("Age:", age);
console.log("First Name:", firstName);
console.log("Is Student:", isStudent);

// Numeric value
let temperature = 23.5; // Number (can be integer or decimal)

// String value
let greeting = "Hello, world!"; // String (text)

// Boolean value
let isLoggedIn = true; // Boolean (true or false)

// Null value (explicitly assigned nothing)
let emptyValue = null; // Null (intentional absence of value)

// Undefined (declared but not assigned)
let notDefined; // Undefined (no value assigned)

// Symbol (unique identifier)
let uniqueId = Symbol("id"); // Symbol (unique and immutable)

// Log all variables to the console
console.log("Temperature:", temperature, typeof temperature);
console.log("Greeting:", greeting, typeof greeting);
console.log("Is Logged In:", isLoggedIn, typeof isLoggedIn);
console.log("Empty Value:", emptyValue, typeof emptyValue);
console.log("Not Defined:", notDefined, typeof notDefined);
console.log("Unique ID:", uniqueId, typeof uniqueId);

// Global variable (from Problem 1)
var age = 30;

// Function with local variable
function displayAge() {
  let localAge = 30; // Local scope
  console.log("Inside function - localAge:", localAge); // ✅ Logs 30
}

// Test cases
displayAge(); // Call the function
console.log("Outside function - global age:", age); // ✅ Logs 30