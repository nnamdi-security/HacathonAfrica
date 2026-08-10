// JavaScript Data Types, Coercion, Truthiness, and Equality

// Primitive data types

// JavaScript has seven primitive types:
string
number
boolean
undefined
null
bigint
symbol











// 3. undefined

// A variable has the value undefined when it exists but has not yet been assigned a meaningful value.

let selectedProduct;

console.log(selectedProduct); // undefined

// A function without an explicit return value also returns undefined:
function greet() {
    console.log('Hello');
}

const result = greet();

console.log(result); // undefined

//An absent object property also produces undefined:

const user = {
    name: 'Michael',
};

console.log(user.email); // undefined









// 4. null

// null represents an intentional absence of a value.

const incident = {
    assignedTo: null,
};

// Here, we deliberately state:

// The incident currently has no assigned user.

// Compare:

const firstIncident = {};
const secondIncident = {
    assignedTo: undefined,
};
const thirdIncident = {
    assignedTo: null,
};

// Although these can behave similarly in some conditions, they communicate different intentions.

// Missing property: no property was supplied
// undefined: no value is currently defined
// null: the absence of a value was deliberately recorded
// Historical JavaScript quirk
typeof null; // 'object'

//This result is a historic JavaScript mistake that cannot be changed without breaking old programs.

//null is still considered a primitive value.

//To check for null, use:

value === null

//Do not rely on:

typeof value === 'object'

//because arrays and normal objects also produce 'object'.









// 5. NaN

// NaN means:

// Not a Number

// However:

typeof NaN; // 'number'

// This sounds contradictory. NaN belongs to JavaScript’s number type, but it represents an invalid numeric result.

// Examples:

Number('hello'); // NaN









// Never compare directly with NaN

// This does not work:

NaN === NaN; // false

Use:

Number.isNaN(value)

Example:

const amount = Number('hello');

console.log(Number.isNaN(amount)); // true










// 6. Inspecting types with typeof

// The typeof operator returns a string describing a value’s type.

typeof 'Michael';  // 'string'
typeof 42;         // 'number'
typeof true;       // 'boolean'
typeof undefined;  // 'undefined'

// Objects and arrays:

typeof {}; // 'object'
typeof []; // 'object'

// Because arrays are specialised objects, use:

Array.isArray([])

Example:

const transactions = [];

console.log(Array.isArray(transactions)); // true

// Functions have a special typeof result:

typeof function () {}; // 'function'











// 7. Truthy and falsy values

// JavaScript can convert values into booleans when evaluating conditions.

if (value) {
    console.log('The value is truthy');
}

// The value does not need to be the literal boolean true. JavaScript converts it internally.

// Falsy values

// These values become false in a boolean context:

false
0
-0
0n
''
null
undefined
NaN

Examples:

Boolean(false);     // false
Boolean(0);         // false
Boolean('');        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false

//Truthy values
//Almost everything else is truthy:

Boolean('Michael'); // true
Boolean('false');   // true
Boolean(1);         // true
Boolean(-10);       // true
Boolean([]);        // true
Boolean({});        // true

Notice:

Boolean('false'); // true

// The string contains characters. JavaScript does not interpret the word "false" as the boolean value false.







// 8. Why truthiness matters

// Consider form validation:

const email = '';

if (!email) {
    console.log('Email is required');
}

// Because an empty string is falsy, !email becomes true.

// But truthiness can sometimes be too broad.

// Suppose zero is a valid amount:

const discount = 0;

if (!discount) {
    console.log('No discount was supplied');
}

// This message runs even though 0 may be a deliberately supplied value.

// A more precise check might be:

if (discount === undefined) {
    console.log('No discount was supplied');
}

// Professional code should distinguish between:

// “This value is falsy”
// “This value is missing”
// “This value is specifically zero”
// “This value is specifically null”





// 9. Type coercion

// Type coercion occurs when JavaScript converts one value type into another.

// There are two forms:

// Explicit conversion

// You deliberately request conversion:

Number('25');    // 25
String(25);      // '25'
Boolean(1);      // true
// Implicit conversion

// JavaScript converts automatically:

2 + '3'; // '23'

// This is implicit coercion.






// 11. Other arithmetic operators

// Operators such as -, *, and / do not perform string concatenation.

// They attempt numeric conversion:

'10' - 4; // 6
'5' * 2;  // 10
'20' / 4; // 5

// Invalid conversions produce NaN:

'hello' - 2; // NaN






// 14. Compound conditions

// Use && when all conditions must be true:

if (score >= 80 && score <= 100) {
    return 'Excellent';
}

// Use || when at least one condition being true is enough:

if (score < 0 || score > 100) {
    return 'Invalid score';
}

// Use ! to reverse a boolean result:

const isAuthenticated = false;

if (!isAuthenticated) {
    console.log('Please log in');
}







// 15. Short-circuit evaluation

// JavaScript may stop evaluating a compound condition once the result is already known.

// With &&
false && someFunction()

// Since the first value is false, the whole expression cannot become true. JavaScript does not need to run someFunction().

With ||
true || someFunction()

// Since the first value is true, the whole expression is already true.

// This can be useful, but it can also hide behaviour when developers do not understand it



//EXERCISE

//1. TYPE IDENTIFICATION
//State the result of each expression:
//typeof '500 //string
//typeof 500 //Number
//typeof false //boolean
//typeof undefined //undefined
//typeof null //object
//typeof [] //object

//2. Truthiness
//State whether each value is truthy or falsy:
'' //falsy
'0' //truthy
0 //falsy
[] //truthy
{} //truthy
null //falsy
undefined //falsy
'false' //truthy
NaN //falsy  //Although NaN has the type 'number', it converts to false in a boolean context

//3. Coercion prediction
//Predict each result and explain why:
5 + '5' //55
5 - '2' //3
'3' * '4' //12
1 + 2 + '3' //33
'1' + 2 + 3 //123
Number('25') //25
Number('hello') // NaN

//4. Equality
//Predict each result:
5 === '5' //false
5 == '5' //true
false === 0 //false
false == 0 //true
// === is generally preferred because it compares both type and value without performing coercion

//5. DEBUGGING CHALLENGE

//This function should return "Amount is required" only when no amount was provided.

function validateAmount(amount) {
    if (!amount) {
        return 'Amount is required';
    }

    return 'Amount accepted';
}

//The value 0 is allowed, but the function rejects it.

//Explain why and modify the condition so that only undefined or null is rejected.

//SOLUTION
function validateAmount(amount) {
    if (amount === undefined || amount === null) {
        return 'Amount is required';
    }

    return 'Amount accepted';
}
validateAmount(0); // 'Amount accepted'
//The original function rejects it because 0 is a falsy value

//6. REAL-WORLD CONVERSION TASK
//A form supplies these values:
const priceInput = '2500';
const quantityInput = '3';

const numericPriceInput = Number(priceInput);
const numericQuantityInput = Number(quantityInput)
const total = numericPriceInput * numericQuantityInput;
console.log(total);

//7. ARRAY VALIDATION
//Challenge: Write a condition that prints "No transactions found" only when "transactions" is an array and contains no items

const transactions = [];
function transactionStatus(array){
    if (Array.isArray(array) && array.length === 0){
        console.log("No transactions found")
    }
}
transactionStatus(transactions);

//8. EXPLAIN IN YOUR OWN WORDS
undefined //When no value has been assigned or returned
null //When value is intentionally left empty
'null' //A string containing 4 characters
NaN //Represent an invalid numeric result