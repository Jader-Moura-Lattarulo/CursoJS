//Funções construtoras -> objetos
/**
 *  Iniciamos o nome da função com letra maiúscula
 * O corpo da função já é o objeto 
 * Objeto(new)
 * new -> cria um objeto vazio, faz o this apontar para esse objeto retornar direto para a variavel
 */
//Funções fabrica -> objetos

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 12345;

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(`${this.nome}`);
        
    };
}

const p1 = new Pessoa('Jader', 'Moura');
const p2 = new Pessoa('Laura', 'Lattarulo');

p1.metodo();

console.log(p1.nome, p2.nome);
