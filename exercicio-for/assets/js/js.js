const elementos = [
    {tag: 'p', texto: 'Frase 01'}, //0
    {tag: 'div', texto: 'Frase 02'}, //1
    {tag: 'section', texto: 'Frase 03'}, //2
    {tag: 'footer', texto: 'Frase 04'}, //3
];

const container = document.querySelector('.container');
const divCriada = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    //console.log(elementos[i].tag);
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    divCriada.appendChild(tagCriada);
}

container.appendChild(divCriada);