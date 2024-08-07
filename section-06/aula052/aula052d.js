const pessoa1 = new Object();
pessoa1.nome = 'Jader';
pessoa1.sobrenome = 'Moura';
pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando seu nome.`);
    
};