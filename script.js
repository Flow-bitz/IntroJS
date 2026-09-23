console.log("Welcome to javascript...");

// Data types
let name = "john";
let course = "computer science";
let message = "welcome to javascript";

//Numbers
let age = 22;
let price = 44.5;
let total = 15;

//Booleans
let isloggedIn = true;
let hasPaid = false;

//checking data types
console.log(typeof name);        //string
console.log(typeof age);        //number
console.log(typeof hasPaid);   //Boolean

//variables
//variables are containers for strong data

let firstName = 'victor';
let secondName = 'Albert';
let fullName = firstName + ' ' + secondName;

age = 18;

console.log(age);


// Writing with Data Types and Variables
// Joining text: concatenation
console.log(fullName);
console.log('My name is ' + fullName + ' and i am ' + age + ' years old.');

//Template literal
//We use backtics for template literal
console.log(`my name is ${fullName} and i am ${age} years old.`);

//performing Calculations
let itemPrice = 2500;
let quantity =3;
let totalCost = itemPrice * quantity;

console.log(totalCost);        //7500


//Asking for informations using prompt
console.log(`total ${itemPrice}.`);


let num1 = prompt("input first number here:");
let num2 = prompt("input second number here:");

//Convert to number (prompt returns text)
let sum = Number(num1) + Number(num2);

alert("sum =  " + sum);