        // Função que calcula o volume do concreto 
        function calcularVolume() {
            // Obter os valores dos campos de entrada
            var comprimentoEmCm = parseFloat(document.getElementById("comprimento").value);
            var larguraEmCm = parseFloat(document.getElementById("largura").value);
            var alturaEmCm = parseFloat(document.getElementById("altura").value);
          
            // Converter os valores para metros
            var comprimentoEmMetros = comprimentoEmCm / 100;
            var larguraEmMetros = larguraEmCm / 100;
            var alturaEmMetros = alturaEmCm / 100;
          
            // Calcular o volume em metros cúbicos (m³)
            var volumeEmMetrosCubicos = comprimentoEmMetros * larguraEmMetros * alturaEmMetros;
          
            // Exibir o resultado
            document.getElementById("resultadoo").innerHTML = "Volume: " + volumeEmMetrosCubicos + " m³";

        }




// Exibe os campos de volume conhecido ou desconhecido
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

