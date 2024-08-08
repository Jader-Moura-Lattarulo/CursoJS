/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 * 
 * // Já foi estudado
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defindeProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'});

caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
