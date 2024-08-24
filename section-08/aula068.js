//Resolve
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

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', rand(1, 3));
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));

    esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos na fase:', fase)
    })
    .catch(e => console.log(e));