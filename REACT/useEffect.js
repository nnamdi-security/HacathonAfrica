//useEffect is probably one of the most misunderstood React hooks.

// 1. What Problem Does useEffect Solve?

// React components primarily calculate UI.

// For example:

function Greeting() {
    const name = 'Michael';

    return <h1>Hello {name}</h1>;
}

// That's straightforward rendering.

// But sometimes your component needs to interact with something outside React's rendering process.

// Examples:

// changing document.title;
// connecting to a WebSocket;
// interacting with browser APIs;
// starting/stopping timers;
// synchronizing with some external library;
// making certain client-side network requests.

// These are generally called side effects.

// React provides:

useEffect()

// for synchronizing a component with something external.

// 2. Basic Syntax
import { useEffect } from 'react';

useEffect(() => {
    // effect code
}, []);

//There are two main arguments:

useEffect(
    () => {
        // what should happen
    },
    [] // dependencies
);


//Example — Change Browser Title
import { useEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <button
            onClick={() =>
                setCount((previousCount) => previousCount + 1)
            }
        >
            Count: {count}
        </button>
    );
}

// Every time count changes, this runs:

document.title = `Count: ${count}`;

// So the browser tab title changes:

// Count: 0
// Count: 1
// Count: 2
// ...
// 4. The Dependency Array

// Look at:

// [count]

// This tells React:

// Run this effect after rendering whenever count changes.

useEffect(() => {
    console.log('Component mounted');
}, []);
// The empty array means the effect doesn't depend on changing component values.

// In normal production behavior, this effectively represents setup associated with mounting.

// However, during development, React's Strict Mode may intentionally run setup/cleanup an extra time to detect bugs.

// So don't build your mental model around:

"[] means literally exactly once under every circumstance."

//A better mental model is:

"[] means this effect has no reactive dependencies."


//7. Cleanup Functions
useEffect(() => {
    const timer = setInterval(() => {
        console.log('Running');
    }, 1000);

    return () => {
        clearInterval(timer);
    };
}, []);

return () => {
    clearInterval(timer);
};
// This is particularly important for:

// event listeners;
// timers;
// subscriptions;
// connections


//8. The Biggest useEffect Beginner Mistake
//Beginners often think:

"Whenever something changes, I should use useEffect."



//One Final React Concept: children

type CardProps = {
    children: React.ReactNode;
};

function Card({ children }: CardProps) {
    return (
        <div>
            {children}
        </div>
    );
}

//Now
<Card>
    <h2>React Course</h2>
    <p>Learn React today.</p>
</Card>


// Why children Is Useful

// Consider a reusable layout container:

type ContainerProps = {
    children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
    return (
        <div className="mx-auto max-w-7xl px-4">
            {children}
        </div>
    );
}

//You could use:

<Container>
    <h1>Welcome</h1>
    <p>Learn something new.</p>
</Container>

Or:

<Container>
    <CourseCard
        title="React"
        price={15000}
        isPopular
    />
</Container>

// The container doesn't need to know what content it receives.

// It simply wraps whatever is passed as children.




