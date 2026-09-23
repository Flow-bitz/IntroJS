//Objects in javascript are collections of key-value pairs. Each key is a string (or symbol) and each value can be any data type.

const student = {
    name: "John",
    age: 20,
    Course: "Computer science",
    isRegistered: false,
}

//Reading a value from an objrect
console.log(student.name);      // Output: John

console.log(student); //Full Object

//Changing a value in an object
student.Course = "Mathematics";
console.log(student); //Output: Mathematics

//Adding a new key-value pair to an object
student.address = "Abuja";
console.log(student); // Output: Abuja

// Removing a key-value pair to an object
delete student.isRegistered;
console.log(student.isRegistered); // output: undefined
console.log(student);

//Finding the number of key-value pairs in an object
console.log(Object.keys(student).length); // Output:4

//Pratical Example: product information
const product = {
    name: "laptop bag",
    price: 10000,
    quantity: 5,
}

const totalCost = product.price * product.quantity;

console.log(`item: ${product.name}`);
console.log(`total: #${totalCost}`);

//Writting to th webpage using Arrays
const foods = ["jellof rice", "Suya", "Plantain", "Egusi Soup"];

document.write("<ul>");

document.write(`<li>${foods[0]}</li>`);
document.write(`<li>${foods[1]}</li>`);
document.write(`<li>${foods[2]}</li>`);
document.write(`<li>${foods[3]}</li>`);

document.write("</ul>");

document.write(`<p>${foods.join(",")}</p>`);
