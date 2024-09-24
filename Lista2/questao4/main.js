let atividades = [];
let atividadesNaTela = document.querySelector('.atividades');

function adicionar() {
    const descricaoAtiv = prompt("Insira qual sua atividade");
    atividades.push(descricaoAtiv);
    exibirNaTela();
    return atividades;
}


function exibirNaTela() {
    atividadesNaTela.innerHTML = '';

    const ulAtividades = document.createElement('ul');  

    atividades.forEach((item, index) => {
        const liTarefa = document.createElement('li');
        const descTarefa = document.createElement('p');
        const btExcluir = document.createElement('button');
        
        descTarefa.textContent = item;

        btExcluir.textContent = 'Excluir';
        btExcluir.addEventListener('click', () => excluir(index));  // Passa o índice para a função de exclusão

        liTarefa.appendChild(descTarefa);
        liTarefa.appendChild(btExcluir);

        ulAtividades.appendChild(liTarefa);
    });

    atividadesNaTela.appendChild(ulAtividades);
}

function excluir(index) {
    atividades.splice(index, 1);
    exibirNaTela();  
}
