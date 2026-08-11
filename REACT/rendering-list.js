//React commonly uses JavaScript's .map() to transform data into UI.

Example:

const courses = [
    'React for Beginners',
    'Next.js Fundamentals',
    'UI/UX Design',
];

function CourseList() {
    return (
        <section>
            {courses.map((course) => (
                <p>{course}</p>
            ))}
        </section>
    );
}


With Components

Suppose:

type Course = {
    id: number;
    title: string;
    instructor: string;
    price: number;
};

Then:

const courses: Course[] = [
    {
        id: 1,
        title: 'React for Beginners',
        instructor: 'Sarah Johnson',
        price: 15000,
    },
    {
        id: 2,
        title: 'Next.js Fundamentals',
        instructor: 'David Smith',
        price: 20000,
    },
];

And:

type CourseCardProps = {
    title: string;
    instructor: string;
    price: number;
};

function CourseCard({title, instructor,price}: CourseCardProps) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{instructor}</p>
            <p>₦{price}</p>
        </article>
    );
}

Now:

export default function HomePage() {
    return (
        <main>
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    title={course.title}
                    instructor={course.instructor}
                    price={course.price}
                />
            ))}
        </main>
    );
}

//This is a very important React pattern.

//What Is key?

Notice: key={course.id}

//React wants a unique key when rendering lists.

Why?

Imagine:

Course 1
Course 2
Course 3

//Then one course is removed or reordered. React needs a stable way to identify:This is still the same course as before. That's what the key helps with.

//Good: key={course.id} because database IDs or stable identifiers are ideal.



//Exercise
const courses = [
    {
        id: 1,
        title: 'React for Beginners',
        price: 15000,
        isPopular: true,
    },
    {
        id: 2,
        title: 'Next.js Fundamentals',
        price: 20000,
        isPopular: false,
    },
    {
        id: 3,
        title: 'TypeScript Essentials',
        price: 18000,
        isPopular: true,
    },
];

type CourseCardProps = {
    title: string;
    price: number;
    isPopular: boolean
}

function CourseCard({title, price, isPopular}: CourseCardProp) {
    return (
        <article>
            <h2>{title}</h2>
            <p>${price}</p>
            {isPopular && <span>Popular</span>}
        </article>
    )
}


export default function HomePage() {
    return (
        <main>
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    title={course.title}
                    price={course.price}
                    isPopular={course.isPopular}
                />    
            ) )}
        </main>
    );
}
//For every object in courses, JavaScript gives you one course, then you return one CourseCard.