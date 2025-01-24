// script.js
// Initialize Intl-Tel-Input
const phoneInput = document.querySelector("#phone");
const iti = window.intlTelInput(phoneInput, {
  initialCountry: "ng", // Default country Nigeria
  preferredCountries: ["ng", "us", "gb"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Toggle Password Visibility

document
  .querySelector(".toggle-password")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const icon = this.querySelector("i");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
