const cluePasswords = ["atlanta", "password", "phishing", "ransomware", "firewall", "mitma", "database"];

function showTextBySeconds(textElement, text, second) {
    textElement.textContent = text;
    setTimeout(() => {
      textElement.textContent = '';
    }, second * 1000);
}

function goHome() {
    window.location.href = "home.html";
}

function checkPassword(aClue, aPassword) {
    let isCorrect = false;
    const correctPassword = cluePasswords[aClue % cluePasswords.length];

    const message = document.getElementById("message");
    const errorMessage = document.getElementById("error-message");

    // Check if clue is valid
    if (isNaN(aClue) || aClue < 0 || aClue >= cluePasswords.length) {
        message.textContent = "";
        showTextBySeconds(errorMessage, "Invalid clue number", 1);
    } 
    // Check if the password is correct
    else if (aPassword.toLowerCase() === correctPassword.toLowerCase()) {
        showTextBySeconds(message, "Access granted", 3);
        isCorrect = true;
    } 
    // If the password is incorrect
    else {
        showTextBySeconds(errorMessage, "Incorrect password", 1);
    }

    aPassword = ""; // Clear the password input
    aClue = ""; // Clear the clue input
    return isCorrect;
}