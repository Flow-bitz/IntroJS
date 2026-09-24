// WHAT IS DOM?
// DOM stands for Document Object Model.
// It is a programming interface that represents every HTML element on a webpage as an object.

document.getElementById("head1").textContent = "Welcome to JavaScript";

document.title = "JavaScript DOM";

// SELECTING PAGE ELEMENT


// Get Element by Class

let fruits = document.getElementsByClassName("fruit");

console.log(fruits);


// Get Element by Teg Name

let paragraphs = document.getElementsByTagName("p");


// querySelector()
// Returns the first matching element.

let title = document.querySelector(".title");

// querySelectorAll()
// Returns all matching elements.

let items = document.querySelectorAll(".fruit");


// ADDING CONTENTS TO A PAGE
// Using textContent
// Changes only text.

document.getElementById("message").textContent = "Welcome Students";


// Using innerHTML
// Allows HTML to be inserted.

document.getElementById("message").innerHTML = "<strong>Welcome Students</strong>";


// CREATING NEW ELEMENT
let paragraph = document.createElement("p");

// Adding text
paragraph.textContent = "This is a new paragraph.";

// Adding to the page
document.body.appendChild(paragraph);


// REMOVING ELEMENTS
let item = document.getElementById("removeMe");

item.remove();