document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if (password === confirmPassword) {
        message.textContent = "✔ As senhas coincidem!";
        message.style.color = "green";
    } else {
        message.textContent = "✖ As senhas não coincidem!";
        message.style.color = "red";
    }
});
