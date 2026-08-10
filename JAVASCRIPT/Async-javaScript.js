//Handling What Goes Wrong
//Async operations can fail — servers go down, networks drop. You need a plan for errors.

Using .catch()
.catch() //runs when any promise in the chain is rejected:

fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Something failed:', error));
Using .finally()
.finally() //always runs — whether the promise succeeded or failed. Perfect for cleanup:

fetch('/api/data')
  .then(data => showData(data))
  .catch(error => showError(error))
  .finally(() => hideLoadingSpinner()); // always runs!


//When to Use Each
.then()    //only on success
.catch()   //Only on failure
.finally() //Always, no matter what

//Always add .catch() to your promise chains — unhandled errors cause silent bugs!


//THE FETCH API
//fetch() is the built-in browser tool for making HTTP requests. Combined with async/await, it becomes very readable.

//Basic Pattern
async function loadPosts() {
  try {
    // 1. Make the request
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // 2. Check if it worked
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    // 3. Parse the JSON
    const posts = await response.json();

    // 4. Use the data
    console.log(posts);

  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

loadPosts();

//The Three UI States
//Every async operation has three moments your UI should handle:
//STATE                           WHAT TO SHOW
//Loading                         Spinner or skeleton screen
//Success                         The actual data
//Error                           A friendly error message

 //Always handle all three states — users need feedback about what's happening!
