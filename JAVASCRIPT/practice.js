function multiply(a, b){
    console.log(a * b)
}
const answer = multiply(4, 5);
console.log(answer); // Every JavaScript function without an explicit return value returns undefined.

function classifyScore(score) {
    if (
        typeof score !== 'number' ||
        Number.isNaN(score) ||
        score < 0 ||
        score > 100
    ) {
        return 'Invalid score';
    } else if (score >= 80 && score <= 100) {
        return 'Excellent';
    } else if (score >= 60 && score <= 79) {
        return 'Good';
    } else if (score >= 40 && score <= 59) {
        return 'Pass';
    } else {
        return 'Fail';
    }
}

const result = classifyScore(101);

console.log(result);

// A MORE SIMPLIFIED WAY
function classifyScore(score) {
    if (
        typeof score !== 'number' ||
        Number.isNaN(score) ||
        score < 0 ||
        score > 100
    ) {
        return 'Invalid score';
    } else if (score >= 80) {
        return 'Excellent';
    } else if (score >= 60) {
        return 'Good';
    } else if (score >= 40) {
        return 'Pass';
    } else {
        return 'Fail';
    }
}

const result = classifyScore(101);

console.log(result);

const studentScores = [75, 87, 46, 89, 60, 95];

function getResult(score){
    return score >= 60? 'Pass' : 'Fail';
}
studentScores.forEach((score) =>{
    const result = getResult(score);
    console.log(`Scores: ${score} -> ${result}`)
})


const A = [1, 2, 3, 4, 5, 5, 7, 9, 8, 10, 12];
const  B = [1, 3, 2]
let number = 1;
while(number < B.length){
    if(!B.includes(number)){
        console.log(number)
    }else{
        console.log(B[B.length -1] + 1);
    }
    number++
}


const menu = [
    {name: "Margherita", price: 20},
    {name: "Pepperoni", price: 30},
    {name: "Hawaiian", price: 40},
    {name: "Veggie", price:25}
]
// Challenge: Write a function called "addNewPizza" which takes a pizza object and add it to the menu



const products = [
    {
        name: "Laptop",
        price: 500000,
        category: "Electronics"
    },
    {
        name: "Office Chair",
        price: 85000,
        category: "Furniture"
    },
    {
        name: "Backpack",
        price: 25000,
        category: "Accessories"
    },
    {
        name: "Headphones",
        price: 45000,
        category: "Electronics"
    }
];

products.forEach((product, index) => {
    console.log(`${index + 1}. product name: ${product.name} - Price: ${product.price}`);
})