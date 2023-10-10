// seu_script.js
document.addEventListener("DOMContentLoaded", function () {
    // Carregue o conteúdo do header.html
    fetch("./header/header.html")
        .then(response => response.text())
        .then(data => {
            // Insira o conteúdo do header no elemento com ID "headerComponent"
            document.querySelector("#headerComponent").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o header:", error));
});
