//Object.defineProperty() e Object.defineProperties()

function Produto(preco, estoque, nome) {
    this.preco = preco;
    this.estoque = estoque;
    
    Object.defineProperty(this, 'nome', {
        enumerable: true, //mostra a chave
        value: nome, //valor
        writable: false, //permite ou não alterar o valor
        configurable: false, //permite ou não reconfigurar a propriedade
    });
}

const p1 = new Produto( 550, 5, "Camisa-SPFC");
console.log(p1);
console.log(Object.keys(p1));
