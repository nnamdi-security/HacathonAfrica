//Creating Pages & Navigation

//Navigating Between Pages

//Suppose the homepage needs links to:

/about
/courses

//Next.js provides:

import Link from 'next/link';

Then:

import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <h1>SkillUp</h1>

            <nav>
                <Link href="/about">
                    About
                </Link>

                <Link href="/courses">
                    Courses
                </Link>
            </nav>
        </main>
    );
}

//The important syntax:

<Link href="/courses">
    Courses
</Link>





We can combine your React .map() knowledge with Next.js Link:

import Link from 'next/link';

const courses = [
    {
        id: 1,
        title: 'React for Beginners',
        slug: 'react-for-beginners',
    },
    {
        id: 2,
        title: 'Next.js Fundamentals',
        slug: 'nextjs-fundamentals',
    },
];

export default function CoursesPage() {
    return (
        <main>
            {courses.map((course) => (
                <article key={course.id}>
                    <h2>{course.title}</h2>

                    <Link href={`/courses/${course.slug}`}>
                        View Course
                    </Link>
                </article>
            ))}
        </main>
    );
}

<Link href="/blog/my-first-post">
    My First Post
</Link>

<Link href="/blog/learning-nextjs">
    Learning Next.js
</Link>
    
//The braces are only necessary when you're passing a JavaScript expression.