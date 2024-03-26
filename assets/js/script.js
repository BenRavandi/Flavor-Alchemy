
// Set global variables
var searchFormEl = document.getElementById('search-form');
var modal1 = document.getElementById('newsletterModal');
var btn = document.getElementById("newsletterButton");
var span = document.getElementsByClassName("close")[0];

// Set event handler for index.html query submission
function handleSpoonacularSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.getElementById('search-input').value;

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    localStorage.setItem('ingredient', searchInputVal)
    location.assign('./search-results.html');
}

// Call the handler
searchFormEl.addEventListener('submit', handleSpoonacularSearchFormSubmit);


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


