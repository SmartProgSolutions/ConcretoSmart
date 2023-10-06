// Adicione um evento de escuta ao select, e mostra opções de traços de acordo com o método
const selecionarMetodo = document.getElementById('opcoes-metodo');
selecionarMetodo.addEventListener('change', function() {
    const divfcj = document.getElementById('divfcj');
    const divfck = document.getElementById('divfck');
    const divtiposCmento = document.getElementById('tiposCimento');

    if (this.value === 'fcj') { //this.value refere-se ao valor do option selecionado
        divfcj.style.display = 'block';
        divfck.style.display = 'none';
        divtiposCmento.style.display = 'block';

    } else if (this.value === 'fck') {
        divfcj.style.display = 'none';
        divfck.style.display = 'block';
        divtiposCmento.style.display = 'block';
    } else {
        divfcj.style.display = 'none';
        divfck.style.display = 'none';
        divtiposCmento.style.display = 'block';
    }
});

//Deve-se verificar o método utilizado e verificar o tipo de estrutura escohida
// Adicione um evento de escuta ao select e mostra as opções de tipo de cimento com base no tipo de método e no tipo de estrutura
const selecionarTipoDeConcreto = document.getElementById() 