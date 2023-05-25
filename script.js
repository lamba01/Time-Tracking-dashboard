// Storing json data in a variable
const localJsonFile = "data.json";

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener("DOMContentLoaded", () => {
 
  // Make fetch request to local.json file
  fetch(localJsonFile)
    .then((response) => response.json()) // and the response we get is in json format
    .then((data) => {
        console.log(data)
        const div = document.createElement("div");
        div.innerHTML =  `${data.title} ${data.timeframes} is a `
      });
    });


