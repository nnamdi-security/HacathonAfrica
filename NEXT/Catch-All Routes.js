//Catch-All Routes

[...slug].tsx

Create:

pages/
└── docs/
    └── [...slug].tsx

//The three dots: ... mean: Capture all remaining URL segments. So the same page can match:

/docs/react
/docs/react/components
/docs/react/hooks/use-state

Inside:

import { useRouter } from 'next/router';

export default function DocsPage() {
    const router = useRouter();

    const { slug } = router.query;

    return (
        <main>
            <h1>Documentation</h1>
        </main>
    );
}


//Optional Catch-All

//You may also see: [[...slug]].tsx

//Double brackets.

//Example:

pages/docs/[[...slug]].tsx

//This can also match the route without any dynamic segments