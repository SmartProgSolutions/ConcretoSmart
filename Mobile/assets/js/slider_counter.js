$(document).ready(function() {
    $(".slider").on("afterChange", function(event, slick, currentSlide) {
      let title = "Seja bem vindo"; // Título padrão
      let texto = "Conheça o nosso aplicativo e veja como podemos te ajudar. pelos URLs das suas próprias imagens. Você pode personalizar ainda mais o slider ajustando as opções do Slick Slider de acordo com suas necessidades." //texto padrão

  
      if (currentSlide === 1) {
        title = "Nossas ferramentas";
        texto = "Esse é o texto da slide 2"
      } else if (currentSlide === 2) {
        title = "Nossa comunidade";
        texto = "Esse é o texto da slide 3"
      }
  
      $(".title").text(title);
      $(".texto").text(texto);
    });
  
    // Inicialize o slider (supondo que você esteja usando o slick slider)
    $(".slider").slick({
      // Suas configurações do slider aqui
    });
  });
  