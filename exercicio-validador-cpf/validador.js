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
let cpfLimpo = entradaCpf.replace(/\D+/g, '');

let cpfCalc = cpfLimpo.slice(0, -2);

function cpfMulti(cpfCalc) {
    let cpfArray = Array.from(cpfCalc);
    let cpfMultiplicado = cpfArray.map((valor, i) => valor * ((cpfCalc.length + 1) - i));
    addDigit(cpfMultiplicado);
}

function addDigit(cpfMultiplicado){
    let cpfDigito = 11 - ((cpfMultiplicado.reduce((ac, val) => ac + Number(val), 0)) % 11);
    let cpfUmDigito = cpfMultiplicado + cpfDigito;
    digit(cpfUmDigito);
}

function digit(cpfDigito) {
    cpfDigito = cpfDigito > 9 ? 0 : cpfDigito;
    
}

let cpfUmDigito = cpfCalc + cpfPrimeiroDigito;

cpfArray = Array.from(cpfUmDigito);
cpfMultiplicado = cpfArray.map((valor, i) => valor * (11 - i));
let cpfSegundoDigito = 11 - ((cpfMultiplicado.reduce((ac, val) => ac + Number(val), 0)) % 11);
cpfSegundoDigito = cpfSegundoDigito > 9 ? 0 : cpfSegundoDigito;
let cpfCompleto = cpfUmDigito + cpfSegundoDigito;

console.log(cpfLimpo === cpfCompleto);
