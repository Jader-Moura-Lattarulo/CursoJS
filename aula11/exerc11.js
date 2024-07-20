const number = Number(prompt("Digite um número:"));
const titleNumber = document.getElementById("titleNumber");
const text = document.getElementById("text");

function square(number){
    let root = Math.sqrt(number);
    return root;
}

function isInteger(number){
    if(Number.isInteger(number)) {
        return `Sim, ${number} é um número inteiro.`;
    } else {
        return `Não, ${number} é um número real.`;
    }
}

function checkNaN(number){
    if(Number.isNaN(number)) {
        return `Sim, ${number} é NaN.`
    } else {
        return `Não ${number} não é NaN.`
    }
}

function roundingDown(number){
    let toFloor = Math.floor(number);
    return toFloor;
}

function roundingUp(number){
    let toUp = Math.ceil(number);
    return toUp;
}

function twoDecimalPlaces(number){
    let formatedNumber = number.toFixed(2);
    return formatedNumber;
}

const rooting = square(number);
const int = isInteger(number);
const notAN = checkNaN(number);
const roundedDown = roundingDown(number);
const roundedUp = roundingUp(number);
const twoDecimalPlaced = twoDecimalPlaces(number);

titleNumber.innerHTML = number;
text.innerHTML = `<p>A raiz quadrada de ${number} é: ${rooting} </p>
                  <p>${number} é inteiro? ${int}</p>
                  <p>${number} é NaN? ${notAN}</p>
                  <p>${number} Arredondado para baixo fica: ${roundedDown}</p>
                  <p>${number} Arredondado para cima fica: ${roundedUp}</p>
                  <p>${number} com 2 casas decimais fica: ${twoDecimalPlaced}</p>`;