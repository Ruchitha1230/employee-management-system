const express = require("express");

const app = express();

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("Employee Management Backend is Running!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});