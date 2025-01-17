document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form submission
    
        // Get the entered username and password
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        // Send credentials to the backend for validation
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.message === 'Login successful!') {
                // Store login status in localStorage
                localStorage.setItem("isLoggedIn", "true");
    
                // Redirect to the dashboard page
                window.location.href = "./index.html";
            } else {
                alert(data.message); // Display error message from server
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error logging in.');
        });
    });
    
})