// seu_script.js
document.addEventListener("DOMContentLoaded", function () {
    // Carregue o conteúdo do result.html
    fetch("./result/result.html")
        .then(response => response.text())
        .then(data => {
            // Insira o conteúdo do resultado no elemento com ID "resultComponent"
            document.querySelector("#resultComponent").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o header:", error));
});
