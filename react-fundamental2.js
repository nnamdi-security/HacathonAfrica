//2. React Is Declarative
function LoginStatus() {
    const loggedIn = true;

    return (
        <div>
            {loggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        </div>
    );
}


// 3. What Is a React Component?

// A component is a reusable piece of UI.

// 4. Your First Component

// A basic React component looks like this:
function Greeting() {
    return <h1>Hello World</h1>;
}

//Three things to note about this component:
// 1. It's a JavaScript function.
//2. Its name starts with a capital letter. Uppercase is important because React treats components that start with lowercase letters as DOM tags.
//3. It returns JSX, which is a syntax extension that looks like HTML but is actually JavaScript.

//5. Using a Component
function Greeting() {
    return <h1>Hello World</h1>;
}
//Defining a component doesn't automatically place it on the screen. You need to use it within another component or in the main App component using:
<Greeting />


//Example
function Greeting() {
    return <h1>Hello World</h1>;
}

function HomePage() {
    return (
        <main>
            <Greeting />
        </main>
    );
}

//6. Components Can Be Reused
function Button() {
    return <button>Get Started</button>;
}

//You can use the Button component multiple times in your app:
function HomePage() {
    return (
        <main>
            <Button />
            <Button />
            <Button />
        </main>
    );
}

//7. What Is JSX?
// JavaScript XML

// It is syntax that allows us to describe UI using an HTML-like structure inside JavaScript or TypeScript.
function HeroSection() {
    return (
        <section>
            <h1>Learn without limits</h1>

            <p>
                Start, switch, or advance your career.
            </p>

            <button>Get Started</button>
        </section>
    );
}

//9. .tsx vs .ts
//Use .ts for Typescript that doesn't contain JSX
export function calculateTotal(price: number, quantity: number) {
    return price * quantity;
}

//Use .tsx when the file contain JSX
export default function HomePage() {
    return <h1>Home</h1>;
}

//10. JSX Expressions — { }

// One of the most important JSX rules is this:

// Use {} when you want to enter JavaScript expression mode inside JSX.
function Greeting() {
    const name = 'Michael';

    return <h1>Hello, {name}</h1>;
}

function Price() {
    const price = 5000;
    const quantity = 3;

    return <p>Total: ₦{price * quantity}</p>;
}

// 11. Expressions vs Statements

// Inside JSX braces, React expects expressions.

// An expression produces a value.
//This are expression
//price * quantity
//user.age
//loggedIn? "welcome" : "login"

//But this is invalid
if (loggedIn) {
}
//Also this
return (
    <div>
        {
            if (loggedIn) {
                'Welcome'
            }
        }
    </div>
);

//12. JSX Must Have One Parent
//This is invalid
function HomePage() {
    return (
        <h1>Welcome</h1>
        <p>Start learning today.</p>
    );
}

//This is valid
function HomePage() {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Start learning today.</p>
        </div>
    );
}
//Sematically Better
function HomePage() {
    return (
        <main>
            <h1>Welcome</h1>
            <p>Start learning today.</p>
        </main>
    );
}

//13. React Fragments
// Sometimes you don't want to introduce an unnecessary HTML element just to satisfy the one-parent rule.

// React provides a Fragment.
function UserInfo() {
    return (
        <>
            <h2>Michael</h2>
            <p>Software Engineer</p>
        </>
    );
}
<>
</> //It groups elements for React without necessarily introducing another DOM element.

//14. JSX Attributes
 function Card() {
    return (
        <div className="card">
            Course content
        </div>
    );
} //class becomes className

<h1 className="text-4xl font-bold">
    Learn without limits
</h1>

<label htmlFor="email">Email</label> // for becomes htmlFor

//15. Dynamic Attributes
//Curly braces also works in attributes
function Avatar() {
    const imageUrl = '/images/michael.jpg';

    return (
        <img
            src={imageUrl}
            alt="Michael"
        />
    );
}


// 16. JSX Uses JavaScript Naming Conventions

// Some properties are camelCase.

// 17. Self-Closing Elements

// HTML elements that have no children should generally be self-closed in JSX.

// 18. Components Can Contain Components

// This is where React starts becoming powerful.
function Navbar() {
    return (
        <nav>
            <span>EduLearn</span>
        </nav>
    );
}

function HeroSection() {
    return (
        <section>
            <h1>Learn from anywhere</h1>
            <p>Discover courses taught by industry experts.</p>
        </section>
    );
}

function HomePage() {
    return (
        <main>
            <Navbar />
            <HeroSection />
        </main>
    );
}
//This gives us:
HomePage
├── Navbar
└── HeroSection
//This is called component composition.


//19. Why Components Matter Professionally
//Imagine writing your entire Figma landing page like this:
//Imagine writing your entire Figma landing page like this:
export default function HomePage() {
    return (
        <>
            {/* navbar - 80 lines */}

            {/* hero - 150 lines */}

            {/* categories - 100 lines */}

            {/* courses - 250 lines */}

            {/* testimonials - 170 lines */}

            {/* footer - 150 lines */}
        </>
    );
}

//Instead:
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />

            <main>
                <HeroSection />
                <CoursesSection />
            </main>

            <Footer />
        </>
    );
}

// 20. When Should Something Become a Component?

// Don't create a separate component for every <div>.

// A component is usually justified when something is:

<CourseCard /> // Reusable
<SearchBar /> //A distinct UI responsibility
<SearchBar /> //Complex enough to deserve isolation

//23. return Has a JavaScript Trap

//Don't write:

function Hero() {
    return
    (
        <section>
            Hero
        </section>
    );
}

// JavaScript's automatic semicolon insertion may effectively interpret it as:

return;

So return nothing.

//Instead:

function Hero() {
    return (
        <section>
            Hero
        </section>
    );
}

//Keep ( on the same line as return.


// 24. Exporting Components

// If a component is in another file, it needs to be exported.

// Suppose:

// components/Navbar.tsx

//You could write:

export default function Navbar() {
    return (
        <nav>
            EduLearn
        </nav>
    );
}

//Then elsewhere:

import Navbar from '../components/Navbar';

export default function HomePage() {
    return (
        <main>
            <Navbar />
        </main>
    );
}

// 27. Components Re-render

// This will become extremely important when we study state.

// When data used by a component changes through React's state system, React can execute the component again.

//28. React Doesn't Usually Rebuild the Entire Web Page
//React creates a new description of the UI and determines what actually needs updating.

29. The Component Tree

Suppose:

function App() {
    return (
        <>
            <Navbar />

            <HeroSection />

            <CoursesSection />

            <Footer />
        </>
    );
}

//Inside CoursesSection:

function CoursesSection() {
    return (
        <section>
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </section>
    );
}

// 30. React Component Naming Best Practices

// Use PascalCase:
CourseCard

// 31. Semantic HTML Still Matters

// React doesn't replace HTML knowledge.


//LESSON EXERCISE
function Header() {
    return (
        <>
            <h1>SkillUp</h1>
            <a href='/courses'>Browse Courses</a>
        </>
    )
}



function HeroSection() {
    const learnCount = 20000;
    return(
        
        <section>
            <h2>Learn anything, anywhere</h2>
            <p>Join over {learnCount} leaners.</p>
           
            <button>
                Start Learning
            </button>
         </section>    
    )
}

export default function HomePage() {
    return (
        <>

        <Header />

        <main>
             <HeroSection />
        </main>
       
        </>
        
    )
}