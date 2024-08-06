//Revisão básico em Arrays
//               0         1         2        3
//const nomes =['Mateus', 'Marcos', 'Lucas', 'Maria'];

const nomes = new Array('Mateus', 'Marcos', 'Lucas', 'Maria'); //Pode utilizar construtor

nomes[2] = 'João';
delete nomes[1];
console.log(nomes);

//Valor por referência

const novo = nomes; // Eles dividem a mesma array