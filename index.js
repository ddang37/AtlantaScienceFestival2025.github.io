function showTextBySeconds(textElement, text, second) {
    textElement.textContent = text;
    setTimeout(() => {
      textElement.textContent = '';
    }, second * 1000);
}

function goHome() {
    window.location.href = "home.html";
}
