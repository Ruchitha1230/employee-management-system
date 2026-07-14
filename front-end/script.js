console.log("Employee Management System Loaded");

document.getElementById("addEmployee").addEventListener("click", function () {

    const name = document.getElementById("name").value;

    const department = document.getElementById("department").value;

    const salary = document.getElementById("salary").value;

    alert(
        "Employee Details\n\n" +
        "Name: " + name +
        "\nDepartment: " + department +
        "\nSalary: " + salary
    );

});