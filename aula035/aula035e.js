/*function duplica(numero) {
    return numero * 2;
}

function triplica(numero) {
    return numero * 3;
}

function quadriplica(numero) {
    return numero * 4;
}*/

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(numero){
        return numero * multiplicador;
    }
}

const duplica = criaMultiplicador(2); //duplica agora é a função anonima da criaMultiplicador
const triplica = criaMultiplicador(3); //triplica agora é a função anonima da criaMultiplicador
const quadriplica = criaMultiplicador(4); //quadriplica agora é a função anonima da criaMultiplicador

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
