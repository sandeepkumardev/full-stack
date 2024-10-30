document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get form values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const password2 = document.getElementById("password2").value.trim();

  const output = document.getElementById("output");
  // output.innerHTML = "";

  // Basic validation
  if (!username || !email || !password || !password2) {
    displayMessage("All fields are required", "error");
    return;
  }

  if (password !== password2) {
    displayMessage("Passwords do not match", "error");
    return;
  }

  // Successful validation
  displayMessage(`User ${username} successfully registered`, "success");

  // Reset the form
  document.getElementById("form").reset();
});

function displayMessage(message, type) {
  const output = document.getElementById("output");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}`;
  messageDiv.innerText = message;
  output.appendChild(messageDiv);
}
