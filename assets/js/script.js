
var searchFormEl = document.getElementById('search-form');
console.log(searchFormEl)
function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.getElementById('search-input').value;
    //var formatInputVal = document.querySelector('#format-input').value;
    console.log(document.getElementById('search-input'))
    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    localStorage.setItem('ingredient', searchInputVal)


    location.assign('./search-results.html');
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

/*
// Assuming you have a reference to the <select> element
var formatInput = document.getElementById('format-input');

// Add an event listener for the 'change' event on formatInput
formatInput.addEventListener('change', function () {
    // Get the selected value
    var selectedValue = formatInput.value;

    // Perform actions based on the selected value
    switch (selectedValue) {
        case 'gluten-free':
            // Handle gluten-free selection
            console.log('User selected gluten-free');
            break;
        case 'nut-allergy':
            // Handle nut allergy selection
            console.log('User selected nut allergy');
            break;
        case 'non-Dairy':
            // Handle non-dairy selection
            console.log('User selected non-dairy');
            break;
        // Add cases for other options as needed
        default:
            // Handle other selections or no selection
            console.log('User selected:', selectedValue);
            break;
    }

    // Construct the query string with the selected format value
    var queryString = './search-results.html?format=' + selectedValue;

    // Redirect to the search results page with the query string
    location.assign(queryString);
});

*/

var searchFormEl1 = document.getElementById('search-form1');

function handleSearchFormSubmit1(event) {
    event.preventDefault();

    var searchInputVal = document.getElementById('search-input1').value;
    // var formatInputVal = document.querySelector('#format-input').value;

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    localStorage.setItem('ingredient', searchInputVal)


    location.assign('./search-results.html');
}

searchFormEl1.addEventListener('submit', handleSearchFormSubmit1);

//searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// Get the Sign up Newsletter modal 
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

