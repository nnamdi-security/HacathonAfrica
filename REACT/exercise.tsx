import { useState } from 'react';
import type { ChangeEvent } from 'react';

function SearchBox() {
    const [search, setSearch] = useState('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={handleChange}
            />

            <p>Searching for: {search}</p>
        </div>
    );
}

export default function HomePage() {
    return <SearchBox />;
}






function SearchBox() {
    const [search, setSearch] = useState('');

    return (
        <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
    );
}const [search, setSearch] = useState(''); // We create a two variable and assigned it to useState function whose initial state is an emptry string
<CourseCard title="React" /> //Here is a prop which is title with a value of "React"
{courses.map((course) => (
    <CourseCard key={course.id} title={course.title} />
))} // Here we're using .map to loop through the content of courses object and printing the id and title into coursecard
{isPopular && <span>Popular</span>} //Here we are checking if a condition is true, React should render the element
<Card>
    <h1>Hello</h1> // Here we are h1 as a child of card 
</Card>
