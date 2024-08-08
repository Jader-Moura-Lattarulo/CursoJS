//Object.defineProperty() e Object.defineProperties()

function Produto(preco, estoque, nome) {
    
    Object.defineProperty(this, 'nome', {
        enumerable: true, //mostra a chave
        value: nome, //valor
        writable: false, //permite ou não alterar o valor
        configurable: false, //permite ou não reconfigurar a propriedade
    });

    Object.defineProperties(this, {
        preco: {
            enumerable: true, //mostra a chave
            value: preco, //valor
            writable: true, //permite ou não alterar o valor
            configurable: false, //permite ou não reconfigurar a propriedade
        },
        estoque: {
            enumerable: true, //mostra a chave
            value: estoque, //valor
            writable: true, //permite ou não alterar o valor
            configurable: false, //permite ou não reconfigurar a propriedade    
        },
    });
}

const p1 = new Produto( 550, 5, "Camisa-SPFC");
console.log(p1);
console.log(Object.keys(p1));
