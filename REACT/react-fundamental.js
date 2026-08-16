// JSX: Writing HTML Inside JavaScript
// JSX Makes UI Code Readable
// JSX stands for JavaScript XML. It lets you write HTML-like code directly inside JavaScript files.

// JSX example
function Greeting() {
  return <h1>Hello, learner!</h1>;
}

//JSX vs HTML — Key Differences
//HTML                      JSX
//class="box"               classname="box"
//for="name"                htmlfor="name"
//self-close optional       Must self-close: <img />
//Inline style as string    Style as object: style={{color: 'red'}}


// Embedding JavaScript in JSX
// Wrap any JavaScript expression in curly braces {}:

const name = "Alex";
return <p>Welcome, {name}!</p>;
// Output: Welcome, Alex!

// One Root Element Rule
// Every component must return one parent element. Wrap siblings in a <div> or an empty <> fragment:

return (
  <>
    <h1>Title</h1>
    <p>Subtitle</p>
  </>
);
//Remember: JSX is transformed into regular JavaScript by a tool called Babel before the browser reads it.


// Passing Data with Props
// Props Connect Components
// Props (short for properties) let you pass data from a parent component down to a child component — like arguments to a function.

// Parent passes data
function App() {
  return <UserCard name="Maria" age={28} />
}

// Child receives data via props
function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
// Key Rules About Props
// Props flow one way: parent → child only
// Props are read-only — never modify them inside the child
// You can pass any value: strings, numbers, arrays, functions, even other components

// Default Props
// Set a fallback value if a prop is not provided:

function Button({ label = "Click me" }) {
  return <button>{label}</button>;
}

//Managing State with useState
// State is data that can change over time. When state changes, React automatically re-renders the component to show the updated UI.

// The useState Hook
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // start at 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
    </div>
  );
}

//Two Things useState Returns
//1. The current value – count holds the data
//2. A setter function – setCount updates the data

// ⚠️ Always use the setter function. Never do count = count + 1 directly — React won't detect that change.

import { useState } from 'react';

function LikeButton({ label = "Like" }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        ❤️ {label}
      </button>
      <p>Count: {count}</p>
      {count >= 5 && <p>Thanks for the love!</p>}
    </div>
  );
}



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



// Local State vs Shared State: What's the Difference?
// When to Use Local vs Shared State
// Not all data needs to travel across your app. Knowing where to keep state saves you time and complexity.

// Local State
// Local state lives inside a single component. Use it when:

// Only one component needs the data
// The data doesn't affect siblings or parents
// Example: A button that toggles a dropdown menu.

const [isOpen, setIsOpen] = useState(false);












// What Is the Context API?
// React's Context API lets you share data with any component in your tree — without passing props through every level.

// How It Works in 3 Steps

// Step 1: Create a Context
const ThemeContext = React.createContext('light');

//Step 2: Wrap components with a Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

//Step 3: Read the value anywhere inside
const theme = useContext(ThemeContext);

// Great Use Cases for Context
// 🌍 Current user / authentication
// 🎨 App theme (dark/light mode)
// 🌐 Selected language
// 🛒 Shopping cart totals
// What to Avoid
// Don't use Context for data that changes very frequently (like animation frames or typing input). Every consumer re-renders when Context value changes.

//✅ Context API is built into React — no extra library needed. Perfect for beginner projects!


// The Three Building Blocks of Redux

// Redux follows one simple rule: state changes must be predictable.

// 1. Store
// The store holds your entire app state as one JavaScript object.
const store = createStore(reducer);
console.log(store.getState()); // { count: 0 }

// 2. Actions
// Actions are plain objects that describe what happened.
{ type: 'INCREMENT' }
{ type: 'ADD_ITEM', payload: { name: 'Apple' } }

// 3. Reducers
// Reducers decide how the state changes based on the action.
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}




//Context API vs Redux: Which Should You Choose?

// Choose Context API when:
// Your app is small or medium-sized
// You share data that doesn't change too often
// You want zero extra dependencies

// Choose Redux when:
// Many components share complex state
// You need powerful debugging (time-travel devtools)
// Your team follows strict data flow patterns

// For beginners: Start with Context API. Once your app grows or you feel limited, explore Redux Toolkit — the modern, easier way to use Redux.

