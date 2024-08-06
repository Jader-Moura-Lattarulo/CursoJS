const verdadeira = true;

//let tem escopo de bloco {}
//var só tem escopo de função

let nome = 'Jader'; //criando
var nome2 = 'Jader'; //criando

if(verdadeira) {
    let nome = 'Moura'; //criando
    var nome2 = 'Bacon' //redeclarando
    console.log(nome, nome2);
    if (verdadeira) {
        let nome = 'Lattarulo' //criando
        var nome2 = 'Hamburguer' //redeclarando
        console.log(nome);
    }
}

console.log(nome);