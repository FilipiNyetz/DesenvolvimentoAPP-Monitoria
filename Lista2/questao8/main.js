let segundos = 0;
let intervalo;

        // Função para formatar o tempo em minutos e segundos
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}       

        // Função para iniciar o cronômetro
        function iniciarCronometro() {
            // Se o cronômetro já estiver rodando, não faz nada
            if (!intervalo) {
                intervalo = setInterval(() => {
                    segundos++;
                    document.getElementById('tempo').textContent = formatarTempo(segundos);
                }, 1000);
            }
        }

        // Função para pausar o cronômetro
        function pausarCronometro() {
            clearInterval(intervalo);
            intervalo = null; // Redefinir o intervalo para poder reiniciar depois
        }

        // Função para zerar o cronômetro
        function zerarCronometro() {
            pausarCronometro();
            segundos = 0;
            document.getElementById('tempo').textContent = formatarTempo(segundos);
        }