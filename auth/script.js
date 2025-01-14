// Hardcoded credentials (for demo purposes)
const validUsername = "user";
const validPassword = "password123";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the entered username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if credentials match
    if (username === validUsername && password === validPassword) {
        // Store login status in localStorage
        localStorage.setItem("isLoggedIn", "true");

        // Redirect to the dashboard page
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
});

// Create users DB (Schema: userID | username | firstName | otherName | lastName | password | dateCreated | lastLoggedIn)
// User passwords will be hashed in the DB
// Create endpoint for handling validation of login credential on login
