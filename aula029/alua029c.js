const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = 0;
while (i < numbers.length) {
    let number = numbers[i]

    if (number === 2) {
        console.log('Pulei o número 2');
        i++; // a variavel de controle é sempre antes de continue ou break
        continue;
    }

    console.log(number);

    if (number === 7){
        console.log('7 encontrado, saindo...');
        i++; // a variavel de controle é sempre antes de continue ou break
        break;
    }

    i++;
}