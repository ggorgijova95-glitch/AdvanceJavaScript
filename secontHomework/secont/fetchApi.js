let button = document.getElementById("fetchButton");
let table = document.getElementById("userTable");
// Fetch user data from JSONPlaceholder API and display it in the table
button.addEventListener("click",async function () {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
        let user = await response.json();
        table.innerHTML = `
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.company.name}</td>
                </tr>
            `;
            //user data in object format in console
                console.log(user);
            /*for (let key in user) {
                console.log(`${key}: ${user[key]}`);
            }*/
        }
        catch(error) {
            console.error('Error fetching user data:', error);
        }
    });