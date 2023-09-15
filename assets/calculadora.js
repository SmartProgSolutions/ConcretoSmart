        function calcularVolume() {
            var comprimento = parseFloat(document.getElementById('comprimento').value);
            var largura = parseFloat(document.getElementById('largura').value);
            var altura = parseFloat(document.getElementById('altura').value);

            if (!isNaN(comprimento) && !isNaN(largura) && !isNaN(altura)) {
                var volume = comprimento * largura * altura;
                document.getElementById('resultado').innerHTML = 'Volume: ' + volume.toFixed(2) + ' unidades cúbicas';
            } else {
                document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos para as dimensões.';
            }
        }