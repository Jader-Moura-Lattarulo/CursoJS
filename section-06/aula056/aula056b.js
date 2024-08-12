function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.estouAqui = 'Hahahah..'; //__proto__
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoa('Jader', 'M.'); // Função construtora

console.log(pessoa1.estouAqui);
console.log(pessoa1.nomeCompleto());
 
//pessoa1 --> Pessoa.prototype --> Object.prototype
