//Várias maneiras de declarar funções

//Function hoisting - A engine eleva as funções para o topo na hora da execução
falaOi(); //Funciona por conta do hoisting
function falaOi(){
    console.log('Oi!');
}

//Funções são chamadas de First-class objects (Objetos de primeira classe)
//Ou seja, podemos tratar funções como um dado.
//Function expression
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();

function executaFunção(função) {
    console.log('Vou executar sua função abaixo:');
    função();
}

executaFunção(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();
