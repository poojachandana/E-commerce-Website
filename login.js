function loginUser() {
    event.preventDefault(); // prevent form reload
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Dummy authentication
    if (username === "admin" && password === "1234") {
      alert("Login Successful!");
      window.location.href = "index.html"; // redirect to home
    } else {
      alert("Invalid credentials");
    }
  }
  