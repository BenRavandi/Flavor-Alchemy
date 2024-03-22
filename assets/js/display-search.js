
var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {

    var searchParams = new URLSearchParams(window.location.search);
    var query = searchParams.get('q');
    var format = searchParams.get('format');

    searchApi(query, format);
    edSearchApi(query, format);
}

function printResults(resultObj) {
    // Uncomment this line to check the output
    // console.log(output);

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
// console.log(printResults());

// console.log(printResults());

function searchApi(query, format) {
    var locQueryUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=ecaa0f46c2ba4a1480f00a5e3e55a728&includeNutrition=true&addRecipeInformation=true';

    if (format) {
        locQueryUrl = 'https://api.spoonacular.com/recipes/' + format + '/?apiKey=ecaa0f46c2ba4a1480f00a5e3e55a728&includeNutrition=true&addRecipeInformation=true';
    }

    locQueryUrl = locQueryUrl + '&query=' + query;

    // console.log(locQueryUrl);

    fetch(locQueryUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }

            return response.json();
        })
        .then(function (data) {
            // write query to page so user knows what they are viewing
            // resultTextEl.textContent = locRes.search.query;

            console.log(data);

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

    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-input').value;

    var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

    location.assign(queryString);

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    getParams();
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);



function edSearchApi(query, format) {
    var edemamApi = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=ac44fd70&app_key=9a421c71e921c4cbd0e1d6f366a2f484&ingr=5';
    if (format) {
        edemamApi = 'https://api.edamam.com/api/recipes/v2' + format + '/?type=public&app_id=ac44fd70&app_key=9a421c71e921c4cbd0e1d6f366a2f484&ingr=5';
    }

    edemamApi = edemamApi + '&query=' + query;

    fetch(edemamApi)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            if (!data.results.length) {
                console.log('No results found!');
                resultContentEl.innerHTML = '<h3>No results found, search again!<h3>';
            } else {
                resultContentEl.textContent = '';
                for (var i = 0; i < data.results.length; i++) {
                    printResults(data.results[i]);
                }
            }
        })
}


searchFormEl.addEventListener('submit', handleSearchFormSubmit);


console.log(edemamApi + "this is working");
// alternating api results 