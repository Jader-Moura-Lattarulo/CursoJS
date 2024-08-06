//Concatenando Arrays
// ... rest -> captura o resto do array
// ... spread -> espalha o array


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
//const array3 = array1.concat(array2);
const array3 = [...array1, 'Jader', ...array2, ...[7, 8, 9], ...'Jader'];

console.log(typeof(array1));

console.log(array3, typeof(array3));
