let frase = prompt('Digite uma frase:');

// Remove espaços extras no início e no final da frase
frase = frase.trim();

// Divide a frase em palavras usando um espaço simples como separador
let palavras = frase.split(' ');

let numeroDePalavras=palavras.length
// Exibe o número de palavras
alert('Número de palavras: ' + numeroDePalavras);
