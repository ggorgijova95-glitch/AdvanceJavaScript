// DOM elements
let table = document.getElementById("planetsTable");
let fetchButton = document.getElementById("fetchButton");
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");

//let currentPage = 1;

/* 
  ARROW FUNCTION
  Used for main reusable logic
*/
const fetchPlanets = (url) => {
  fetch(url)
    .then(response => response.json())   // arrow
    .then(data => printPlanets(data.results)) // arrow
    .catch(error => {                    // arrow
      alert("An error occurred while fetching data.");
      console.error(error);
    });
};

/*
  ANONYMOUS FUNCTION
  Used for DOM manipulation
*/
let printPlanets = function (planets) {
  table.innerHTML = "";
// Create header row with validation for missing data N/A (not available)
  let headerRow = table.insertRow();
  headerRow.insertCell(0).textContent = "Planet Name" ? "Planet Name" : "N/A";
  headerRow.insertCell(1).textContent = "Population" ? "Population": "N/A";
  headerRow.insertCell(2).textContent = "Climate" ? "Climate" : "N/A";
  headerRow.insertCell(3).textContent = "Gravity" ? "Gravity" : "N/A";
// Create data rows with validation for missing data N/A (not available)
  planets.forEach(function (planet) { // anonymous
    let row = table.insertRow();
    row.insertCell(0).textContent = planet.name ? planet.name : "N/A";
    row.insertCell(1).textContent = planet.population ? planet.population : "N/A";
    row.insertCell(2).textContent = planet.climate ? planet.climate : "N/A";
    row.insertCell(3).textContent = planet.gravity ? planet.gravity : "N/A";
  });
};

/*
  EVENT LISTENERS
  Anonymous functions (classic & safe)
*/
fetchButton.addEventListener("click", function () {
  //currentPage = 1;
  fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");
  nextButton.style.display = "inline-block";
  prevButton.style.display = "none";
  
});

nextButton.addEventListener("click", function () {
    //currentPage = 2;
  fetchPlanets("https://swapi.py4e.com/api/planets/?page=2");

  nextButton.style.display = "none";
  prevButton.style.display = "inline-block";
});

prevButton.addEventListener("click", function () {
  //currentPage = 1;
  fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");

  prevButton.style.display = "none";
  nextButton.style.display = "inline-block";
});