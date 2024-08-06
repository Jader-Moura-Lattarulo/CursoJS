//Filter, map, reduce -> as funções mais importantes para array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 77, 11, 15, 22, 27];
let arrayMaiorQue10 = [];

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > 10) {
        arrayMaiorQue10.push(numeros[i]);
    }
}
console.log(arrayMaiorQue10);