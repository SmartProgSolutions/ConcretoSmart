document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento select
    var selectVolume = document.getElementById("select-volume");

    // Obtém as divs
    var volumeConhecido = document.getElementById("volume-conhecido");
    var volumeDesconhecido = document.getElementById("volume-desconhecido");

    // Adiciona um ouvinte de evento para o evento "change" no select
    selectVolume.addEventListener("change", function() {
        if (selectVolume.value === "volume-conhecido") {
            // Se "Volume conhecido" for selecionado, mostra a div "volume-conhecido" e oculta a div "volume-desconhecido"
            volumeConhecido.style.display = "block";
            volumeDesconhecido.style.display = "none";
        } else if (selectVolume.value === "volume-desconhecido") {
            // Se "Volume desconhecido" for selecionado, mostra a div "volume-desconhecido" e oculta a div "volume-conhecido"
            volumeConhecido.style.display = "none";
            volumeDesconhecido.style.display = "block";
        }
    });
    
    // Define o valor inicial do select e exibe a div correspondente
    selectVolume.value = "volume-conhecido";
    volumeConhecido.style.display = "block";
    volumeDesconhecido.style.display = "none";
});
