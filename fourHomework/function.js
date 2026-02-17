// Array of 15 Products
let products = [
    new Product("Apple", "Food", true, 5),
    new Product("Orange", "Food", false, 4),
    new Product("Eggs", "Food", true, 6),
    new Product("Ice cream", "Food", false, 12),
    new Product("Avocado", "Food", false, 8),

    new Product("TV", "Electronics", true, 300),
    new Product("Laptop", "Electronics", false, 800),
    new Product("Oven", "Electronics", true, 250),
    new Product("Iron", "Electronics", false, 40),

    new Product("Umbrella", "Accessories", false, 25),
    new Product("Earrings", "Accessories", true, 50),
    new Product("Watch", "Accessories", false, 150),

    new Product("Olive oil", "Food", true, 22),
    new Product("Air fryer", "Electronics", false, 120),
    new Product("Onion", "Food", false, 3)
];
// Constructor Function
function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}


// Requirements

//Products with price > 20
let expensiveProducts = products.filter(product => product.price > 20);
console.log("Products with price > 20:");
console.log(expensiveProducts);


// Names of Food products on discount
let discountedFoodNames = products
    .filter(product => product.category === "Food" && product.hasDiscount)
    .map(product => product.name);

console.log("Food products on discount:");
console.log(discountedFoodNames);


// Prices of all discounted products
let discountedPrices = products
    .filter(product => product.hasDiscount)
    .map(product => product.price);

console.log("Prices of discounted products:");
console.log(discountedPrices);


// Name and price of products starting with vowel and NOT on discount
let vowels = ["A", "E", "I", "O", "U"];

let vowelProducts = products
    .filter(product => {
        let firstLetter = product.name[0].toUpperCase();
        return vowels.includes(firstLetter) && !product.hasDiscount;
    })
    .map(product => ({
        name: product.name,
        price: product.price
    }));

console.log("Products starting with vowel and NOT on discount:");
console.log(vowelProducts);

// Helper function to build tables
function buildTable(elementId, data, headers) {
    let table = document.getElementById(elementId);
    let html = "<tr>";

    headers.forEach(h => html += `<th>${h}</th>`);
    html += "</tr>";

    data.forEach(row => {
        html += "<tr>";
        if (typeof row === "object" && !Array.isArray(row)) {
            Object.values(row).forEach(val => html += `<td>${val}</td>`);
        } else {
            html += `<td>${row}</td>`;
        }
        html += "</tr>";
    });

    table.innerHTML = html;
}

// Build all tables
buildTable("expensiveTable", expensiveProducts, ["Name", "Category", "Discount", "Price"]);
buildTable("discountedFoodTable", discountedFoodNames, ["Food Name"]);
buildTable("discountedPricesTable", discountedPrices, ["Price"]);
buildTable("vowelProductsTable", vowelProducts, ["Name", "Price"]);


