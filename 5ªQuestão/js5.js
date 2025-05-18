let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificarPalpite() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const message = document.getElementById("message");
    const attempts = document.getElementById("attempts");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = "Digite um número válido entre 1 e 10";
        message.style.color = "red";
        return;
    }

    tentativas++;
    attempts.textContent = tentativas;

    if (userGuess === numeroAleatorio) {
        message.textContent = `✔ Você acertou o número em ${tentativas} tentativas!`;
        message.style.color = "green";
    } else if (userGuess !== numeroAleatorio) {
        message.textContent = "✖ Número Errado!";
        message.style.color = "red";
    }
}
