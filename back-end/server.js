const express = require("express");

const app = express();

const PORT = 3000;

// This allows Express to read JSON data
app.use(express.json());

// Temporary employee storage
let employees = [];

// Home Route
app.get("/", (req, res) => {
    res.send("Employee Management Backend is Running!");
});

// GET all employees
app.get("/employees", (req, res) => {
    res.json(employees);
});

// POST new employee
app.post("/employees", (req, res) => {

    const employee = req.body;

    employees.push(employee);

    res.status(201).json({
        message: "Employee Added Successfully",
        employee: employee
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});