// Storing json data in a variable
const localJsonFile = "data.json";

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener("DOMContentLoaded", () => {
  let data = null;

  // Make fetch request to local.json file
  fetch(localJsonFile)
    .then((response) => response.json())
    .then((jsonData) => {
      data = jsonData;

      const categorySections = document.querySelectorAll(".title");
      const dailyButton = document.getElementById("dailyButton");
      const weeklyButton = document.getElementById("weeklyButton");
      const monthlyButton = document.getElementById("monthlyButton");

      let timeframe = "daily"; // Default timeframe
      // Define the distinctive texts for each timeframe
      const timeframeTexts = {
        daily: "Yesterday - ",
        weekly: "Last week - ",
        monthly: "Last year - ",
      };

      function displayData() {
        // Clear the container before displaying new data
        categorySections.forEach((categorySection) => {
          categorySection.innerHTML = "";
        });

        data.forEach((category, index) => {
          const title = category.title;
          const timeframeData = category.timeframes[timeframe];

          const categoryElement = document.createElement("div");
          const titleElement = document.createElement("p");
          const titlediv = document.createElement("div")
          const positionaldiv = document.createElement("div")
          const dataElement = document.createElement("h2");
          const dataContainer = document.createElement("div");
          const dataElement2 = document.createElement("span");
          const timeframeText = document.createElement("span");

          titleElement.textContent = title;
          dataElement.textContent = `${timeframeData.current}hrs`;
          dataElement2.textContent = `${timeframeData.previous}hrs`;
          timeframeText.textContent = timeframeTexts[timeframe]; // Use the corresponding text based on the timeframe
          dataElement.classList.add("dataElement");
          dataContainer.classList.add("dataContainer")
          titleElement.classList.add("title")
          categoryElement.classList.add("categoryElement")

          titlediv.appendChild(titleElement)

          dataContainer.appendChild(timeframeText)
          dataContainer.appendChild(dataElement2)

          positionaldiv.appendChild(dataElement)
          positionaldiv.appendChild(dataContainer)

          categoryElement.appendChild(titlediv); 
          categoryElement.appendChild(positionaldiv);

          categorySections[index].appendChild(categoryElement);
        });
      }

      dailyButton.addEventListener("click", () => {
        timeframe = "daily";
        displayData();
      });

      weeklyButton.addEventListener("click", () => {
        timeframe = "weekly";
        displayData();
      });

      monthlyButton.addEventListener("click", () => {
        timeframe = "monthly";
        displayData();
      });

      // Display the initial data
      displayData();
    });
});

// timeframe selection
let timeframe = document.querySelectorAll("li");
window.onload = function testing() {
  for (var i = 0; i < timeframe.length; i++) {
    timeframe[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
      }
      // Add the active class to the current/clicked timeframe
      this.className += "active";
    });
  }
};
