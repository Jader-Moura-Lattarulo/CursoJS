function multiplica(x, y) {
    return x * y;
};

class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir(){
        console.log(`${this.nome} está latindo!`);        
    }
}

module.exports = {multiplica, Cachorro};