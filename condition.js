// IF Statement

const age1 = 19;

if (age1 >= 18) {
    console.log("you are eligible to vote.");
}


// Logical Operators

const age2 = 20;
const hasValidID = true;

if (age>=18 && hasValidID) {
    console.log("Entry allowed.");
}


// if.else

const score1 = 65;

if (score1 >= 50) {
    console.log("you passed");
} else {
    console.log("you did not pass");
}


// if..else if..else

const score2 = 62;

if (score2 >= 70) {
    console.log("Grade A");
} else if (score2 >= 60) {
    console.log("Grade: B");
} else if (score2 >= 50) {
    console.log("Grade: c");
} else {
    console.log("Grade: F");
}


// Switch statements

const day = "Sunday";

switch (day) {
    case "Monday":
        console.log("start the week strongly.");
        break;

        case "Friday":
            console.log("The weekend is near.");
            break;

            case "Saturday":
            case "Sunday":
                console.log("Enjoy your weekend.");
                break;
                
            default:
                console.log("It is a reh=gular weekday.");    
}

