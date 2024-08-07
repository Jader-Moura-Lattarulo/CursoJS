//Revisando Objetos
const pessoa = {
    nome: 'Jader',
    sobrenome: 'Moura',
};

console.log(pessoa.sobrenome);// anotação de ponto
console.log(pessoa['nome']);//   anotação de colchete - Pode ser posto valores dinamicos

const key = 'sobrenome';
console.log(pessoa[key]);

