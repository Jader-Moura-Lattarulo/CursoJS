//Retorne as pessoas com 5 letras ou mais no nome
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo o nome termina com a

const pessoas = [
    {nome:'Jader', idade: 35},
    {nome:'Gabi', idade: 33},
    {nome:'Laura', idade: 14},
    {nome:'Marly', idade: 19},
    {nome:'Luiz', idade: 32},
    {nome:'Lucas', idade: 47},
    {nome:'Vovô', idade: 85},
];

const pessoasNomeMaior = pessoas.filter(valor => valor.nome.length >= 5);
console.log(pessoasNomeMaior);

const pessoasMais50 = pessoas.filter(valor => valor.idade >= 50);
console.log(pessoasMais50);

const pessoasNomesTerminadosA = pessoas.filter(valor => valor.nome.slice(-1) === 'a');
console.log(pessoasNomesTerminadosA);
