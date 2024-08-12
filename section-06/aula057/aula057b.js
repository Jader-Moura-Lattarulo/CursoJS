function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumenta = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
};

const produto1 = new Produto('Camiseta', 50);

//Literal
const produto2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(produto2, Produto.prototype);

const produto3 = Object.create(Produto.prototype);
produto3.nome = 'Celular';
produto3.preco = 5000;


//produto1.desconto(100);
produto1.aumenta(100);
produto2.aumenta(10);
produto3.desconto(50);

console.log(produto1);
console.log(produto2);
console.log(produto3);

