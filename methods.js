// //  LENGTH
// //  Returns the number of characters.

// let text = "Javascript";

// console.log(text.length);



// //  //  UPPERCASE
// //  //  Converts text to uppercase.

// let word1 = "javascript";

// console.log(word1.toUpperCase());


// //  LOWERCASE
// //Converts text to lowercase.

// let word2 = 'HELLO';

// console.log(word2.toLowerCase());

// //TRIM
// // Removes spaces before and after text.
// let name = "    John    cane";

// console.log(name.trim());

// //  INCLUDE
// //  Checks if text contains another text.
// let sentence1 = "I love Javascript";

// console.log(sentence1.includes("Javascript"));

// //  REPLACE
// //  Replace part of a string.
// let sentence2 = "I like cats.";

// let newSentence = sentence2.replace("cats","dogs");

// console.log(newSentence);


// //   REAL-LIFE EXAMPLE USING INCLUDES
//  Let email = prompt("Enter your email:");

//  if (email.includes("@")) {
//      alert("valid email format.");
// } else {
//      alert("Invalid email.");    
// }




// //  THE MATH OBJECT
// //  The Math object provides useful mathematical methods.

// //  Rounding to the nearest whole number.
// console.log(Math.round(5.7));

// //Rounding downwards
// console.log(Math.floor(5.9));

// //Rounding Upwards
// console.log(Math.ceil(5.1));

// //  Maximum Number
// console.log(Math.max(3, 8, 12, 5));

// //  minimun Number
// console.log(Math.min(3, 8, 12, 5));

// //  Generates a random number between 0 (inclusive) an 1 (exclusive).
// console.log(Math.random());     // 0.736291

// //  Random NNUmber Between 1 and 10
// let randomNumber = Math.floor(Math.random() * 10) + 1;

// console.log(randomNumber);

// //  Raises a number to a power.
// console.log(Math.pow(2, 5));       //32

// //  Returns the squre root.
// console.log(Math.sqrt(81));



// DATE AND TIME

// Creating a Date
let today = new Date();

console.log(today);

// Getting year
console.log(today.getFullYear());

// Getting month
console.log(today.getMonth());

// Getting Exact Month
console.log(today.getMonth() + 1);

// Getting the day of the month
console.log(today.getDate());

// Getting the day of the week
console.log(today.getDay());


// PRACTICAL EXAMPLE: DIGITAL GREETING
let hour = new Date().getHours();

if (hour < 12) {
    console.log("Good Morning");
} 
else if (hour < 18) {
    console.log("Good Afternoon");
} 
else {
    console.log("Good Evening");
}
