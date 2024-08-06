function hello(firstName) {
    return `Bom dia ${firstName}`;
}

const bomDia = hello('Jader');
console.log(bomDia);

function sum(x, y) {
    const result = x + y;
    return result // Sempre que a engine encontrar return ela para de executar.
}

const result = sum(2, 5);
console.log(result);

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//Arrow funcion

const raiz2 = n => n ** 0.5; // Essa função é igual a função raiz

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));