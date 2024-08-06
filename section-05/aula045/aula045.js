//Método Splice
//               -5       -4       -3      -2      -1
//                0        1        2       3       4
const nomes = ['Jader', 'Marly', 'Laura', 'Gabi', 'Rita'];

//nomes.splice(índice, quantos elementos eu quero deletar, elementos que quero add separados por virgula);
const removidos = nomes.splice(0, 3);
console.log(nomes, removidos);

/**
 * Unshift
 * nomes.splice(2, 0, 'Luiz', 'Otávio');
 * 
 * pop
 * nomes.splice(-1, 1);
 * 
 * shift
 * nomes.splice(0, 1);
 */
