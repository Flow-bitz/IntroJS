// LOGICAL OPERATORS

// Comparison Operators

// Loose Equality
console.log(5 == "5"); // true: converts types

// Strict Equality
console.log(5 == "5"); // false: number is not a string

// Loose Not Equal
console.log(5 != "5"); // false: converts types


// Strict Not Equal
console.log(5 !== "5"); // true: number is not a string



//Logical operators combine multiple conditions.

// AND Operators (&&)
// Both conditions must be true
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);

// OR OPerators (||)
// OOnly one condition needs to be true
let isWeekend = false;
let isHoliday = true;

console.log(isWeekend || isHoliday);

// NOT Operators (!)
// Reverses a Boolen value
let loggedIn = false;

console.log(loggedIn);