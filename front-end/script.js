const API_URL = "http://localhost:3000/employees";

// Load employees when page opens
window.onload = loadEmployees;

// Add Employee button
document.getElementById("addEmployee").addEventListener("click", addEmployee);

// Load employees from backend
async function loadEmployees() {

    const response = await fetch(API_URL);
    const employees = await response.json();

    const table = document.getElementById("employeeTable");

    // Clear old rows
    table.innerHTML = "";

    employees.forEach(employee => {

        const row = table.insertRow();

        row.insertCell(0).innerText = employee.id;
        row.insertCell(1).innerText = employee.name;
        row.insertCell(2).innerText = employee.department;
        row.insertCell(3).innerText = employee.salary;

    });

}

// Add employee
async function addEmployee() {

    const id = Date.now();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const salary = document.getElementById("salary").value;

    if (!name || !department || !salary) {
        alert("Please fill all fields");
        return;
    }

    const employee = {
        id,
        name,
        department,
        salary
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });

    if (response.ok) {
        alert("Employee Added Successfully");

        document.getElementById("name").value = "";
        document.getElementById("department").value = "";
        document.getElementById("salary").value = "";

        loadEmployees();
    } else {
        alert("Failed to add employee");
    }

}