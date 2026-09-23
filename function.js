// A function is a need block of code that performs a task. It prevents duplication and makes programs easier to manipulate.

// Function Decleration - Creating the function
function greet() {
    console.log("Wlecome to Javascript!");
}

//Functiuon calings
greet();
greet();


//  Function Parameters

function greet2(name) {
    console.log(`My name is ${name}`);
}

greet2(`John`);
greet2(`Mary`);
greet2(`Felix`);


//  "nmae is the parameters while "John, Mary and Felix" are the arguments.


//  Returning Values
function calculation(price, quantity) {
    return price * quantity;
}

let total = calculation(500, 3);

console.log(total);


//  Function Ecpression and Arrow Functions
const square1 = function (number) {
    return number * number;
} 

let answer = square1(7);

console.log(answer);

//  Arrow function version:
const square2 = (number) => {
    return number * number;
};

let answer2 = square2(4);
console.log(answer2);

//For a single returned expression, use a shorter form:
const square3 = (number) => number *number;

let answer3 = square3(5);
console.log(answer3);

//  PRATICAL EXAMPLE:

const fruits = [`Apple`, `Orange`, `Pear`];

const questions = [
    {
        question: "What does HTML stand for?",
        answer: "hypertext makeup languages"
    },
    {
        question: "Which language style a web page?",
        answer: "css"
    },
    {
        question: "Which keyword  creates a variable that can change?",
        answer: "let"
    }
];

let score = 0;

function askQuestion(questionData) {
    const userAnswer = prompt(questionData.question);

    if (userAnswer === null) {
        return false;
    }

    const cleanedAnswer = userAnswer.trim().toLowerCase();

    if (cleanedAnswer === questionData.answer) {
        alert("correct");
        score++;
    } else {
        alert(`Not quite. The asnwer is: ${questionData.answer}`);
    }

    return true;
}

for (const question of questions) {
    const shouldcontinue = askQuestion(question);

    if (!shouldcontinue) {
        break;
    }
}

alert(`Quiz finished. Your score is ${score} out of ${questions.length}.`);
