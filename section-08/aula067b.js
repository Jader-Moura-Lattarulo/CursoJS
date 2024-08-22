//Promises

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function conexaoBD(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Bad Value'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

conexaoBD('Buscando conexão com o BD', aleatorio(1, 3))
    .then(resposta => {console.log(resposta);
        return conexaoBD('Conectado, buscando dados da BASE', aleatorio(1, 3));
    })
    .then(resposta =>{
        console.log(resposta);
        return conexaoBD('Tratando os dados da BASE', aleatorio(1, 3));        
    })
    .then(resposta => {
        console.log(resposta);        
        return conexaoBD('Exibindo dados na tela', aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);        
    })
    .catch(error => {
        console.log(error);        
    });

