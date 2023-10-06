// seu_script.js
document.addEventListener("DOMContentLoaded", function () {
    // Carregue o conteúdo do footer.html
    fetch("./footer/footer.html")
        .then(response => response.text())
        .then(data => {
            // Insira o conteúdo do footer no elemento com ID "footerComponent"
            document.querySelector("#footerComponent").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o footer:", error));
});
