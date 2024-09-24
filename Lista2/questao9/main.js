const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

const cadastroForm = document.getElementById('cadastroForm');

// Função de envio do formulário
function enviar(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Verifica se todos os campos estão preenchidos
    if (nameInput.value === "" || emailInput.value === "" || senhaInput.value === "" ) {
        alert("Preencha todos os campos");
        return;
    }

    // Validação do nome
    if (!validarNome(nameInput.value)) {
        alert("Nome inválido");
        return;
    } else {
        console.log("Nome:", nameInput.value);
    }

    // Validação do email
    if (!validarEmail(emailInput.value)) {
        alert("Digite um email válido");
        return;
    } else {
        console.log("Email:", emailInput.value);
    }

    // Verificação da senha
    if (senhaInput.value.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres");
        return;
    } else {
        console.log("Senha válida");
    }

    alert("Formulário enviado com sucesso!");
}

// Função para validar o nome
function validarNome(nameInput) {
    const nomeRegex = /^(?:\p{Lu}[\p{L}'\s]*(?![0-9]))+(?:\s(?:\p{Lu}[\p{L}'\s]*(?![0-9])){0,1})$/u;
    return nomeRegex.test(nameInput);
}

// Função para validar o email
function validarEmail(emailInput) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailInput);
}

// Adicionar evento de submissão ao formulário
cadastroForm.addEventListener('submit', enviar);
