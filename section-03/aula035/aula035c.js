function criaPessoa(nome, sobrenome) {
    return{ nome, sobrenome}; // o js entende que é a mesma coisa que: {nome: nome, sobrenome: sobrenome}
}

const p1 = criaPessoa('Jader', 'Moura');
const p2 = {
    nome:'Jader',
    sobrenome:'Moura'
};

//p1 e p2 tem exatamente a mesma coisa

console.log(typeof p1);//object
console.log(typeof p2);//object
