const form = document.getElementById("registerForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmError = document.getElementById("confirmError");
  const successMessage = document.getElementById("successMessage");
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  successMessage.textContent = "";
  let isValid = true;
  if (name === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }
  if (confirmPassword !== password) {
    confirmError.textContent = "Passwords do not match.";
    isValid = false;
  }
  if (isValid) {
    successMessage.textContent = "Registration Successful!";
    form.reset();
  }
});
