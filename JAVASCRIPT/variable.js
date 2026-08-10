//JavaScript Values, Variables, Reassignment, and Mutation

//Exercise 3
const processStatus = () => {
    let currentStatus = 'pending';
    currentStatus = 'processing';
    currentStatus = 'completed';
    console.log(currentStatus);
}
processStatus();

//Exercise 4
const incident = {
    title: "Payment API unavailable",
    severity: "high",
    status: "open",
    assignedTo: null
}

incident.status = "investigating";
incident.assignedTo = "Michael";

const selectedIncident = incident;
selectedIncident.status = "completed";
//incident and selectedIncident would both reference the same object. Changing the object through either variable mutates that shared object, so the change is visible through both variables.
console.log(incident);
console.log(incident.status);


//Thses changes are permitted even though I used const to declare incident because am only updating the object properties and not reassigning the variable to a different object. const does not freeze the object.

// Exercise 5
let loginAttempts = 0;

loginAttempts = loginAttempts + 1;
loginAttempts = loginAttempts + 1;

console.log(loginAttempts);
// I used let because I want the value of my variable to change(increase) as user continue to attempt login. let allows reassignment of variable.

// Challenge — Reference reasoning
const originalSettings = {
    theme: 'light',
};

const userSettings = originalSettings;

userSettings.theme = 'dark';

const activeTheme = originalSettings.theme;

console.log(userSettings.theme); // dark
console.log(originalSettings.theme); // dark
console.log(activeTheme); // dark
// They all printed dark beacuse they all pointed to the same object



