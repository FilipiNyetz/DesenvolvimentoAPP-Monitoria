let numeroSorteado = gerarNumeroAleatorio(); // Número entre 1 e 100
let tentativas = 10; // Número total de tentativas
let contador = 0; // Contador de tentativas

const palpiteInput = document.getElementById('palpite');
const resultadoDiv = document.getElementById('resultado');

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
}
console.log(numeroSorteado)

function jogar() {
    const palpite = parseInt(palpiteInput.value);
    setTimeout(exibirMensagens,2000)
    palpiteInput.value = ""; // Limpa o campo de entrada

    // Valida se o palpite está dentro do intervalo permitido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultadoDiv.textContent = "Por favor, insira um número entre 1 e 100.";
        return;
    }

    // Chama a função de validação do palpite
    validarPalpite(palpite);
}

function validarPalpite(palpite) {
    tentativas--;
    // O loop for é usado para controlar as tentativas
    for (contador; contador < tentativas; contador++) {
        if (palpite === numeroSorteado) {
            resultadoDiv.textContent = "PARABÉNS! Você acertou em " + (contador ) + " tentativas!";
            setTimeout(resetarJogo, 2000); // Reinicia o jogo após 2 segundos
            return;
        } else if (contador === tentativas - 1) {
            resultadoDiv.textContent = "QUE PENA! Você perdeu. O número era " + numeroSorteado + ".";
            setTimeout(resetarJogo, 2000); // Reinicia o jogo após 2 segundos
            return;
        } else {
            // Dica para o usuário
            if (palpite > numeroSorteado) {
                resultadoDiv.textContent = "Insira um número menor.";
            } else {
                resultadoDiv.textContent = "Insira um número maior.";
            }
            resultadoDiv.textContent += " Você ainda tem " + (tentativas--) + " tentativas restantes.";
            break; // Saímos do loop para permitir nova entrada
        }
    }
}

function resetarJogo() {
    numeroSorteado = gerarNumeroAleatorio(); // Gera um novo número
    contador = 0; // Reseta o contador
    resultadoDiv.textContent = ""; // Limpa a mensagem de resultado
}
function exibirMensagens(){
    resultadoDiv.textContent="PENSE BEM, NAO GASTE TENTATIVA ATOA"
}
