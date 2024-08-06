//Closures - Habilidade da função em acessar o seu scopo léxico

function retornaFuncao(nome){
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Jader');
const funcao2 = retornaFuncao('Moura');

console.dir(funcao);// dir - mostra os scopos da função
console.dir(funcao2);

console.log(funcao(), funcao2());
