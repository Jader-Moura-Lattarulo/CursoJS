const pessoa = {
    nome: 'Jader',
    sobrenome: 'Moura'
};

for ( let key in pessoa) {
    console.log(pessoa[key]);
}

//For clássico - Geralmente com iteráveis (array ou strings)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (iteráveis, array ou strings)