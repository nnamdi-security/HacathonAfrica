// Modules: import and export
// Organize Code Across Files
// Modules let you split your code into small, reusable files.

// Named Exports
// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js
import { add, multiply } from './math.js';
console.log(add(2, 3)); // 5

// Default Export
// greet.js
const greet = name => `Hello, ${name}!`;
export default greet;

// main.js
import greet from './greet.js';
console.log(greet('Lena')); // Hello, Lena!

// Named vs Default
// Named: use { }, file can have many
// Default: no { }, only one per file
// Why Modules Matter for React
// Every React component lives in its own file and uses import/export. Understanding this pattern is essential for any frontend project.