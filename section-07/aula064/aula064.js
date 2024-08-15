//Herança com classes
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já ligado`);            
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já desligado`);            
            return;
        }

        this.ligado = false;
    }
}

//const de01 = new DispositivoEletronico('celular');
//
//de01.ligar();
//de01.desligar();
//de01.desligar();
//console.log(de01);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
}

const s01 = new Smartphone('Samsung', 'prata', 'S22');

console.log(s01);
