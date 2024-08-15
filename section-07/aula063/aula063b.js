class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const pessoa01 = new Pessoa('Jader', 'Moura');
pessoa01.nomeCompleto = 'Jader Moura Lattarulo';

console.log(pessoa01.nome);
console.log(pessoa01.sobrenome);



//console.log(pessoa01.nomeCompleto);
