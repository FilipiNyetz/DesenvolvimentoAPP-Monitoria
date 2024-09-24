
function mudarTexto() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Este é o novo título!";
}

function mudarCor() {
    const titulo = document.getElementById("titulo");
    const letters = '0123456789ABCDEF';
    let corHexD = '#';
    
    for (let i = 0; i < 6; i++) {
      corHexD+= letters[Math.floor(Math.random() * 16)];
    }
    titulo.style.color = corHexD;
}


function adicionarParagrafo() {
    const areaParagrafos = document.getElementById("area-paragrafos");
    const novoParagrafo = document.createElement("p");
    const conteudoParagrafo=prompt("Insira seu texto do paragrafo")
    novoParagrafo.textContent = conteudoParagrafo;
    areaParagrafos.appendChild(novoParagrafo);
}
