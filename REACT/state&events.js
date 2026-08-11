//State & Events
// Events tell us that something happened.

// State stores data that can change and affect the UI.
//React lets us connect JS function to a browser event.
function handleClick() {
    console.log('Clicked');
}

return (
    <button onClick={handleClick}>
        Click Me
    </button>
);


// 6. Events Alone Don't Remember Anything

// Consider:

function Counter() {
    let count = 0;

    function handleClick() {
        count = count + 1;

        console.log(count);
    }

    return (
        <button onClick={handleClick}>
            Count: {count}
        </button>
    );
}


// count = count + 1;

// doesn't tell React:

// The UI needs to be rendered again.

// React needs its own mechanism for storing reactive data.

// That mechanism is state.

// 7. What Is State?

// State is data owned by a component that:

// can change over time, and
// can cause React to render the component again when it changes.

// 8. useState

// React provides a hook called:

// useState

//First import it:

import { useState } from 'react';

Then:

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button>
            Count: {count}
        </button>
    );
}

//This line is extremely important:

const [count, setCount] = useState(0);

// 12. Updating State

// Now:

import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Count: {count}
        </button>
    );
}


// 16. Boolean State

// This is incredibly common.

// Suppose we want a menu that opens and closes.

import { useState } from 'react';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={handleToggle}>
                Toggle Menu
            </button>

            <p>
                Menu open: {String(isOpen)}
            </p>
        </div>
    );
}


// 17. State With Strings
const [name, setName] = useState('');

// Initial state:

""

Later:

setName('Michael');

// React rerenders with:

name = "Michael"


// 19. Explicit State Types

// Sometimes you need to provide the type yourself.

// For example:

const [selectedCourse, setSelectedCourse] =
    useState<string | null>(null);

//We're saying:

//selectedCourse can be:
// string
// OR
// null

// 20. Props vs State
// PROPS
// Parent → Child
// External input
// Read-only

// STATE
// Owned by component
// Can change using setter
// Triggers rendering updates


// 21. Practical Example — Course Enrollment

// Let's combine props, state and events.

import { useState } from 'react';

type CourseCardProps = {
    title: string;
    instructor: string;
};

function CourseCard({
    title,
    instructor,
}: CourseCardProps) {
    const [isEnrolled, setIsEnrolled] = useState(false);

    function handleEnroll() {
        setIsEnrolled(true);
    }

    return (
        <article>
            <h2>{title}</h2>
            <p>{instructor}</p>

            <button onClick={handleEnroll}>
                Enroll
            </button>

            <p>
                Enrolled: {String(isEnrolled)}
            </p>
        </article>
    );
}

//Notice the separation.

//The parent supplies:

title
instructor

//Those are props.

//But each CourseCard owns:

isEnrolled

//That's state.



//22. Each Component Instance Has Its Own State

//24. One Professional Improvement
 Simple:

setCount(count + 1);

// Professional when depending on previous state:

setCount((previousCount) => previousCount + 1);


// 25. Hooks Have Rules

// useState is a React Hook.

// You'll recognize hooks because they generally begin with:

// use...

// Examples

// useState
// useEffect
// useRef
// useContext

// An important rule:

// Don't put useState inside: if

// hooks belong at the top level of the component:

function Profile() {
    const [name, setName] = useState('');

    // ...
}

//Why? React relies on hooks being called in a consistent order between renders.


//Exercise
import {useState} from 'react';
function LikeButton() {
    const [like, setLike] = useState(0); //state

    function handleLike() {
        setLike((previousLike) => previousLike + 1);
    } //Event handler

    return(
        <button onClick ={handleLike}>
            Number of likes: {like}
        </button>
    );
}

export default function HomePage() {
    return (
        <LikeButton />;
    )
}