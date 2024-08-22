//Promises

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg);
        if(callback) callback();
    }, tempo);
}

esperaAi('Frase1', aleatorio(1, 3),function(){
    esperaAi('Frase2', aleatorio(1, 3), function(){
        esperaAi('Frase3', aleatorio(1, 3));
    });
});
