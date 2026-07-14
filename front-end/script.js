console.log("Employee Management System Loaded");

// Employee ID starts from 1
let employeeId = 1;

// Get button
const addButton = document.getElementById("addEmployee");

// Add click event
addButton.addEventListener("click", function () {

    // Get values from input fields
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const salary = document.getElementById("salary").value;

    // Validation
    if (name === "" || department === "" || salary === "") {
        alert("Please fill all fields");
        return;
    }

    // Get table body
    const table = document.getElementById("employeeTable");

    // Create a new row
    const row = table.insertRow();

    // Create cells
    row.insertCell(0).innerHTML = employeeId++;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = department;
    row.insertCell(3).innerHTML = salary;

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";

});