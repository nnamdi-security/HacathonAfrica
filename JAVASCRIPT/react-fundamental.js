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
