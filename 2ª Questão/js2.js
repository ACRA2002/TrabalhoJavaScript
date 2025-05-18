document.addEventListener("DOMContentLoaded", function () {
    let contador = 0;
    const botao = document.getElementById("button");
    const contadorElemento = document.getElementById("contador");

    botao.addEventListener("click", function (event) {
        contador++;
        contadorElemento.textContent = contador;
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        const x = event.clientX - botao.offsetLeft;
        const y = event.clientY - botao.offsetTop;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        botao.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
