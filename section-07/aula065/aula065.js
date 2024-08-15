//Métodos de instância e estáticos

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -=2;
    }

    static trocaPilha(){
        console.log('Pilhas trocadas');        
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();

ControleRemoto.trocaPilha();
console.log(controle);
