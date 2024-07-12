# Decodificador de Texto

Este é um projeto simples de codificação e decodificação de texto usando a Cifra de César, desenvolvido com HTML, CSS e JavaScript.

## Visão Geral

O site permite que os usuários insiram um texto, escolham entre codificar ou decodificar, e vejam o resultado no campo de resultado. Também é possível copiar o texto codificado ou decodificado para a área de transferência.

## Funcionalidades

- Codificação de texto usando a Cifra de César.
- Decodificação de texto usando a Cifra de César.
- Interface simples e intuitiva.
- Opção de copiar o texto resultante para a área de transferência.

## Estrutura do Projeto

- `index.html`: Estrutura principal do site.
- `css/reset.css`: Estilos de reset para garantir consistência entre navegadores.
- `css/style.css`: Estilos personalizados para o site.
- `assets/`: Contém imagens e ícones usados no projeto.
- `js/script.js`: Lógica de codificação e decodificação, e funcionalidades de interação.

## Como Usar

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` no seu navegador.
3. Digite o texto que deseja codificar ou decodificar no campo de entrada.
4. Clique no botão "Codificar" ou "Decodificar" para ver o resultado.
5. Use o botão "Copiar" para copiar o texto resultante para a área de transferência.

## Exemplo de Uso

1. Digite o texto no campo de entrada: `abc`
2. Clique no botão "Codificar".
3. O resultado será exibido no campo de resultado: `def`
4. Clique no botão "Copiar" para copiar o resultado.

## Código JavaScript

```javascript
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

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
