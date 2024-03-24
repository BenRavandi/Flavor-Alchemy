
var resultTextEl = document.getElementById('result-text');
var resultContentEl = document.getElementById('result-content');
var searchFormEl = document.getElementById('search-form');
var resultTextEl1 = document.getElementById('result-text1');
var resultContentEl1 = document.getElementById('result-content1');
var searchFormEl1 = document.getElementById('search-form1');

function getParams() {

    var searchParams = new URLSearchParams(window.location.search);
    var query = searchParams.get('q');
    var format = searchParams.get('format');

    searchApi(query, format);
}

function printResults(resultObj) {

    // Set up <div> to hold result content
    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    var titleEl = document.createElement('h3');
    titleEl.textContent = resultObj.title;

    // Create separate variables for each paragraph
    var healthScoreEl = document.createElement('p');
    healthScoreEl.innerHTML =
        '<strong>HealthScore:</strong> ' + resultObj.healthScore + '<br/>';

    var summaryEl = document.createElement('p');
    summaryEl.innerHTML =
        '<strong>Summary:</strong> ' + resultObj.summary + '<br/>';

    var dietsEl = document.createElement('p');
    dietsEl.innerHTML =
        '<strong>Diets:</strong> ' + resultObj.diets + '<br/>';

    var linkButtonEl = document.createElement('a');
    linkButtonEl.textContent = 'Read More';
    linkButtonEl.setAttribute('href', resultObj.spoonacularSourceUrl);
    linkButtonEl.classList.add('btn', 'btn-dark');

    // Append all elements to resultBody
    resultBody.append(titleEl, healthScoreEl, summaryEl, dietsEl, linkButtonEl);
    resultContentEl.append(resultCard);
}

function searchApi(query, format) {
    var locQueryUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=a6bf495e456e4d60b43fb52e467a5468&includeNutrition=true&addRecipeInformation=true';

    if (format) {
        locQueryUrl = 'https://api.spoonacular.com/' + format + '/?apiKey=a6bf495e456e4d60b43fb52e467a5468&includeNutrition=true&addRecipeInformation=true';
    }

    locQueryUrl = locQueryUrl + '&query=' + query;

    fetch(locQueryUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (data) {

            // write query to page so user knows what they are viewing
            resultTextEl.textContent = query;
            console.log(data)

            if (!data.results.length) {
                console.log('No results found!');
                resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
            } else {
                resultContentEl.textContent = '';
                for (var i = 0; i < data.results.length; i++) {
                    printResults(data.results[i]);
                }
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}


function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.getElementById('search-input').value;
    //var formatInputVal = document.querySelector('#format-input').value;

    var queryString = './search-results.html?q=' + searchInputVal;

    location.assign(queryString);

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
getParams();

function getParams1() {

    var searchParams = new URLSearchParams(window.location.search);
    var query = searchParams.get('q');
    var format = searchParams.get('format');

    edSearchApi(query, format);
}

function printResults1(resultObj) {

    // Set up <div> to hold result content
    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    var titleEl = document.createElement('h3');
    titleEl.innerHTML = resultObj.recipe.label;

    // Create separate variables for each paragraph
    var healthScoreEl = document.createElement('p');
    healthScoreEl.innerHTML =
        '<strong>Calory:</strong> ' + resultObj.recipe.calories + '<br/>';

    var summaryEl = document.createElement('p');
    summaryEl.innerHTML =
        '<strong>Summary:</strong> ' + resultObj.recipe.ingredientLines + '<br/>';

    var dietsEl = document.createElement('p');
    dietsEl.innerHTML =
        '<strong>Source:</strong> ' + resultObj.recipe.source + '<br/>';

    var linkButtonEl = document.createElement('a');
    linkButtonEl.textContent = 'Read More';
    linkButtonEl.setAttribute('href', resultObj.recipe.url);
    linkButtonEl.classList.add('btn', 'btn-dark');

    // Append all elements to resultBody
    resultBody.append(titleEl, healthScoreEl, summaryEl, dietsEl, linkButtonEl);
    resultContentEl1.append(resultCard);
}

function edSearchApi(query, format) {
    var edQueryUrl = 'https://api.edamam.com/api/recipes/v2/?app_id=ac44fd70&app_key=9a421c71e921c4cbd0e1d6f366a2f484&type=public&ingr=5-8';

    if (format) {
        edQueryUrl = 'https://api.edamam.com/api/' + format + '/?app_id=ac44fd70&app_key=9a421c71e921c4cbd0e1d6f366a2f484&type=public&ingr=5-8';
    }

    if (query) {
        edQueryUrl = edQueryUrl + '&query=' + query;
    } else {
        console.log('No query provided!');
        return;
    }

    console.log(query);

    fetch(edQueryUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (data) {
            var resultTextEl1 = document.getElementById('result-text1');
            resultTextEl1.textContent = query;
            console.log(data);

            if (!data.hits.length) {
                console.log('No results found!');
                resultContentEl1.innerHTML = '<h3>No results found, search again!</h3>';
            } else {
                resultContentEl1.textContent = '';
                for (var i = 0; i < data.hits.length; i++) {
                    printResults1(data.hits[i]);
                }
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

/*// Assuming you have a reference to the <select> element
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

//edSearchApi();
getParams1();*/
function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.getElementById('search-input1').value;
    // var formatInputVal = document.querySelector('#format-input').value;

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    var queryString = './search-results.html?q=' + searchInputVal;
    location.assign(queryString);
}

searchFormEl1.addEventListener('submit', handleSearchFormSubmit);
getParams1();