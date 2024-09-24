let deposito = parseFloat(prompt("Insira o valor do deposito"));
let tempo = parseFloat(prompt("Insira o tempo"));
let taxaJuros = parseFloat(prompt("Insira a taxa de juros"));

let rendimentoTotal=deposito*tempo*(taxaJuros/100);
let rendimento=rendimentoTotal-deposito;
alert(`O valor do juros e ${rendimento}`)
alert(`O capital pos rendimento e: ${rendimentoTotal}`);
