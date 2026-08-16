//HTTP Request Methods: GET, POST, PUT, DELETE
//Every API request uses a method that tells the server what action to perform.

//METHOD                ACTION                  EXAMPLE
//GET                   Fetch data              Load a list of users

//POST                  Send new data           Submit a sign-up form

//PUT                   Replace existing data   Update a profile

//DELETE                Remove data             Delete a post



// Key Tips
// GET requests do not change data — they are safe to repeat.
// POST creates something new on the server.
// PUT replaces the full record; use PATCH for partial updates.
// Always match the right method to the right action — it keeps your API predictable.




//Sending and Receiving JSON

//Fetching JSON in React
useEffect(() => {
  fetch('https://api.example.com/users/1')
    .then(res => res.json())
    .then(data => setUser(data));
}, []);

//Sending JSON with POST
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Ada', email: 'ada@example.com' })
});

// Key Points
// Always set Content-Type: application/json when sending data.
// Use res.json() to parse the response body.
// JSON keys must be strings wrapped in double quotes.



// Forms + APIs: Sending User Input
// When a user fills out a form, you capture the input and send it to your API using a POST request.

function SignUpForm() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Saving...');
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('Success!');
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
      <p>{status}</p>
    </form>
  );
}
// Best Practices
// Always call e.preventDefault() to stop the page from reloading.
// Show feedback: loading, success, or error messages.
// Validate inputs before sending to avoid unnecessary requests.




//Updating the UI After Successful Requests

//After a successful API call, update your React state so the UI reflects the new data without requiring a page refresh.

//Pattern 1 — Add to List After POST
const addUser = async (newUser) => {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
  });
  const created = await res.json();
  setUsers(prev => [...prev, created]); // append to list
};

//Pattern 2 — Remove From List After DELETE
const deleteUser = async (id) => {
  await fetch(`/api/users/${id}`, { method: 'DELETE' });
  setUsers(prev => prev.filter(u => u.id !== id));
};
// Why Not Just Re-fetch?
// You can re-fetch the full list, but local state updates are faster and feel snappier for users. Use re-fetch when data accuracy is critical.



//EXERCISE: Build a Mini CRUD App

// Instructions
// Using JSONPlaceholder (a free mock REST API at https://jsonplaceholder.typicode.com), build a simple React interface that does the following:

// GET — Fetch and display a list of posts from /posts?_limit=5.
// POST — Add a new post using a form with a title input.
// DELETE — Remove a post from the list when a delete button is clicked.
// Handle and display loading, empty, and error states.
// Update the UI after each action without a full page refresh.
// Deliverable
// Write your solution as a text description covering:

// Which fetch() calls you made and what methods you used.
// How you managed state for the list, loading, and errors.
// What feedback you showed the user after each action.
// Any challenges you faced and how you solved them.

