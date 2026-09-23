// Aloop repeats code until a condition is no longer true.

console.log(`My name is john`);
console.log(`My name is john`);
console.log(`My name is john`);


// For loop

for (let i = 0; i < 10; i++) {
    console.log(`My name is Mary ` +i);
}

/*

for (start; condition; update) {
    // repeated code
}

*/


// While Loop
// Repeats while a condition is true.
let j = 0;

while (j < 5) {
    console.log(`my name is obi` +j);
    j++
}

// do...Whlie loop
// Executes the code at least once before checking the condition.

let number = 1;

do {
    console.log(number);
    number++;
}
while (number <= 5);