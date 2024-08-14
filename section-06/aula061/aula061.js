//Objeto Map()
const pessoas = [
    {id: 3, nome: 'Jader'},
    {id: 2, nome: 'Gabi'},
    {id: 1, nome: 'Laura'},
];

//const novasPessoas = {};
//for (const pessoa of pessoas) {
//    const { id } = pessoa;
//    novasPessoas[id] = {...pessoa };
//}

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa });
}

console.log(novasPessoas.get(1));
