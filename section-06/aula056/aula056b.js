function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Jader', 'M.'); // Função construtora
const data = new Date(); //Função construtora

console.dir(pessoa1);
console.dir(data);