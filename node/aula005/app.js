const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'post.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const post = [
    {titulo: 'Testando para um blog'},
    {nome: 'Gabi'},
    {nome: 'Laura'},
    {nome: 'Marly'},
    {nome: 'Dalva'}
];

const json = JSON.stringify(post, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

leArquivo(caminhoArquivo);