const API_URL = "http://localhost:3000/employees";

document.getElementById("employeeForm").addEventListener("submit", addEmployee);

async function addEmployee(event) {

    event.preventDefault();

    const employee = {
        id: Date.now(),
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value
    };

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });

        const data = await response.json();

        if (response.ok) {

            alert(data.message);

            window.location.href = "employees.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to server.");

    }

}