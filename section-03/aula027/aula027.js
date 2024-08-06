//For of
const nomes = ['Jader', 'Gabi', 'Laura', 'Marly'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('\n######\n');

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('\n######\n');

for (let valor of nomes){
    console.log(valor);
}

console.log('\n######\n');

nomes.forEach(function(element, index){
    console.log(element, index);
});