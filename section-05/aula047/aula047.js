//Filter, map, reduce -> as funções mais importantes para array
//Filter vai sempre retornar um array do mesmo tamanho ou menor

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 77, 11, 15, 22, 27];
const arrayMaiorQue10 = [];

const arrayFiltrados = numeros.filter(valor => valor > 10); 

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > 10) {
        arrayMaiorQue10.push(numeros[i]);
    }
}
console.log(arrayMaiorQue10);
console.log(arrayFiltrados);
