// Select elements
const form = document.querySelector("form");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const rememberMe = document.querySelector("input[type='checkbox']");

// Load saved email if Remember Me was selected before
window.onload = () => {
    if (localStorage.getItem("savedEmail")) {
        emailInput.value = localStorage.getItem("savedEmail");
        rememberMe.checked = true;
    }
};

// Form Submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid Email ID.");
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    // Remember Me Logic
    if (rememberMe.checked) {
        localStorage.setItem("savedEmail", email);
    } else {
        localStorage.removeItem("savedEmail");
    }

    // SUCCESS
    alert("Login Successful!");
});
