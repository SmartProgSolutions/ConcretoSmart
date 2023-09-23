        // Função que calcula o volume do concreto 
        function calcularVolume() {
            const comprimento = parseFloat(document.getElementById('comprimento').value);
            const largura = parseFloat(document.getElementById('largura').value);
            const altura = parseFloat(document.getElementById('altura').value);

            if (!isNaN(comprimento) && !isNaN(largura) && !isNaN(altura)) {
                var volume = comprimento * largura * altura;
                document.getElementById('resultado').innerHTML = 'Volume: ' + volume.toFixed(2) + ' unidades cúbicas';
            } else {
                document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos para as dimensões.';
            }
        }

        // Adicione um evento de escuta ao select
        document.getElementById('opcoes-metodo').addEventListener('change', function() {
            var div1 = document.getElementById('div1');
            var div2 = document.getElementById('div2');

            if (this.value === 'fcj') {
                div1.style.display = 'block';
                div2.style.display = 'none';
            } else if (this.value === 'fck') {
                div1.style.display = 'none';
                div2.style.display = 'block';
            } else {
                div1.style.display = 'none';
                div2.style.display = 'none';
            }
        });

        // Preenche os inputs de acordo com o traço selecionado Método FCJ
        document.getElementById('traco-fcj').addEventListener('change', function() {
            var cimento = document.getElementById('cimento');
            var areia = document.getElementById('areia');
            var brita = document.getElementById('brita');
            var MPA = document.getElementById('MPA');

            if (this.value === 'opcaoA') {
                cimento.value = '1';
                areia.value = '1';
                brita.value = '2';
                MPA.value = '40';
            } else if (this.value === 'opcaoB') {
                cimento.value = '1';
                areia.value = '1.5';
                brita.value = '3';
                MPA.value = '35';
            } else if (this.value === 'opcaoC') {
                cimento.value = '1';
                areia.value = '2';
                brita.value = '3';
                MPA.value = '25';
            } else if (this.value === 'opcaoD') {
                cimento.value = '1';
                areia.value = '2.5';
                brita.value = '4';
                MPA.value = '18';
            } else if (this.value === 'opcaoE') {
                cimento.value = '1';
                areia.value = '3';
                brita.value = '5';
                MPA.value = '12';
            } else if (this.value === 'opcaoF') {
                cimento.value = '1';
                areia.value = '3';
                brita.value = '6';
                MPA.value = '10';
            } else {
                cimento.value = '';
                areia.value = '';
                brita.value = '';
                MPA.value = '';
            }
        });

 // Preenche os inputs de acordo com o traço selecionado Método FCK
 document.getElementById('traco-fck').addEventListener('change', function() {
    var cimento = document.getElementById('cimento');
    var areia = document.getElementById('areia');
    var brita = document.getElementById('brita');
    var MPA = document.getElementById('MPA');

    if (this.value === 'opcaoG') {
        cimento.value = '1';
        areia.value = '2.5';
        brita.value = '3.9';
        MPA.value = '40';
    } else if (this.value === 'opcaoH') {
        cimento.value = '1';
        areia.value = '1.8';
        brita.value = '5.9';
        MPA.value = '35';
    } else if (this.value === 'opcaoI') {
        cimento.value = '1';
        areia.value = '5';
        brita.value = '5.9';
        MPA.value = '25';
    } else if (this.value === 'opcaoJ') {
        cimento.value = '1';
        areia.value = '6.3';
        brita.value = '7.9';
        MPA.value = '18';
    } else if (this.value === 'opcaoK') {
        cimento.value = '1';
        areia.value = '7.5';
        brita.value = '9.8';
        MPA.value = '12';
    } else if (this.value === 'opcaoL') {
        cimento.value = '1';
        areia.value = '7.5';
        brita.value = '11.7';
        MPA.value = '10';
    } else {
        cimento.value = '';
        areia.value = '';
        brita.value = '';
        MPA.value = '';
    }
});
