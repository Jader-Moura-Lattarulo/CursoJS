//Desestruturação do envio dos argumentos

function funcao({ nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao({ nome: 'Jader', sobrenome: 'Moura', idade: 35});
