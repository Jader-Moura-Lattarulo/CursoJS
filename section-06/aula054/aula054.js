//Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor){
            estoquePrivado = valor;
            if(typeof valor !== 'number'){
                throw new TypeError('Bad value but with TypeError')
            }
            estoquePrivado = valor
        }
    });
}

const p1 = new Produto("Camisa-SPFC" ,550, 5);
p1.estoque = 5;

