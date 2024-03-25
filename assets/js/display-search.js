
// Set all the global variables
var resultTextEl = document.getElementById('result-text');
var resultContentEl = document.getElementById('result-content');
var searchFormEl = document.getElementById('search-form');
var resultTextEl1 = document.getElementById('result-text1');
var resultContentEl1 = document.getElementById('result-content1');
var searchFormEl1 = document.getElementById('search-form1');
var searchInput = document.getElementById('search-input');
var query = localStorage.getItem('ingredient')

// Set local storage get item
searchInput.value = localStorage.getItem('ingredient');

// Print result for Spoonacular API
function printSpoonacularResults(resultObj) {

    // Set up <div> to hold result content
    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    var titleEl = document.createElement('h3');
    titleEl.innerHTML =
        '<strong>Title:</strong> ' + resultObj.title + '<br/>';

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

// Set Spoonacular API & pass in query parameter
function searchSpoonacularApi(query) {
    var locQueryUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=a6bf495e456e4d60b43fb52e467a5468&includeNutrition=true&addRecipeInformation=true';

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
                    printSpoonacularResults(data.results[i]);
                }
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

// Set event handler to submit the query for Spoonacular
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

// Call the event handler & Spoonacular API
searchFormEl.addEventListener('submit', handleSpoonacularSearchFormSubmit);
searchSpoonacularApi(query);

// Print the result for Edamam API
function printEdamamResults(resultObj) {

    // Set up <div> to hold result content
    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    var labelEl = document.createElement('h3');
    labelEl.innerHTML =
        '<strong>Title:</strong> ' + resultObj.recipe.label + '<br/>';

    var caloryEl = document.createElement('p');
    caloryEl.innerHTML =
        '<strong>Calory:</strong> ' + resultObj.recipe.calories + '<br/>';

    var summaryEl = document.createElement('p');
    summaryEl.innerHTML =
        '<strong>Summary:</strong> ' + resultObj.recipe.ingredientLines + '<br/>';

    var sourceEl = document.createElement('p');
    sourceEl.innerHTML =
        '<strong>Source:</strong> ' + resultObj.recipe.source + '<br/>';

    var linkButtonEl = document.createElement('a');
    linkButtonEl.textContent = 'Read More';
    linkButtonEl.setAttribute('href', resultObj.recipe.url);
    linkButtonEl.classList.add('btn', 'btn-dark');

    // Append all elements to resultBody
    resultBody.append(labelEl, caloryEl, summaryEl, sourceEl, linkButtonEl);
    resultContentEl1.append(resultCard);
}

// Set Edamam API and Pass in the query param
function searchEdamamApi(query) {
    var edQueryUrl = 'https://api.edamam.com/api/recipes/v2/?app_id=ac44fd70&app_key=9a421c71e921c4cbd0e1d6f366a2f484&type=public&ingr=5-8';

    edQueryUrl = edQueryUrl + '&q=' + query;

    fetch(edQueryUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (data) {

            resultTextEl1.textContent = query;
            console.log(data);

            if (!data.hits.length) {
                console.log('No results found!');
                resultContentEl1.innerHTML = '<h3>No results found, search again!</h3>';
            } else {
                resultContentEl1.textContent = '';
                for (var i = 0; i < data.hits.length; i++) {
                    printEdamamResults(data.hits[i]);
                }
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

// Call Edamam API
searchEdamamApi(query);
