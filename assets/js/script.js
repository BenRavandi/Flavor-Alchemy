// spoonacular api Key: 768940b43cb445978085250af3d6acaf
// edemam api key: 7fb985b9489ba3084bc4afb5e2e96dad

// Get references to elements by Ben
var addButton = document.getElementById('addButton');
var modal = document.getElementById('myModal');
var confirmButton = document.getElementById('confirmButton');
var cancelButton = document.getElementById('cancelButton');

// Show modal when Add button is clicked
addButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Hide modal when Confirm or Cancel button is clicked
confirmButton.addEventListener('click', () => {
    modal.style.display = 'none';
    // Perform any additional actions (e.g., submit form) here
});

cancelButton.addEventListener('click', () => {
    modal.style.display = 'none';
    // Handle cancellation (e.g., reset checkboxes) here
});

// Get the Sign up Newsletter modal by Ben
var modal1 = document.getElementById('newsletterModal');

// Get the button that opens the modal
var btn = document.getElementById("newsletterButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function openModal() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

