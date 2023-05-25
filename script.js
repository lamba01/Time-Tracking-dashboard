// Storing json data in a variable
const localJsonFile = "data.json";

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener("DOMContentLoaded", () => {
 
  // Make fetch request to local.json file
  fetch(localJsonFile)
    .then((response) => response.json()) // and the response we get is in json format
    .then((data) => {


        // Assuming you have the JSON data assigned to the 'data' variable

const categorySections = document.querySelectorAll('.title');

data.forEach((category, index) => {
  const title = category.title;
  const current = category.timeframes.daily.current;
  const previous = category.timeframes.daily.previous;

  const categoryElement = document.createElement('div');
  const titleElement = document.createElement('h2');
  const currentElement = document.createElement('p');
  const previousElement = document.createElement('p');

  titleElement.textContent = title;
  currentElement.textContent = `Current: ${current}`;
  previousElement.textContent = `Previous: ${previous}`;

  categoryElement.appendChild(titleElement);
  categoryElement.appendChild(currentElement);
  categoryElement.appendChild(previousElement);

  categorySections[index].appendChild(categoryElement);
});
    });
});


