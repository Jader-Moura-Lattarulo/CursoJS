//Filter + Map + Reduce

//Filtrar números pares
//Dobrar os valores
//Reduzir
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 77, 11, 15, 22, 27];
const numerosPares = numeros.filter(valor => valor % 2 == 0);

console.log(numerosPares);

const dobrarValores = numerosPares.map(valor => valor * 2);

console.log(dobrarValores);

const somarValores = dobrarValores.reduce((acc, valor) => acc + valor, 0);

console.log(somarValores);

