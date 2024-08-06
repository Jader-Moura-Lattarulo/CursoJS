//Retorne apenas o nome
//Remova a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome:'Jader', idade: 35},
    {nome:'Gabi', idade: 33},
    {nome:'Laura', idade: 14},
    {nome:'Marly', idade: 19},
    {nome:'Luiz', idade: 32},
    {nome:'Lucas', idade: 47},
    {nome:'Vovô', idade: 85},
];

const apenasNome = pessoas.map(valor => valor.nome);
console.log(apenasNome);

const objIdade = pessoas.map(obj => ({idade: obj.idade}));
console.log(objIdade);

const comIds = pessoas.map((obj, indice) => ({ ...obj, id: indice + 1}));
console.log(comIds);

console.log(pessoas);
