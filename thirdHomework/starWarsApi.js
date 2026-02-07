//get the table and button elements from the DOM
let table = document.getElementById("planetsTable");
let button = document.getElementById("fetchButton");
//add a click event listener to the button to fetch data from the Star Wars API and populate the table
button.addEventListener("click", function() {
    fetch("https://swapi.py4e.com/api/planets?page=1")
        .then(response => response.json())
        .then(data => {
            let planets = data.results;
            
            table.innerHTML = ""; // Clear existing table content
            // Create header row
            let headerRow = table.insertRow();
            let nameHeader = headerRow.insertCell(0);
            let populationHeader = headerRow.insertCell(1);
            let climateHeader = headerRow.insertCell(2);
            let gravityHeader = headerRow.insertCell(3);
            nameHeader.textContent = nameHeader ? "Name" : "Name header not found";
            populationHeader.textContent = populationHeader ? "Population" : "Population header not found";
            climateHeader.textContent = climateHeader ? "Climate" : "Climate header not found";
            gravityHeader.textContent = gravityHeader ? "Gravity" : "Gravity header not found";
            // Loop through the planets and create a new row for each planet with its details
            planets.forEach(planet => {
                
                let row = table.insertRow();
                let nameCell = row.insertCell(0);
                let populationCell = row.insertCell(1);
                let climateCell = row.insertCell(2);
                let gravityCell = row.insertCell(3);

                nameCell.textContent = planet.name ? planet.name : "Name not found";
                populationCell.textContent = planet.population ? planet.population : "Population not found";
                climateCell.textContent = planet.climate ? planet.climate : "Climate not found";
                gravityCell.textContent = planet.gravity ? planet.gravity : "Gravity not found";

                
            });
            console.log(data)
        })
        .catch(error => {
            alert("An error occurred while fetching data from the Star Wars API. Please try again later.");
            console.error("Error fetching data from the Star Wars API:", error);
        });
});