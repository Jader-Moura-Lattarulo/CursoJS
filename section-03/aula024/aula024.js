const pessoa = {
    nome: 'Jader',
    sobrenome: 'Moura',
    idade: 35,
    endereco: { //objeto dentro de outro objeto
        rua: 'Renato Rinaldi',
        numero: 1595
    }
};

//const { nome = 'Não tem', sobrenome, idade } = pessoa;

//const { endereco: {rua, numero}} = pessoa;

const {nome, sobrenome, ...resto} = pessoa;


console.log(nome, sobrenome, resto);
