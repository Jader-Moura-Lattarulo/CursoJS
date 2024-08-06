//Reduce - reduzindo o array

//Some todos os números(reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 77, 11, 15, 22, 27];
const total = numeros.reduce((acc, valor) => acc + valor);

console.log(total);
