const paragrafos = document.querySelectorAll('p');

const colorPicker = document.getElementById('colorPicker');
const changeColorBtn = document.getElementById('changeColorBtn');


function mudarCorParagrafos() {
    const corEscolhida = colorPicker.value; // Pega a cor escolhida pelo usuário
    paragrafos.forEach(paragrafo => {
        paragrafo.style.color = corEscolhida; // Altera a cor de cada parágrafo
    });
}

