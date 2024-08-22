//Race
//Métodos úteis para Promises

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject(false);
            return;
            }

        setTimeout(() => {
            resolve(msg.toUpperCase());
            return;
        }, tempo);
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    //'Primeiro valor', 
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    //esperaAi(1, 6500),
    //'Outro valor'
];

Promise.race(promises)
    .then(function(valor){
        console.log(valor);  
    })
    .catch(function(erro){
        console.log(erro);
    });