document.getElementById('codificar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const resultado = cifraDeCesar(texto, 3); // Deslocamento de 3 posições
    document.getElementById('resultado').value = resultado;
});

document.getElementById('decodificar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const resultado = cifraDeCesar(texto, -3); // Deslocamento de -3 posições
    document.getElementById('resultado').value = resultado;
});

document.getElementById('copiar').addEventListener('click', function() {
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
});

function cifraDeCesar(texto, deslocamento) {
    return texto.split('').map(char => {
        if (char.match(/[a-z]/)) {
            let codigo = char.charCodeAt(0);
            let novoCodigo = ((codigo - 97 + deslocamento + 26) % 26) + 97;
            return String.fromCharCode(novoCodigo);
        } else if (char.match(/[A-Z]/)) {
            let codigo = char.charCodeAt(0);
            let novoCodigo = ((codigo - 65 + deslocamento + 26) % 26) + 65;
            return String.fromCharCode(novoCodigo);
        } else {
            return char;
        }
    }).join('');
}
