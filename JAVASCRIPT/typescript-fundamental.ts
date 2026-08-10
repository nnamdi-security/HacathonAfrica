// Inference and Clear Labels
// TypeScript can often infer a type from the value you assign, so you do not always need to write it yourself. If you set let count = 3, TypeScript knows count is a number. Sometimes, though, an explicit annotation is helpful, especially when the type is not obvious or when you want to be very clear to other developers. In small frontend examples, this balance keeps code short without losing safety.

// Typed Functions
// Functions become more reliable when you type their parameters and return values. A function that formats a price can accept a number and return a string, and TypeScript will check that promise. This is useful in frontend code for event handlers, data formatting, and small utility functions. If you pass the wrong kind of value, the type checker warns you before the code reaches the user.

// Interfaces and Type Aliases
// Interfaces and type aliases both help describe object shapes. They are useful when you want to define repeated data, such as a product with id, title, and price, or a button config with label and disabled. In frontend projects, these shared descriptions keep components and data structures aligned. When the shape changes, TypeScript can point to the places that need updating, which reduces hidden bugs.

// Unions and Optional Fields
// Sometimes a value can be one of several types. Union types let you write that clearly, such as string | number for an id that may come from different sources. Optional properties are also common in frontend data, because not every object has every field. A user may have a name, but a profile picture may be optional. This makes code flexible while still giving useful checks.

// Narrowing in Small UI Cases
// When a value has more than one possible type, TypeScript uses narrowing to figure out the exact one before a line of code runs. Basic type guards, like checking typeof value === 'string', help you handle each case safely. This is practical in small frontend examples such as input values, API responses, or conditional rendering. Instead of guessing, your code can make a simple check and continue with confidence.


// The Building Blocks of TypeScript
// TypeScript gives you a set of core types to describe your data clearly.

//Primitive Types
let username: string = "Alice";

let age: number = 30;

let isLoggedIn: boolean = true;

//Arrays
let scores: number[] = [90, 85, 78];

let names: string[] = ["Alice", "Bob"];

//Objects
let user: { name: string; age: number } = {
  name: "Alice",
  age: 30
};

//Tip: Think of types as labels. You are telling TypeScript what kind of data to expect so it can warn



// Making Functions Safer with Types
// Adding types to functions tells TypeScript exactly what goes in and what comes out.

//Typed Parameters
function greet(name: string): string {
  return `Hello, ${name}!`;
}

//Void Return Type
//Use void when a function returns nothing:

function logMessage(msg: string): void {
  console.log(msg);
}

//Arrow Functions
const add = (a: number, b: number): number => a + b;

//Why This Matters
//If you pass the wrong type, TypeScript warns you before you run the code:

greet(42); // ❌ Error: Argument of type 'number' is not assignable to 'string'
//Always annotate function parameters. TypeScript can often infer the return type, but being explicit makes your code easier to read.



// Helping TypeScript Know the Exact Type
// When you use a union type, TypeScript needs help knowing which type you are working with at a specific moment. This is called narrowing.

// Using typeof
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // safe: string method
  } else {
    console.log(id.toFixed(2)); // safe: number method
  }
}

//Using in for Objects
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function speak(animal: Cat | Dog) {
  if ("meow" in animal) {
    animal.meow();
  } else {
    animal.bark();
  }
}
//Type guards are just normal JavaScript checks (typeof, in, instanceof) that TypeScript



// TypeScript as Your Safety Net
// One of the biggest wins of TypeScript in frontend development is catching errors before the browser ever runs your code.

// Imagine you have a form component that expects a user object:

interface User {
  name: string;
  age: number;
  email?: string;
}

function renderProfile(user: User): string {
  return `${user.name}, age ${user.age}`;
}

// TypeScript catches this mistake immediately:
renderProfile({ name: "Alice", age: "thirty" }); // ❌ Error!


interface UserProfile {
  name: string;
  age: number;
  bio?: string;
  status: "active" | "inactive";
}

function describeUser(user: UserProfile): string {
  let summary = `Name: ${user.name}, Age: ${user.age}, Status: ${user.status}`;

  if (typeof user.bio === "string") {
    summary += `, Bio: ${user.bio}`;
  }

  return summary;
}

const result = describeUser({
  name: "Nnamdi",
  age: 28,
  bio: "Great",
  status: "active",
});

console.log(result);







// React Hooks and Side Effects
// React Hooks let function components do more than show data. They help you keep state, react to user actions, and run side effects without switching to class components. In modern React, hooks make code easier to read and reuse. A small app can use them to track form input, load data, and update the screen when something changes. This keeps the UI simple and focused, while the logic stays close to the component that needs it. Hooks are now a core part of everyday React work.


// What Is a Side Effect?
// A side effect is anything your component does outside of rendering — like fetching data, updating the document title, or setting a timer.

// useEffect Syntax
useEffect(() => {
  // your side effect here
  document.title = 'Hello!';
}, []);
// The first argument is a function containing your side effect.
// The second argument is the dependency array — it controls when the effect runs.

//When Does useEffect Run?
//Fetching Data Example
useEffect(() => {
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
}, []); // runs once when component mounts
// Think of useEffect as saying: "After rendering, do this."


// Why Cleanup Matters
// Some effects start something that needs to stop — like timers, subscriptions, or event listeners. Without cleanup, you get memory leaks.

// How to Clean Up
// Return a function from your useEffect — React calls it before the component unmounts or before the effect re-runs.

useEffect(() => {
  const timer = setInterval(() => {
    console.log('tick');
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []);


//COMMON CLEANUP SCENARCIOS
//Efect types       Cleanup Needed
//setInterval       clearInterval
//Event listener    removeEventListener
//Websocket         .close()
//API subscription  unsubscribe call

//Rule of thumb: If you start something in an effect, always think about how to stop it



// Sharing Data with useContext
// The Problem: Prop Drilling
// Passing data through many component layers is called prop drilling — it's messy and hard to maintain.


// The Solution: useContext
// useContext lets any component access shared data directly — no matter how deep it sits in the tree.

// 3 Steps to Use Context

// Step 1: Create the context
const ThemeContext = React.createContext();

// Step 2: Provide the value at the top
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Dashboard />
    </ThemeContext.Provider>
  );
}

// Step 3: Consume it anywhere below
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}

//When to Use Context vs Props
//Use Props         Use Context
//1-2 levels deep   3+ levels deep
//Data is local     Data is global (theme, user, language)
//Simple flow       Many component need same data

