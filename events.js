// An event is something that happens on a webpage, such as a mouse click, a key press, a form submission, or the page finishing loading. An event is an action or occurrence detected by the browser. Events may be caused my the user, the browser, or the webpage itself.

// JavaScript can detect these events and respond with appropriate actions. This is called Event-Driven Programming.



// USING EVENTS WITH FUNCTIONS

// Method 1: Using an Event Property
let button = document.getElementById("btn"); 

button.onclick = function () { 
    alert("Button Clicked!"); 
};

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

// Double click Events

let button02 = document.getElementById("changeBtn2")

button2.addEventListener("dblclick", function () { 
    alert("Double Click Detected!"); 
});


// MOUSE EVENTS

// Mouse over
let image = document.getElementById("photo"); 

image.addEventListener("mouseover", function () { 
    image.style.border = "5px solid blue"; 
});

// Mouse out
image.addEventListener("mouseout", function () { 
    image.style.border = ""; 
});

// Mouse move
document.addEventListener("mousemove", function () { 
    console.log("Mouse is moving"); 
});


// Practical Example: Hover Effect

let message = document.getElementById("message");

message.addEventListener("mouseover", function () { 
    message.style.color = "red"; 
}); 

message.addEventListener("mouseout", function () { 
    message.style.color = "black"; 
});



// KEYBOARD EVENTS
// Keyboard events occur when users press keys.

// Key down
document.addEventListener("keydown", function () { 
    console.log("A key was pressed"); 
});

// Key up
document.addEventListener("keyup", function () { 
    console.log("Key released"); 
});


// Display Typed Characters
let input = document.getElementById("username"); 

input.addEventListener("keyup", function () { 
    console.log(input.value); 
});
//Every key press updates the console with the current input.


// FORM EVENTS

let form = document.getElementById("myForm"); 

form.addEventListener("submit", function(event){ 
    event.preventDefault(); 
    alert("Form Submitted!"); 
});

// Why preventDefault()?
// Normally, submitting a form reloads the page.
// event.preventDefault() stops that behavior so you can validate the data or perform other actions first.


// Detecting Which Key Was Pressed
document.addEventListener("keydown", function(event){

    console.log(event.key);

});