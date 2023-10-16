
$(document).ready(function(){
  $('.slider').slick({
    dots: true, // Exibe os pontos de navegação
    infinite: true, // Habilita rolagem infinita
    speed: 300, // Velocidade da transição em milissegundos
    slidesToShow: 1, // Quantidade de slides visíveis de uma vez
    slidesToScroll: 1, // Quantidade de slides a serem rolados por vez
    prevArrow: '<button class="slick-prev">Previous</button>',
    nextArrow: '<button class="slick-next">Next</button>',
  });
  
  // Atualize o contador de slides quando o slider muda de slide
  $('.slider').on('afterChange', function(event, slick, currentSlide){
    $('.current-slide').text(currentSlide + 1); // Adicione 1 porque o índice começa em 0
  });
  
  $('.total-slides').text($('.slider').slick('getSlick').slideCount);
});

