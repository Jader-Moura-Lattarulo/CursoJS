//index         0123456789...
const myName = 'Jader Moura Lattarulo'

//index            0        1       2        3
const students = ['Jader', 'Gabi', 'Laura', 'Marly'];

//delete alunos[1]; deleta o que está no indice indicado.

students[students.length] = 'Rita' //add no final do array
students.push('Lucas'); //add no final do array

students.unshift('Edson'); //Vai para o indice 0 e empurra os demais para os outros indices

console.log(students);

students.pop(); //Tira o ultimo elemento do array

const removed = students.pop(); //Salva o elemento que foi removido em uma constante

console.log(students);
console.log(removed);

const removed2 = students.shift(); //retira o primeiro elemento e salva o na constante

console.log(students);
console.log(removed2);

console.log(students instanceof Array);