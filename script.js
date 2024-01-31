// avialble fruits
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry',
  'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut',
  'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit',
  'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin',
  'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
  'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat',
  'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe',
  'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive',
  'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach',
  'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince',
  'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop',
  'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//Html selectors
const input = document.querySelector('#fruit');
const suggestionsList = document.getElementById('suggestions-Ul');
const searchButton = document.querySelector('#searchbtn');

// Event listener for keyup on the input field
input.addEventListener('keyup', searchHandler);
// Event listener for click on the suggestions list
suggestionsList.addEventListener('click', useSuggestion);
// Event listener for click on the search button
searchButton.addEventListener('click', searchHandler);

function search(str) {
  // Filter fruits based on the user input
  return fruit.filter((f) => f.toLowerCase().startsWith(str.toLowerCase()));
}

function searchHandler(e) {
  // Get the input value
  const inputVal = input.value.toLowerCase();

  // If Enter key is pressed or the search button is clicked
  if (e.key === 'Enter' || (e.target === searchButton && e.type === 'click')) {
    // Perform the search
    showSuggestions(search(inputVal), inputVal);
  } else {
    // Show suggestions as the user types
    showSuggestions(search(inputVal), inputVal);
  }
}

function showSuggestions(results) {
  // Clear previous suggestions
  suggestionsList.innerHTML = '';

  // Display new suggestions
  results.forEach(function (suggestion) {
    let li = document.createElement('li');
    li.textContent = suggestion;
    suggestionsList.appendChild(li);
  });
}

function useSuggestion(e) {
  // Set the selected suggestion as the input value
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent;
    // Clear suggestions list
    suggestionsList.innerHTML = "";
  }
}