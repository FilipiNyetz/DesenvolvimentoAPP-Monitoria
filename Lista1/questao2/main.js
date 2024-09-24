let num1 = parseFloat(prompt("Insira o primeiro numero: "));
let num2 = parseFloat(prompt("Insira o segundo numero: "));

function somar(n1,n2){
    return n1+n2
}

function sub(n1,n2){
    return n1-n2
}

function multi(n1,n2){
    return n1*n2
}

function div(n1,n2){
    return n1/n2
}

//Nao entendi o enunciado kkkkkkk
// alert(`a soma é: ${somar(num1,num2)}`)
// alert(`a subtração é: ${sub(num1,num2)}`)
// alert(`a multiplicação é: ${multi(num1,num2)}`)
// alert(`a divisao é: ${div(num1,num2)}`)

let soma=somar(num1,num2);
let subtracao = sub(num1,num2);
let multiplicacao = multi(num1,num2);
let divisao = div(num1,num2);

alert(`A soma e: ${soma}\nA subtração e ${subtracao}\nA multiplicação e: ${multiplicacao}\nA divisão e: ${divisao} `)
