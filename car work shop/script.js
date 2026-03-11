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

// Loader
const loader = document.getElementById("loader");

// Fetch JSON
async function fetchCars() {
    loader.style.display = "flex";
    try {
        const response = await fetch('cars.json');
        usersData = await response.json();
    } catch (err) {
        console.error(err);
    } finally {
        loader.style.display = "none";
    }
}
fetchCars();

// --- Table Search ---
function renderTable(cars){
    const tableBody = document.getElementById("userTable");
    tableBody.innerHTML = "";
    cars.forEach(car=>{
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${car.type}</td>
          <td>${car.brand}</td>
          <td>${car.model}</td>
          <td>${car.doors}</td>
          <td>${car.gasType}</td>
          <td>${car.color}</td>
          <td>${car.isNew ? "New" : "Used"}</td>
          <td>${car.horsepower}</td>
        `;
        tableBody.appendChild(row);
    });
}

function searchCars(){
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const carsTable = document.getElementById("carsTable");
    if(!query){
        renderTable([]);
        carsTable.style.display = "none";
        document.getElementById("wrongInputMessage").style.display = "block";
        return;
    } else {
        document.getElementById("wrongInputMessage").style.display = "none";
    }

    const filteredCars = usersData.filter(car =>
        car.brand.toLowerCase().includes(query) || car.type.toLowerCase().includes(query)
    );

    renderTable(filteredCars);
    carsTable.style.display = filteredCars.length>0 ? "table" : "none";
}
document.getElementById("searchButton").addEventListener("click", searchCars);
document.getElementById("searchInput").addEventListener("input", searchCars);

// --- Filter Cars ---
function renderFilterCars(cars){
    const container = document.getElementById("filterCarsContainer");
    container.innerHTML = "";
    if(cars.length===0){
        container.innerHTML = "<p>No cars found.</p>";
        return;
    }
    cars.forEach(car=>{
        container.innerHTML += `
          <div class="card">
            <h3>${car.brand} ${car.model}</h3>
            <p><b>Type:</b> ${car.type}</p>
            <p><b>Doors:</b> ${car.doors}</p>
            <p><b>Gas Type:</b> ${car.gasType}</p>
            <p><b>Color:</b> ${car.color}</p>
            <p><b>Condition:</b> ${car.isNew ? "New" : "Used"}</p>
            <p><b>Horsepower:</b> ${car.horsepower}</p>
          </div>
        `;
    });
}

function applyFilters(){
    loader.style.display = "flex";
    setTimeout(()=>{
        const brand = document.getElementById("brand").value.toLowerCase();
        const model = document.getElementById("model").value.toLowerCase();
        const doors = document.getElementById("doors").value;
        const color = document.getElementById("color").value.toLowerCase();
        const gasType = document.getElementById("gasType").value;
        const condition = document.querySelector('input[name="condition"]:checked')?.value;
        const hpMin = document.getElementById("hpMin").value;
        const hpMax = document.getElementById("hpMax").value;

        const filteredCars = usersData.filter(car=>{
            if(brand && !car.brand.toLowerCase().includes(brand)) return false;
            if(model && !car.model.toLowerCase().includes(model)) return false;
            if(doors && car.doors!=doors) return false;
            if(color && !car.color.toLowerCase().includes(color)) return false;
            if(gasType && gasType!="" && car.gasType!==gasType) return false;
            if(condition && condition!="" && condition !== (car.isNew?"new":"old")) return false;
            if(hpMin && car.horsepower<hpMin) return false;
            if(hpMax && car.horsepower>hpMax) return false;
            return true;
        });

        loader.style.display = "none";
        renderFilterCars(filteredCars);
    }, 300);
}

// Attach apply button
document.getElementById("applyFiltersButton").addEventListener("click", applyFilters);