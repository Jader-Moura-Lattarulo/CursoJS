//Factory functions / Constructor functions / Classes -> Padrões de projetos

function criaPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;           
        }
    };
}

const p1 = criaPessoa('Jader', 'Moura');
console.log(p1.nomeCompleto());
