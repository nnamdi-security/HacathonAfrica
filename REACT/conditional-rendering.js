// Lesson 4 — Conditional Rendering

// Now we need React to show different UI depending on data.

Suppose:

const isLoggedIn = true;

//We want: Welcome back

But if:
const isLoggedIn = false;

//we want: Please log in

//React uses ordinary JavaScript expressions for this.

//Ternary operator
function UserStatus() {
    const isLoggedIn = true;

    return (
        <p>
            {isLoggedIn ? 'Welcome back' : 'Please log in'}
        </p>
    );
}

// The syntax is:

// condition ? valueIfTrue : valueIfFalse

// So:

isLoggedIn ? 'Welcome back' : 'Please log in'

//means:

if isLoggedIn is true
    → "Welcome back"

otherwise
    → "Please log in"

//This works nicely in JSX because a ternary is an expression.

//Practical example with your state

//Modified button:

import { useState } from 'react';

function LikeButton() {
    const [like, setLike] = useState(0);

    function handleLike() {
        setLike((previousLike) => previousLike + 1);
    }

    return (
        <button onClick={handleLike}>
            {like === 0 ? 'Be the first to like' : `Likes: ${like}`}
        </button>
    );
}


// Conditional Rendering with &&

// Sometimes you don't need an alternative.
You can write:

function CourseCard() {
    const isNew = true;

    return (
        <article>
            <h2>React Course</h2>

            {isNew && <span>New</span>}
        </article>
    );
}

// The idea is:

// condition && something

// If the condition is true:

// true && <span>New</span>

// React renders the element.

// If false:

// false && <span>New</span>

// React renders nothing there.

// Use this when the meaning is:

// Show this only if the condition is true.

// Use a ternary when you need:

// Show A if true, otherwise show B.

function UserStatus() {
    const isLoggedIn = true;

    if (isLoggedIn) {
        return <p>Welcome back</p>;
    }

    return <p>Please log in</p>;
} 
//This is called an early return.
