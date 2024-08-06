//Escopo léxico

const nome = 'Jader';

function falaNome() {
    const nome = 'Moura';
    console.log(nome);    
}

//A função é uma bolha e ela faz buscas pela variável mais próxima

function usaFalaNome() {
    falaNome();
}

usaFalaNome();