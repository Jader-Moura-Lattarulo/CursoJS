const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));

const geraSimbolo = () => {
    const intervalos = [
        {min: 32, max: 47},
        {min: 58, max: 64},
        {min: 91, max: 96},
        {min: 123, max: 126}
    ];

    const intervalo = intervalos[Math.floor(Math.random()* intervalos.length)];

    const codigoAscii = rand(intervalo.min, intervalo.max + 1);
    
    return String.fromCharCode(codigoAscii);
}

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}
