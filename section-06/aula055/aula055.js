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

const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = { 
    ...produto, 
    material: 'porcelana'
};

console.log(produto);
console.log(outraCoisa);
