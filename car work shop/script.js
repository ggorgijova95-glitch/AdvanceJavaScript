let navigationService = {
    navItems: document.getElementsByClassName("nav-item"),
    pages: document.getElementsByClassName("page"),
    activateItem: function(item){
        for(let navItem of this.navItems){
            navItem.classList.remove("active");
        }
        item.classList.add("active");
    },
    displayPage: function(index){
        for(let page of this.pages){
            page.style.display="none";
        }
        this.pages[index].style.display="block";
    },
    registerEventListeners: function(){
        for(let i=0; i<this.navItems.length;i++){
            this.navItems[i].addEventListener("click", function(){
                navigationService.activateItem(this);
                navigationService.displayPage(i);
            })
        }
    }
}
navigationService.registerEventListeners();
let usersData = [];

// Function to render table
function renderTable(cars) {
  const tableBody = document.getElementById('userTable');
  tableBody.innerHTML = ''; // Clear previous rows
  cars.forEach(car => {
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${car.brand}</td>
      <td>${car.model}</td>
      <td>${car.type}</td>
      <td>${car.doors}</td>
      <td>${car.gasType}</td>
      <td>${car.color}</td>
      <td>${car.isNew}</td>
      <td>${car.horsepower}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Fetch the JSON file
async function fetchCars() {
  try {
    const response = await fetch('cars.json');
    const data = await response.json();
    // JSON file contains an array of car objects
    usersData = data;
    console.log(usersData); // Log the data to verify it's loaded correctly
    // no initial render; table stays empty until a search is made
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

// initialize data on load
fetchCars();

function searchCars() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const carsTable = document.getElementById('carsTable');

  if (!query) {
    // if input is empty, just clear the table and hide it
    renderTable([]);
    carsTable.style.display = 'none';
    document.getElementById('wrongInputMessage').style.display = "block"; // show error message
    return;
  } else {
    document.getElementById('wrongInputMessage').style.display = "none";
  }

  // filtering logic should run here
  const filteredCars = usersData.filter(car =>
    car.brand.toLowerCase().includes(query) || car.type.toLowerCase().includes(query)
  );

  renderTable(filteredCars);

 // show table only if results exist
if (filteredCars.length > 0) {
  carsTable.style.display = 'table';
  document.getElementById('wrongInputMessage').style.display = "none"; 
} else {
  // length === 0
  carsTable.style.display = 'none';
  document.getElementById('wrongInputMessage').style.display = "block"; 
}
}

// Wire up button
document.getElementById('searchButton').addEventListener('click', searchCars);

// Optional: live search as you type
document.getElementById('searchInput').addEventListener('input', searchCars);

