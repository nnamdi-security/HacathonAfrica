//Forms and Controlled Inputs
//This is a way for react to keep track of what is typed into serach bar

//1. Input State
import { useState } from 'react';

function SearchBox() {
    const [search, setSearch] = useState('');

    return (
        <input
            type="text"
            value={search}  
        />
    );
}

value={search} //The value displayed inside this input comes from React state.

//onChange
function SearchBox() {
    const [search, setSearch] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={handleChange}
            />

             <p>You searched for:{search}</p>
        </div>
    );
}
The important line is: event.target.value

If the user types: React, then approximately: event.target.value = "React"

So: setSearch(event.target.value);

becomes: setSearch('React');

//React updates state and rerenders.


//Filtering Your Course List

//We can filter:
const filteredCourses = courses.filter((course) =>
    course.title
        .toLowerCase()
        .includes(search.toLowerCase())
);

//Then render
{filteredCourses.map((course) => (
    <CourseCard
        key={course.id}
        title={course.title}
    />
))}


//6. Form Submission
function SearchForm() {
    const [search, setSearch] = useState('');

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        console.log(search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(event) =>
                    setSearch(event.target.value)
                }
            />

            <button type="submit">
                Search
            </button>
        </form>
    );
}