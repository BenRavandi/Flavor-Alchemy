

var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-input').value;

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

    location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

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

// edemam api key: 7fb985b9489ba3084bc4afb5e2e96dad

