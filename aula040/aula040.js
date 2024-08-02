//Factory Functions

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`; //this é sempre quem chama o método
        }
    };
}

const p1 = criaPessoa('Jader', 'Moura');
console.log(p1.fala('falando sobre JS'));
