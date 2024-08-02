//Factory Functions

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`; //this é sempre quem chama o método
        },
        
        altura,
        peso,
        
        get imc(){ //Getter transforma a função em um atributo da classe
            const indice = this.peso /(this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Jader', 'Moura', 1.70, 92);
const p2 = criaPessoa('Gabi', 'Centenaro', 1.65, 75);

p1.nomeCompleto = "Laura Lattarulo"

console.log(p1.sobrenome);

console.log(p1.fala('falando sobre JS')); //this se refere a p1
console.log(p1.imc);

console.log(p2.fala('falando sobre mestrado')); //this se refere a p2
console.log(p2.imc);
