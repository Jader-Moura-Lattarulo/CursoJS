//Break e Continue - Funcionam em todos os laços

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers){
    
    if (number === 5) {
        console.log('5 encontrado, saindo...');
        break; // Breca a continuação do código
    }
    console.log(number);
}