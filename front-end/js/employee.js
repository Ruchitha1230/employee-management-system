const API_URL = "http://localhost:3000/employees";

const showButton = document.getElementById("showEmployees");
const searchInput = document.getElementById("searchEmployee");
const employeeSection = document.getElementById("employeeSection");
const employeeTable = document.getElementById("employeeTable");

let employees = [];

// Show Employee List
showButton.addEventListener("click", () => {

    employeeSection.style.display = "block";

    loadEmployees();

});

// Load Employees from Backend
async function loadEmployees() {

    try {

        const response = await fetch(API_URL);

        employees = await response.json();

        displayEmployees(employees);

    } catch (error) {

        console.error(error);

        alert("Unable to load employees.");

    }

}

// Display Employees
function displayEmployees(employeeList) {

    employeeTable.innerHTML = "";

    employeeList.forEach(employee => {

        employeeTable.innerHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
            </tr>
        `;

    });

}

// Search Employee
searchInput.addEventListener("keyup", () => {

    const search = searchInput.value.toLowerCase();

    const filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(search)
    );

    displayEmployees(filtered);

});