const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');

    // Pegando os elementos do header e do footer
    const header = document.querySelector('.header');
    const footer = document.querySelector('.main_footer'); // Use .querySelector para pegar pela classe
    const footercopy = document.querySelector('.main_footer_copy'); //o footer é dividido em duas partes quem teem colorações diferentes então deve ser dois processos diferentes
    
    // Aplicando a classe 'dark' neles
    if (header) {
        header.classList.toggle('dark');
    }

    if (footer) {
        footer.classList.toggle('dark');
    }
    if(footercopy){
        footercopy.classList.toggle('dark');
    }

    // document.headerComponent.classList.toggle('dark'); // é para mudar a cor do header, não tá funcionando
    // document.footerComponent.classList.toggle('dark'); // é para mudar a cor do footer, não tá funcionando
});
