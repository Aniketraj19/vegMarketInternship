document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateForm()) {
        // Here, you can perform further actions, like submitting the form data to a server.
        // For this example, we'll just log the success message.
        console.log("Form submitted successfully!");
      }
    });
  
    function validateForm() {
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
  
      // Perform validation checks here
      if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return false;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
      }
  
      // Additional checks, like password complexity or email format, can be added here.
  
      return true;
    }
  });
  