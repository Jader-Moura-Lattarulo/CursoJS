const {multiplica, Cachorro} = require('./mod');

console.log(multiplica(2, 2));

const cachorrinho = new Cachorro('Doug');
cachorrinho.latir();

console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
