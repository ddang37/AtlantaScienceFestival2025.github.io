

const cluePasswords = ["password", "phishing", "ransomware", "firewall", "mitma", "database"];


function checkPassword() {
    const clueInput = document.getElementById("clueNumber");
    const passwordInput = document.getElementById("password");
    const correctPassword = cluePasswords[clueInput.value - 1];
    

    if (passwordInput.value.toLowerCase() === correctPassword.toLowerCase()) {
        document.getElementById("message").textContent = "Access granted!";
        document.getElementById("error-message").textContent = "";
        window.location.href = "results.html";
    } else {
        document.getElementById("message").textContent = "";
        //document.getElementById("error-message").textContent = "Incorrect password";
        const errorMessage = document.getElementById("error-message");
        showTextBySeconds(errorMessage, "Incorrect password", 1);
        passwordInput.value = "";
        clueInput.value = "";
    }

    const nextClueNumber = (clueInput.value + 1) % cluePasswords.length;
}
function showTextBySeconds(textElement, text, second) {
    textElement.textContent = text;
    setTimeout(() => {
      textElement.textContent = '';
    }, second * 1000);
  }