

const cluePasswords = ["00", "11", "22", "33", "44", "55", "66"];




function checkPassword() {
    const clueInput = document.getElementById("clueNumber");
    const passwordInput = document.getElementById("password");
    const correctPassword = cluePasswords[clueInput.value];

    if (passwordInput.value === correctPassword) {
        document.getElementById("message").textContent = "Access granted!";
        document.getElementById("error-message").textContent = "";
        window.location.href = "results.html";
    } else {
        document.getElementById("message").textContent = "";
        //document.getElementById("error-message").textContent = "Incorrect password";
        const errorMessage = document.getElementById("error-message");
        showTextBySeconds(errorMessage, "Incorrect password", 1);
        passwordInput.value = "";
    }
}

function showTextBySeconds(textElement, text, second) {
    textElement.textContent = text;
    setTimeout(() => {
      textElement.textContent = '';
    }, second * 1000);
  }