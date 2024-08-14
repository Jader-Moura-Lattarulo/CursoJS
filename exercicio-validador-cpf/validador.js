//705.484.450-52 070.987.720-03
/**
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x
 * 10 9  8  7  6  5  4  3  2
 * 70 0  40 28 48 20 16 15 0 = 237
 * 
 * 11 - (237 % 11) = 5 (Primeiro dígito) - Se o digito for maior que 9 consideramos 0
 * 
 * 
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
 * 11 10 9  8  7  6  5  4  3  2
 * 77 0  45 32 56 24 20 20 0  10 = 284
 * 
 * 11 - (284 % 11) = 2 (Segundo dígito dígito) - Se o digito for maior que 9 consideramos 0
 */

let entradaCpf = '070.987.720-03';
let cpfLimpo = entradaCpf.replace(/\D+/g, ''); // Remove caracteres não numéricos
let cpfCalc = cpfLimpo.slice(0, -2); // Remove os dois últimos dígitos para calcular

function calcularDigito(cpfCalc, pesos) {
    let cpfArray = Array.from(cpfCalc);
    let cpfMultiplicado = cpfArray.map((valor, i) => valor * pesos[i]);
    let soma = cpfMultiplicado.reduce((ac, val) => ac + Number(val), 0);
    let digito = 11 - (soma % 11);
    return digito > 9 ? 0 : digito; // Se o dígito for maior que 9, considerar 0
}

function calcularCpfCompleto(cpfCalc) {
    let pesosPrimeiroDigito = Array.from({ length: 9 }, (_, i) => 10 - i); // Pesos para o primeiro dígito
    let primeiroDigito = calcularDigito(cpfCalc, pesosPrimeiroDigito);
    
    let cpfComPrimeiroDigito = cpfCalc + primeiroDigito;
    let pesosSegundoDigito = Array.from({ length: 10 }, (_, i) => 11 - i); // Pesos para o segundo dígito
    let segundoDigito = calcularDigito(cpfComPrimeiroDigito, pesosSegundoDigito);

    return cpfComPrimeiroDigito + segundoDigito;
}

let cpfCompleto = calcularCpfCompleto(cpfCalc);
console.log(cpfLimpo === cpfCompleto); // Verifica se o CPF limpo corresponde ao CPF completo calculado
