
// Animação da div 
document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector(".animated-div");
    setTimeout(function() {
      div.style.height = "40vh"; // Define a altura da div como 40% da altura da tela
    }, 500); // Aguarda 1 segundo antes de fazer a animação
  });
  