const pessoa = {
    nome: 'Jader',
    sobrenome: 'Moura',
    idade: 35  
};

for (let key in pessoa) {
    console.log(pessoa[key]);
}