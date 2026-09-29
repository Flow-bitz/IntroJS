// An event is something that happens on a webpage, such as a mouse click, a key press, a form submission, or the page finishing loading. An event is an action or occurrence detected by the browser. Events may be caused my the user, the browser, or the webpage itself.

// JavaScript can detect these events and respond with appropriate actions. This is called Event-Driven Programming.



// USING EVENTS WITH FUNCTIONS

// // Method 1: Using an Event Property
// let button = document.getElementById("btn"); 

// button.onclick = function () { 
//     alert("Button Clicked!"); 
// };

// Method 2: Using addEventListener() (Recommended)
let button1 = document.getElementById("btn"); 

button1.addEventListener("click", function () {
     alert("Welcome to JavaScript!"); 
});

// Click Events
let button2 = document.getElementById("changeBtn"); 
let Head1 = document.getElementById("head1");

button2.addEventListener("click", function () { 
    Head1.textContent = "JavaScript Events"; 
});
