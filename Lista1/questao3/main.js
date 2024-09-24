let num = parseFloat(prompt("Insira um numero"));

function verificar(num){
    if(num%2==0){
        alert("Esse numero é par");
    }else{
        alert("Esse número é ímpar");
    }
}

verificar(num)