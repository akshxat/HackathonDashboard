// Check if the user is logged in
if (localStorage.getItem("isLoggedIn") !== "true") {
  // If not logged in, redirect to login page
  window.location.href = "../auth/login.html";
}

// Logout function
function logout() {
  // Remove the login status from localStorage
  localStorage.removeItem("isLoggedIn");

  // Redirect to the login page
  window.location.href = "../auth/loginform.html";
}