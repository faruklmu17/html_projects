const name = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const color = document.getElementById('color').value;
const form = document.getElementById('userForm');
const greeting = document.getElementById('greeting');
document.addEventListener('DOMContentLoaded', function() {
    

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
    })
})

if (name == '' || age == '' || email == '' || color == '') { // Errors: '=' should be '===' and 'valueOf' should be 'value'
    greeting.innerHTML = 'Please fill out all fields.';
} else if (age < 0) { 
    greeting.innerHTML = 'Age cannot be negative.';
} else {
   
    greeting.innerHTML = `Hello,${name}! You are ${age}years old and your favorite color is${color}.`; // Incorrect
}