// spoonacular api Key: 768940b43cb445978085250af3d6acaf
// edemam api key: 7fb985b9489ba3084bc4afb5e2e96dad
var ingredientSearch = document.getElementById('ingredient search');
var allergies = document.getElementById('allergy');
var spoonAPI = "https://api.spoonacular.com/recipes/716429/information?apiKey=768940b43cb445978085250af3d6acaf&includeNutrition=true"
var EdamAPI = "https://api.edamam.com/api/nutrition-data?app_id=afad2ca1&app_key=7fb985b9489ba3084bc4afb5e2e96dad"

// Function to save a searched meal to local storage
function saveSearch(searchResults) {
    // Retrieve existing searches from local storage or create an empty array
    var searches = JSON.parse(localStorage.getItem('searches')) || [];
    
    // Add the new search result to the array
    searches.push(searchResults);
    
    // Save the updated array back to local storage
    localStorage.setItem('searches', JSON.stringify(searches));
  }
  
  // Function to display previously searched meals
  function displayPreviousSearches() {
    // Retrieve searches from local storage
    var searches = JSON.parse(localStorage.getItem('searches')) || [];
    
    // Clear previous search display
    var previousSearchesContainer = document.getElementById('previousSearches');
    previousSearchesContainer.innerHTML = '';
    
    // Display each search result
    searches.forEach(function(searchResults) {
      var searchItem = document.createElement('div');
      searchItem.textContent = searchResults;
      previousSearchesContainer.appendChild(searchItem);
    });
  }
  
  // Function to clear previous searches from local storage and the UI
  function clearSearches() {
    // Clear searches from local storage
    localStorage.removeItem('searches');
    
    // Clear previous search display
    var previousSearchesContainer = document.getElementById('previousSearches');
    previousSearchesContainer.innerHTML = '';
  }
  
  // Load previously searched meals when the page loads
  window.onload = function() {
    displayPreviousSearches();
  };
  
  // Event listener for search button
  document.getElementById('searchButton').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value.trim();
    
    if (searchInput !== '') {
      // Save the search results to local storage
      saveSearch(searchInput);
      
      // Display the updated list of previous searches
      displayPreviousSearches();
    }
  });
  
  // Event listener for clear button
  document.getElementById('clearButton').addEventListener('click', function() {
    // Clear searches from local storage and the UI
    clearSearches();
  });





//   section for ingredient array (UNFINISHED)
let ingredients = [];

function addIngredient() {
    const ingredientInput = document.getElementById('ingredient');
    const ingredient = ingredientInput.value.trim();

    if (ingredient) {
        ingredients.push(ingredient);
        ingredientInput.value = '';
        displayIngredients();
    }
}
// function to display ingredients
function displayIngredients() {
    const ingredientList = document.getElementById('ingredientList');
    ingredientList.innerHTML = '';
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientList.appendChild(li);
    });
}
// add function to communicate with API (UNFINISHED)


document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Searching for recipes with ingredients:', ingredients);
});