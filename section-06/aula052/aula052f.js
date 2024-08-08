function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //return this; - Fica oculto.
}

// new -> Cria um objeto vazio.
// {} <- atrala this ao objeto.

//p1 = (endereço de memória) - > 'Valor'

//NÃO POSSO  p1 = (NOVO ENDEREÇO DE MEMÓRIA)
//POSSO p1 = (endereço de memória) -> 'Outro valor'

const p1 = new Pessoa('Jader', 'Moura');
Object.freeze(p1);
p1.nome = 'Jiraya';
console.log(p1);

const p2 = new Pessoa('Gabi', 'Centenaro');
console.log(p2);
