function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const correctPassword = "123"; // Replace with your desired password

    if (passwordInput === correctPassword) {
        document.getElementById("message").textContent = "Access granted!";
        document.getElementById("error-message").textContent = "";
        window.location.href = "results.html";
    } else {
        document.getElementById("message").textContent = "";
        document.getElementById("error-message").textContent = "Incorrect password";
    }
}