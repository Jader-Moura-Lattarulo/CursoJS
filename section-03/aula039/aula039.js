//Funções imediatas (IIFE) - Immediately invoked fundtion expression - Funções auto invocadas

(function(idade, peso, altura){ //Não toca no escopo global
    
    const sobrenome = 'Moura';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }  

    function falaNome() {
        console.log(criaNome('Jader'));        
    }

    falaNome();
    console.log(idade, peso, altura);    
})(30, 80, 1.65); //parametros