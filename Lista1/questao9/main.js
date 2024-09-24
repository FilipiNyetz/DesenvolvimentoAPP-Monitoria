const tempoNaTela= document.querySelector('.tempo-tela')
let tempoSegundos = parseFloat(prompt('Insira a quantidade de tempo em segundos: '));

function formatarTempo(tempoSegundos) {
    if (isNaN(tempoSegundos) || tempoSegundos < 0) {
        return "Por favor, insira um número válido de segundos.";
    }

    let dias = Math.floor(tempoSegundos / (24 * 3600));
    tempoSegundos %= (24 * 3600);

    let horas = Math.floor(tempoSegundos / 3600);
    tempoSegundos %= 3600;

    let minutos = Math.floor(tempoSegundos / 60);
    let segundos = tempoSegundos % 60;

    return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos.toFixed(2)} segundos.`;
}


let tempoFormatado = formatarTempo(tempoSegundos);
tempoNaTela.innerHTML=tempoFormatado;

// Exibindo a data e hora atual utilizando a função Date

