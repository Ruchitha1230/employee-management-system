const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "employee_database",
    password: "Ruchitha@3012",
    port: 5432,
});

// Test Database Connection
pool.connect()
    .then(() => {
        console.log("✅ Connected to PostgreSQL");
    })
    .catch((err) => {
        console.error("❌ Database Connection Error:", err);
    });

// ===============================
// Home Route
// ===============================
app.get("/", (req, res) => {
    res.send("Employee Management Backend is Running!");
});

// ===============================
// GET All Employees
// ===============================
app.get("/employees", async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM employees ORDER BY id"
        );

        res.json(result.rows);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Database Error"
        });

    }

});

// ===============================
// Add Employee
// ===============================
app.post("/employees", async (req, res) => {

    const { id, name, department, salary } = req.body;

    try {

        await pool.query(

            `INSERT INTO employees(id,name,department,salary)
             VALUES($1,$2,$3,$4)`,

            [id, name, department, salary]

        );

        res.status(201).json({
            success: true,
            message: "Employee Added Successfully"
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: "Database Error"
        });

    }

});

// ===============================
// Signup API
// ===============================
app.post("/signup", async (req, res) => {

    const { name, email, password } = req.body;

    try {

        await pool.query(

            `INSERT INTO users(name,email,password)
             VALUES($1,$2,$3)`,

            [name, email, password]

        );

        res.status(201).json({

            success: true,
            message: "Registration Successful"

        });

    } catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,
            message: "Registration Failed"

        });

    }

});

// ===============================
// Login API
// ===============================
app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    try {

        const result = await pool.query(

            "SELECT * FROM users WHERE email=$1 AND password=$2",

            [email, password]

        );

        if (result.rows.length > 0) {

            res.json({

                success: true,
                message: "Login Successful"

            });

        } else {

            res.status(401).json({

                success: false,
                message: "Invalid Email or Password"

            });

        }

    } catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,
            message: "Database Error"

        });

    }

});

// ===============================
// Start Server
// ===============================
app.listen(PORT, () => {

    console.log(`🚀 Server is running on http://localhost:${PORT}`);

});