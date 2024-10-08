/* JavaScript for the website's interactivity */

// Event listener to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript Loaded'); // Confirmation that the JavaScript is loaded

    // Select the form element from the page
    const form = document.querySelector('form');

    // Add an event listener to the form for when it is submitted
    form.addEventListener('submit', function(event) {
        
        // Grab the input values for Name, Email, and Message from the form
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Simple form validation: Ensure all fields are filled before submitting
        if (!name || !email || !message) {
            event.preventDefault(); // Prevent form submission if any field is empty
            alert('Please fill in all the fields'); // Alert the user to fill in the missing fields
        } else {
            console.log('Form Submitted'); // Log to the console if form is valid and submitted
        }
    });
});
