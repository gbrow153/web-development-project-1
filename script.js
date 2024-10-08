document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript Loaded');

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Simple validation: Check if the fields are filled
        if (!name || !email || !message) {
            event.preventDefault(); // Prevent form submission
            alert('Please fill in all the fields');
        } else {
            console.log('Form Submitted');
        }
    });
});
