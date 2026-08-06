const API_URL = "http://localhost:3000/signup";

document.getElementById("signupForm").addEventListener("submit", registerUser);

async function registerUser(event) {

    event.preventDefault();

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                password
            })

        });

        const data = await response.json();

        alert(data.message);

        if (data.success) {

            window.location.href = "login.html";

        }

    } catch (error) {

        console.error(error);

        alert("Server Error");

    }

}