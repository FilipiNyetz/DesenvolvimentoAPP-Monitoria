const inputIdade = document.querySelector('.input-idade');
const inputPossuiCNH = document.querySelector('.input-cnh');
const permissao = document.querySelector('.resposta');

function verificar(){
    const idade = parseInt(inputIdade.value);
    const CNH = inputPossuiCNH.checked;
    if(idade>=18 && CNH){
        permissao.textContent="Parabéns!! Você pode dirigir";
    }else{
        permissao.textContent="Que pena ):, você ainda não pode dirigir";
    }
}