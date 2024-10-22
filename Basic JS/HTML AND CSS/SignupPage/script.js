const value = document.getElementById("h1");
value.innerText = "output";

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // alert(`User ${username} registered successfully with email ${email}`);

    value.innerHTML = `User ${username} registered successfully with email ${email}`;
  });
