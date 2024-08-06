//Retorne a pessoa mais velha
const pessoas = [
    {nome:'Jader', idade: 35},
    {nome:'Gabi', idade: 33},
    {nome:'Laura', idade: 14},
    {nome:'Marly', idade: 19},
    {nome:'Luiz', idade: 32},
    {nome:'Lucas', idade: 47},
    {nome:'Vovô', idade: 85},
];

const maisVelha = pessoas.reduce((acc, pessoa) => {
    return pessoa.idade > acc.idade ? pessoa : acc;
});

console.log(maisVelha);
