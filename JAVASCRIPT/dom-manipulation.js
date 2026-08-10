//Updating Text Content
// const heading = document.querySelector('h1');
// heading.textContent = "Hello, DOM"

// const paragraph = document.querySelector("p").textContent = "Today is a good day";

// //CHANGE AN ATTRIBUTE
// const link = document.querySelector("a");
// link.setAttribute('href', 'https://www.google.com');
// link.setAttribute('target', '_blank');

//APPLY STYLE DIRECTLY
// const box = document.querySelector('.card');
// box.style.backgroundColor = '#4f46e5';
// box.style.color = 'white';
// box.style.padding = '16px';


// //TOGGLE A CSS CLASS
// box.classList.add('active');
// box.classList.remove('hidden');
// box.classList.toggle('dark-mode');


//Handling Events: Clicks and Input Changes
const button = document.querySelector('#myBtn');
button.style.backgroundColor = '#4f46e5'; 
// button.addEventListener('click', function() {
//     alert('You have registered');  
    
// });

//USING ARROW FUNCTION
button.addEventListener('click', () => {
    alert('You have successfully registered')
})


//LISTENING TO INPUT CHANGES
const input = document.querySelector('#nameInput');
input.addEventListener('input', (event) => {
    console.log('Current value:', event.target.value);
});

//Common Events to Know
//EVENT                      TRIGGERED WHEN
//click                      User clicks an element
//input                      User types in a field
//submit                     A form is submitted
//mouseover                  Mouse hovers over element
//keydown                    A key is pressed   




//CREATE AND ADD AN ELEMENT
//1. Create a new element
const newitem = document.createElement('li');

//2. Give it content
newitem.innerHTML = 'List item 4';
newitem.style.backgroundColor = 'yellow'

//3. Append it to an existing parent
const List = document.querySelector('#myList');
List.appendChild(newitem);

//Insert Before Another Element
const list = document.querySelector('#myList');
const firstItem = list.firstElementChild;
list.insertBefore(newItem, firstItem);

//Remove an Element
const oldItem = document.querySelector('#oldItem');
oldItem.remove(); // simple and modern


// 
Useful Browser Superpowers
// Beyond the DOM, browsers provide built-in APIs that help you store data, schedule actions, and move between pages.
//localStorage — Save Data Between Sessions
// Save a value
localStorage.setItem('username', 'Alex');

// Read it back
const name = localStorage.getItem('username');
console.log(name); // 'Alex'

// Remove it
localStorage.removeItem('username');
//Data in localStorage survives page refresh — great for settings or user preferences.

//Timers — Delay or Repeat Actions
// Run once after 2 seconds
setTimeout(() => {
  console.log('2 seconds later!');
}, 2000);

// Run every 1 second
const intervalId = setInterval(() => {
  console.log('Tick!');
}, 1000);

// Stop the interval
clearInterval(intervalId);
//Basic Navigation
// Redirect user to another page
//window.location.href = 'https://example.com';

// Reload the current page
window.location.reload();




 