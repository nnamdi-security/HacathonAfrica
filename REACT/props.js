// 1. What Are Props?

// Props are data passed from a parent component into a child component.

//Think of a JavaScript function:

function greet(name: string) {
    return `Hello ${name}`;
}

//You call it:

greet('Michael');

//Here:

name

//is a parameter.

//And:

Michael

//is the argument being passed to it.

//React components work similarly.

//We can write:

function CourseCard(props) {
    return <h2>{props.title}</h2>;
}

//And use it:

<CourseCard title="Web Development" />


//4. Multiple Props

//Props aren't limited to one value.

function CourseCard(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.instructor}</p>
            <p>₦{props.price}</p>
        </article>
    );
}

//Use it:

<CourseCard
    title="React Fundamentals"
    instructor="John Doe"
    price={15000}
/>


//5. Destructuring Props

//Professionally, instead of repeatedly writing:

props.title
props.instructor
props.price

//we commonly destructure them.

//Instead of:

function CourseCard(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.instructor}</p>
        </article>
    );
}

write:

function CourseCard({ title, instructor, price }) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{instructor}</p>
            <p>₦{price}</p>
        </article>
    );
}


//6. Props With TypeScript


//Instead of leaving props untyped:

function CourseCard({ title, instructor, price }) {

//we define their structure.

type CourseCardProps = {
    title: string;
    instructor: string;
    price: number;
};

Then:

function CourseCard({title, instructor, price,}: CourseCardProps) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{instructor}</p>
            <p>₦{price}</p>
        </article>
    );
}


//7. Reusing the Same Component

//Now look at the power of props:

function HomePage() {
    return (
        <main>
            <CourseCard
                title="React Fundamentals"
                instructor="John Doe"
                price={15000}
            />

            <CourseCard
                title="UI/UX Design"
                instructor="Jane Smith"
                price={12000}
            />

            <CourseCard
                title="Digital Marketing"
                instructor="David Mark"
                price={10000}
            />
        </main>
    );
}

//Only one component definition exists:

CourseCard

//But we reuse it with different data.




//11. Optional Props

//Sometimes a prop isn't required.

TypeScript:

type CourseCardProps = {
    title: string;
    price: number;
    badge?: string;
};

//The ? means: badge may exist, or it may not.

// 12. Default Values

// You can provide a fallback value:

type ButtonProps = {
    text?: string;
};

Then:

function Button({ text = 'Get Started' }: ButtonProps) {
    return <button>{text}</button>;
}

If:

<Button />

//the text becomes: Get Started

But:

<Button text="Enroll Now" /> //renders: Enroll Now

// 13. Professional Naming

// Props should communicate their purpose.


// 16. A Pattern You'll Use Constantly

This:

type ButtonProps = {
    label: string;
};

function Button({ label }: ButtonProps) {
    return (
        <button>
            {label}
        </button>
    );
}

Then:

<Button label="Get Started" />
<Button label="Sign Up" />
<Button label="Explore Courses" />




//Exercise 2
//Create a reusable CourseCard that accepts these props:
title
instructor
price
// Use TypeScript.

// Then create a HomePage containing these two cards:

// Course 1
// Title: React for Beginners
// Instructor: Sarah Johnson
// Price: 15000
// Course 2
// Title: Next.js Fundamentals
// Instructor: David Smith
// Price: 20000

type CourseCardProps = {
    title: string;
    instructor: string;
    price: number;
};

function CourseCard({
    title,
    instructor,
    price,
}: CourseCardProps) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{instructor}</p>
            <p>₦{price}</p>
        </article>
    );
}

export default function HomePage() {
    return (
        <main>
            <CourseCard
                title="React for Beginners"
                instructor="Sarah Johnson"
                price={15000}
            />

            <CourseCard
                title="Next.js Fundamentals"
                instructor="David Smith"
                price={20000}
            />
        </main>
    );
}