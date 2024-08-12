//Prototypes -> Base para OOP
//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

//instância
const pessoa1 = new Pessoa('Jader', 'M.'); //Pessoa = Função construtora
const pessoa2 = new Pessoa('Gabi', 'C.'); //Pessoa = Função construtora

console.log(pessoa1);
console.log(pessoa2);

console.log(pessoa1.nomeCompleto());
 