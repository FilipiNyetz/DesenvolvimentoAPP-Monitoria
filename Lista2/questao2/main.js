const listaUsuarios=[];
let IMC;

let inputAltura = document.querySelector('.input-altura');
let inputPeso = document.querySelector('.input-peso');
let inputNome = document.querySelector('.input-nome');

const usuariosNaTela = document.querySelector('.lista-resultados')

function calcular(){
    const nomeUsuario = inputNome.value;
    const altura = parseInt(inputAltura.value)/100;
    const peso = parseFloat(inputPeso.value);

    const calculoIMC=peso/(altura*altura);
    let usuario={
        nome: nomeUsuario,
        IMC: calculoIMC.toFixed(2)
    }
    listaUsuarios.push(usuario)
    inputAltura.value="";
    inputPeso.value=""
    inputNome.value=""
    return calculoIMC;
}



function exibir(){
    listaUsuarios.forEach(usuario => {
        const listItem = document.createElement('li');
        listItem.textContent = `${usuario.nome}: IMC = ${usuario.IMC}`;
        usuariosNaTela.appendChild(listItem);
    });
}  