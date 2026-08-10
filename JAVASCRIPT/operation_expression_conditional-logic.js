//Exercises
//1.
let balance = 1000;

balance += 500; //This add 500 to the balance and increase it to 1500 by reassignment
balance -= 200; //This subtract 200 from the current balance of 1500 and reduce it to 1300 by reassignment
balance *= 2;   //This multiply the current balance by 2 and give 2600 by reassignment

//2.


function isEven(number){
    return number % 2 === 0;
}


//3
true && false // false
true || false // true
!true // false
false || false // false
true && true // true

//4
function getShippingFee(orderAmount) {
    if (orderAmount >= 20000) {
        return 0;
    } else if (orderAmount >= 5000) {
        return 1000;
    }

    return 1500;
}//The original bug is that the strictest condition was not put first

function withdraw(balance, amount){
    if(Number.isNaN(amount) || typeof amount !== 'number' || amount <= 0){
        return "Invalid amount"
    }
    if(amount > balance){
        return "Insufficient balance";
    }
    return "Withdrawal approved"
}


//6
const isAuthenticated = true;
const isOwner = false;
const isAdministrator = true;

if(isAuthenticated && (isOwner || isAdministrator)){
    console.log("Deletion allowed")
}


//7
function getTemperatureMessage(temperature) {
    if (temperature > 0) {
        return 'Above freezing';
    }

    if (temperature === 0) {
        return 'Freezing point';
    }

        return 'Below freezing';
} //Original bug was the assignment operator = instead comparision operator ===



//8

function validateRegistration(age, hasAcceptedTerms){
    if(!hasAcceptedTerms){
        return "You must accept the terms";
    }
    if(age < 18){
        return "You must be at least 18";
    }
    return "Registration allowed"
}
console.log(validateRegistration(18, true));

// 9. Explain in your own words

// Explain:

// The difference between && and || //&& is used when both condition must be met while || only need one condition to be met
// Why condition order matters in an else if chain // It matters because once javascript meets a true condition, it stops evaluating the others
// What a guard clause is // It handles an invalid or special cases early in the program
// Why age >= 18 differs from age > 18 // The formal include 18 while the latter exclude it