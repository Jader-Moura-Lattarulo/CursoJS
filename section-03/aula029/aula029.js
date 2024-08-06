//Break e Continue - Funcionam em todos os laços

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers){
    
    if (number === 2) {
        console.log('Pulei o número 2');
        continue; // pula para próxima ação do laço
    }

    if (number === 5) {
        continue; // pula para próxima ação do laço
    }
    console.log(number);
}