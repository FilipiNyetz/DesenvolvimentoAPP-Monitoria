let notas = [];
let pesos = [];
let i;
let mediaPonderada;

pegarNotas();

function pegarNotas() {
    for (i = 0; i < 3; i++) {
        notas[i] = parseFloat(prompt(`Insira a nota ${i + 1}`));
        pesos[i] = parseFloat(prompt(`Insira o peso referente à nota ${i + 1}`));
    }
}

console.log(notas);

function calcularMedia(notas, pesos) {
    let valorNotaComPeso = 0;
    let somaPesos = 0;

    for (i = 0; i < 3; i++) {
        let nota = notas[i];//PEga o valor da nota com o indice que esta sendo percorrido
        let peso = pesos[i];//Pega o peso com o valor de indice i
        somaPesos += peso; // So faz a soma de todos os pesos
        valorNotaComPeso += nota * peso; //A cada iteração do loop for ele faz o calculo de (n1*p1)+...
    }

    mediaPonderada = valorNotaComPeso / somaPesos;
    console.log(mediaPonderada);
    return mediaPonderada;
}

mediaPonderada = calcularMedia(notas, pesos);
alert(`A média ponderada é ${mediaPonderada}`);
