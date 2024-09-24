let digitosNaTela=document.querySelector('.digitos-tela');

let digitosUsuario = prompt('Insira apenas 5 digitos');

let digitosIndividuais=digitosUsuario.split('')
let digitosSeparados=digitosIndividuais.join('   ')

digitosNaTela.innerHTML=digitosSeparados

console.log(digitosSeparados);