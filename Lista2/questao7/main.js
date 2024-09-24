function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitParaKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinParaFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Função de conversão com switch
function converter() {
    // Obter o valor da temperatura inserida pelo usuário
    let valor = parseFloat(document.querySelector('.valorTemperatura').value);

    // Obter as seleções de origem e saída
    let origem = document.querySelector('.temperaturaOrigem').value;
    let destino = document.querySelector('.temperaturaTrans').value;

    let resultado;

    // Determinar qual função usar com base nas seleções
    switch (origem + '-' + destino) {
        case '1-2': // Celsius para Kelvin
            resultado = celsiusParaKelvin(valor);
            break;
        case '1-3': // Celsius para Fahrenheit
            resultado = celsiusParaFahrenheit(valor);
            break;
        case '2-1': // Kelvin para Celsius
            resultado = kelvinParaCelsius(valor);
            break;
        case '2-3': // Kelvin para Fahrenheit
            resultado = kelvinParaFahrenheit(valor);
            break;
        case '3-1': // Fahrenheit para Celsius
            resultado = fahrenheitParaCelsius(valor);
            break;
        case '3-2': // Fahrenheit para Kelvin
            resultado = fahrenheitParaKelvin(valor);
            break;
        default:
            resultado = valor; // Nenhuma conversão (caso as unidades de origem e destino sejam iguais)
            break;
    }

    // Atualizar o DOM com o resultado da conversão
    document.querySelector('.resposta-transformada').textContent = 'Resultado: ' + resultado.toFixed(2);
}