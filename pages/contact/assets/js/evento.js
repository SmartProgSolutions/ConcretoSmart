document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form"); // Substitua 'seu-formulario' pelo ID do seu formulário
  
    formulario.addEventListener("submit", function (event) {
      // Exibe a mensagem de agradecimento
      const agradecimento = document.getElementById("agradecimento");
      agradecimento.style.display = "block";
  
      // Impede o envio padrão do formulário
      event.preventDefault();
  
      // Opcional: Redefine o formulário após um atraso de 3 segundos
      setTimeout(function () {
        formulario.reset();
        agradecimento.style.display = "none"; // Oculta a mensagem novamente
      }, 8000); // 3000 milissegundos = 3 segundos
  

        // Inicia a animação da barra de progresso
        const progressBar = document.querySelector(".progress-bar");
        progressBar.style.animation = "progressBar 3s linear";
        
      // Envie o formulário manualmente após a exibição da mensagem de agradecimento
      // Se você não deseja reenviar o formulário, remova esta linha
      formulario.submit();
    });
  });
  