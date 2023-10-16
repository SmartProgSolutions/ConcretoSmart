        // Função que calcula o volume do bloco de concreto 
        function calcularVolume() {
            // Obter os valores dos campos de entrada
            const comprimentoEmCm = parseFloat(document.getElementById("inputComprimento").value);
            const larguraEmCm = parseFloat(document.getElementById("inputLargura").value);
            const alturaEmCm = parseFloat(document.getElementById("inputAltura").value);
            const raioEmCm = parseFloat(document.getElementById("inputRaio").value);

            //Verifica se os valores existem e caso existam executa a função
            if(alturaEmCm && raioEmCm && !comprimentoEmCm && !larguraEmCm){
                const volume = calcularVolumeCilindro(alturaEmCm, raioEmCm);
                apresentarVolume(volume);
            } else if(alturaEmCm && !raioEmCm && comprimentoEmCm && larguraEmCm){
                const volume = calcularVolumeBloco(alturaEmCm, comprimentoEmCm, larguraEmCm);
                apresentarVolume(volume);
            }
            
        }

        function calcularVolumeBloco(alturaEmCm, comprimentoEmCm, larguraEmCm){
            // Converter os valores para metros
            const comprimentoEmMetros = comprimentoEmCm / 100;
            const larguraEmMetros = larguraEmCm / 100;
            const alturaEmMetros = alturaEmCm / 100;
          
            // Calcular o volume em metros cúbicos (m³)
            const volumeEmMetrosCubicos = comprimentoEmMetros * larguraEmMetros * alturaEmMetros;
          
            return volumeEmMetrosCubicos; 
        }

        // Função que calcula o volume do cilindro de concreto 
        function calcularVolumeCilindro(alturaEmCm, raioEmCm) {
          
            // Converter os valores para metros
            const raioEmMetros = raioEmCm / 100;
            const alturaEmMetros = alturaEmCm / 100;
          
            // Calcular o volume em metros cúbicos (m³)
            const volumeEmMetrosCubicos = Math.PI * (raioEmMetros ** 2) * alturaEmMetros;
            
            return volumeEmMetrosCubicos.toFixed(4);           
            // Exibir o resultado
            // document.getElementById("resultadoo").innerHTML = "Volume: " + volumeEmMetrosCubicos + " m³";

        }

        function apresentarVolume(volume){
            //Selecionar o input com id volume
            const inputVolume = document.getElementById("volume");

            //Atribuir inputVolume o valor volume
            inputVolume.value = volume;

            //Ocultar a div volume-desconhecido e exibir a div volume-conhecido
            document.getElementById("volume-desconhecido").style.display = "none";
            document.getElementById("volume-conhecido").style.display = "block";

            //Alterar o select-volume
        }




// Exibe os campos de volume conhecido ou desconhecido
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento select
    const selectVolume = document.getElementById("select-volume");
    const selectFormato = document.getElementById("selectFormato");

    // Obtém os inputs 
    const inputAltura = document.getElementById("inputAltura");
    const inputRaio = document.getElementById("inputRaio");
    const inputComprimento = document.getElementById("inputComprimento");
    const inputLargura = document.getElementById("inputLargura");
    const inputVolume = document.getElementById("inputVolume");
    

    // Obtém as divs
    const volumeConhecido = document.getElementById("volume-conhecido");
    const volumeDesconhecido = document.getElementById("volume-desconhecido");

    // Adiciona um ouvinte de evento para o evento "change" no selectVolume
    selectVolume.addEventListener("change", function() {
        if (selectVolume.value === "volume-conhecido") {
            // Se "Volume conhecido" for selecionado, mostra a div "volume-conhecido" e oculta a div "volume-desconhecido"
            volumeConhecido.style.display = "block";
            volumeDesconhecido.style.display = "none";
        } else if (selectVolume.value === "volume-desconhecido" && selectFormato.value === "bloco") {
            // Se "Volume desconhecido" for selecionado e o formato escolhido seja bloco, mostra a div "volume-desconhecido", oculta a div "volume-conhecido", e oculta a div com id raio
            volumeConhecido.style.display = "none";
            volumeDesconhecido.style.display = "block";
            volumeDesconhecido.querySelector("#raio").style.display = "none";
        } else if (selectVolume.value === "volume-desconhecido" && selectFormato.value === "cilindro") {
            // Se "Volume desconhecido" for selecionado e o formato escolhido seja cilindro, mostra a div "volume-desconhecido", oculta a div "volume-conhecido", e oculta as divs com id largura e comprimento
            volumeConhecido.style.display = "none";
            volumeDesconhecido.style.display = "block";
            volumeDesconhecido.querySelector("#largura").style.display = "none";
            volumeDesconhecido.querySelector("#comprimento").style.display = "none";
        }
    });
    // Adiciona um ouvinte de evento para o evento "change" no selectFormato, para caso o selectFormato seja alterado
    selectFormato.addEventListener("change", () => {
        if(selectFormato.value === "bloco" && selectVolume.value === "volume-conhecido"){
            volumeConhecido.style.display = "block";
            volumeDesconhecido.style.display = "none";
            volumeDesconhecido.querySelector("#largura").style.display = "block";
            volumeDesconhecido.querySelector("#comprimento").style.display = "block";
        } else if(selectFormato.value === "bloco" && selectVolume.value === "volume-desconhecido"){
            volumeConhecido.style.display = "none";
            volumeDesconhecido.style.display = "block";
            // A parte de baixo serve para quando ele mudar de novo, não apareça apenas altura
            volumeDesconhecido.querySelector("#raio").style.display = "none";
            volumeDesconhecido.querySelector("#largura").style.display = "block";
            volumeDesconhecido.querySelector("#comprimento").style.display = "block";
            //A parte de baixo serve para zerar o inputRaio e o inputVolume quando o formato é alterado
            inputRaio.value = "";
            inputVolume.value = "";
        } else if(selectFormato.value === "cilindro" && selectVolume.value === "volume-desconhecido"){
            volumeConhecido.style.display = "none";
            volumeDesconhecido.style.display = "block";
            // A parte de baixo serve para quando ele mudar de novo, não apareça apenas altura
            volumeDesconhecido.querySelector("#raio").style.display = "block";
            volumeDesconhecido.querySelector("#largura").style.display = "none";
            volumeDesconhecido.querySelector("#comprimento").style.display = "none";
            //A parte de baixo serve para zerar o inputComprimento, o inputLargura e o inputVolume quando o formato é alterado
            inputComprimento.value = "";
            inputLargura.value = "";
            inputVolume.value = "";
        } else if(selectFormato.value === "cilindro" && selectVolume.value === "volume-conhecido"){
            volumeConhecido.style.display = "block";
            volumeDesconhecido.style.display = "none";
            volumeDesconhecido.querySelector("#raio").style.display = "block";
        } 
    });

    // Adiciona um ouvinte de evento para o evento "blur" para cada input, logo caso o input perca o foco, será ativado a função calcularVolume
    inputAltura.addEventListener("blur", calcularVolume);
    inputRaio.addEventListener("blur", calcularVolume);
    inputComprimento.addEventListener("blur", calcularVolume);
    inputLargura.addEventListener("blur", calcularVolume);
 
    
    
    // Define o valor inicial do select e exibe a div correspondente
    selectVolume.value = "volume-conhecido";
    volumeConhecido.style.display = "block";
    volumeDesconhecido.style.display = "none";
});

