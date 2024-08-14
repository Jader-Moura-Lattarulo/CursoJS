//Getters e Setters

class Carro {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(){
        if(this.velocidade >= 100) return;
            this.velocidade++;
    }

    frear(){
        if(this.velocidade >= 100) return;
        this.velocidade--;
    }
}

const carro01 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    carro01.acelerar();
}
