const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    alert("Form submitted successfully!");
    form.reset();
    clearErrors();
  }
});


nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

function validateName() {
  const value = nameInput.value.trim();
  const error = nameInput.nextElementSibling;

  if (value.length < 3) {
    error.textContent = "Name must be at least 3 characters";
    return false;
  }

  error.textContent = "";
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const error = emailInput.nextElementSibling;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    error.textContent = "Enter a valid email";
    return false;
  }

  error.textContent = "";
  return true;
}

function validatePassword() {
  const value = passwordInput.value;
  const error = passwordInput.nextElementSibling;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!passwordRegex.test(value)) {
    error.textContent =
      "Password must be 8+ chars, include uppercase, lowercase & number";
    return false;
  }

  error.textContent = "";
  return true;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.textContent = "");
}
