const nomes =  ['Jader', 'Gabi', 'Laura'];
const novo = [...nomes]; //Feito uma cópia do array nomes e agora o que é feito em um array não influencia no outro

novo.pop();
console.log(nomes);
console.log(novo);
