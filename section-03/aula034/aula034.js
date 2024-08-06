//Parâmetros da função
//Arguments sustenta todos os argumentos enviados para função - exclusivos para funções criadas com function

function funcao(a, b, c){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);//enviando argumentos para funçao
