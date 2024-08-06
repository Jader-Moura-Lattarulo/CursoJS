/*
Tipos de dados:
Primitivos (imutável) - string, number, boolean, undefined, null  (bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - passados por referência
*/

let a = 'A';
let b = a; //cópia
console.log(a, b);

//b não perde seu valor mesmo alterando o valor de a
a = "Outra letra"
console.log(a, b);

let array1 = [1, 2, 3];
let array2 = array1;
console.log(array1, array2)

array1.push(4);
console.log(array1, array2)

array2.pop();
console.log(array1, array2)