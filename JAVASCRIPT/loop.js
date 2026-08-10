


// While loop
// 1 - 10

// Recap
for ( let index = 1; index <= 10; index++){
     console.log(index);
}

// Implementation with the while loop
let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

// let password = prompt("Enter password");
// console.log(password);
// let attempts = 1;

// while (password != "pass123" && attempts <= 3) {
//     console.log(`Attempts: ${attempts}`);
//     password = prompt("Enter password");
//     attempts++;
// }

// if (password === "pass123") {
//     console.log("Access is granted");
// } else {
//     console.log("Too many attempts");
// }


// do while loop
/* 
===== syntax =======
do {
 code to be executed
} while (condition)

*/

// let password;
// do {
//     password = prompt("Enter password");
//     console.log(password);
// } while (password !== "travas22");


let num = 15;
do {
    console.log(`Current num value is: ${num}`);
    num++;
} while (num <= 10);


// For of Loop
// Syntax
/* 
for (let expression of iterableObject) {
    // code to be executed
}
*/

const fruitsArray = ["Grape", "Mango", "Pears", "Orange", "Banana"];
for (let fruit of fruitsArray) {
    console.log(fruit);
}

const names = ["Kelechi", "Caleb", "Andrew", "Joan"];
for (let name of names) {
    console.log(name);
}

const userName = "John Doe";
for (let letter of userName) {
    console.log(letter);
}

const nums = [1, 2, 3, 4, 5];
let total = 0;
for (let amount of nums) {
    total += amount;
    console.log(total);
}

let age = 18;

if (age >= 18) {
    age++;
    console.log(age);
}

console.log(age);


// For in loop
/* 
for (const expression in object) {
    // code to be executed
}
*/

const car = {
    make: "Toyota",
    model:"Venza",
    year: "2026"
}

for (const key in car) {
    console.log(key);
}