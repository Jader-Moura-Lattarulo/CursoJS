const produto = {nome: 'Produto', preco: 5.50, material: 'Plástico'};
console.log(Object.values(produto));
console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);    
}