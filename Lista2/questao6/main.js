// Inicializa o array de nomes
let nomes = ["Alice", "Bruno", "Carlos"];
const nomesNaTela = document.querySelector('.lista-nomes');


console.log("Array inicial:", nomes);



function rodarScript() {
    setTimeout(adicionarNomes, 1000); 
}


function adicionarNomes() {
    for (let i = 0; i < 3; i++) {
        let novosNomes = prompt("Adicione mais um nome");
        nomes.push(novosNomes);
        console.log("Após adicionar um nome:", nomes);
    }
    exibirNomes();
    setTimeout(removerPrimeiroNome, 2000); 
}


function removerPrimeiroNome() {
    nomes.shift();
    console.log("Após remover o primeiro nome:", nomes);
    exibirNomes();
    setTimeout(adicionarNomeInicio, 2000); 
}

function adicionarNomeInicio() {
    let novoNome = prompt("Adicione um nome no início");
    nomes.unshift(novoNome);
    console.log("Após adicionar um nome no início:", nomes);
    exibirNomes();
    setTimeout(buscarUmNome, 2000); 
}


function buscarUmNome() {
    let nomeBusca = prompt("Insira um nome para busca");
    let indice = nomes.indexOf(nomeBusca);
    if (indice !== -1) {
        console.log(`O índice de "${nomeBusca}" é:`, indice);
    } else {
        console.log(`"${nomeBusca}" não foi encontrado no array.`);
    }
    exibirNomes();
    setTimeout(exibirNomes, 2000);
}


function exibirNomes() {
    let nomesString = nomes.join(", ");
    console.log("Nomes unidos em uma string:", nomesString);
    nomesNaTela.textContent = nomesString; 
}

rodarScript();
