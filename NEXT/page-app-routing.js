//Pages Router vs App Router
//Next.js specifically understands folders such as: pages/ public/ and certain special files. Next.js also supports putting application code under an optional src/ directory, but that's an organizational choice rather than a requirement.

//4. The Most Important Folder: pages/
//Files inside pages become routes.

//You don't need to manually define something like:

router.add('/about', AboutPage);

//Next.js infers the route from the filename

pages/
└── courses/
    └── index.tsx

//index.tsx roughly means: The default page for this folder.    

//7. Nested Routes

//Suppose we want: /courses, Create:

pages/
└── courses/
    └── index.tsx

Then:

export default function CoursesPage() {
    return (
        <main>
            <h1>Courses</h1>
        </main>
    );
}


// 10. public/

// The public folder stores static files such as images. Files there can be referenced from the root URL.

//You refer to that file as: /images/hero-student.png


//11. _app.tsx

import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({
    Component,
    pageProps,
}: AppProps) {
    return <Component {...pageProps} />;
}

//_app.tsx is the top-level React component Next.js uses to initialize your pages. It can be used for shared layouts, global CSS, and other application-wide concerns.

//Here's the important part:

<Component {...pageProps} />


//13. Shared Layout Example

//Suppose every page needs:

Navbar
Page
Footer

//We could eventually do:

import type { AppProps } from 'next/app';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({
    Component,
    pageProps,
}: AppProps) {
    return (
        <>
            <Navbar />

            <Component {...pageProps} />

            <Footer />
        </>
    );
}

//18. Reading the Dynamic Value

//In the Pages Router:

import { useRouter } from 'next/router';

export default function CoursePage() {
    const router = useRouter();

    return (
        <main>
            <p>Course: {router.query.slug}</p>
        </main>
    );
}

//If the URL is: /courses/react-for-beginners

//then:

//router.query.slug represents: react-for-beginners

//Dynamic route parameters are available through the Pages Router's useRouter() query object.


