//Getters e Setters
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER');
        
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('GETTER');
        
        return this[_velocidade];
    }

    acelerar(){
        if(this.velocidade >= 100) return;
            this[_velocidade]++;
    }

    frear(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const carro01 = new Carro('Fusca');
//
//for (let i = 0; i <= 200; i++) {
//    carro01.acelerar();
//}

carro01.velocidade = 56;

console.log(carro01);

