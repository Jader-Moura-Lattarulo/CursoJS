//setInterval e setTimeout
function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    });
}

function funcaoDoIntervalo() {
    console.log(mostraHora());
}

setInterval(funcaoDoIntervalo, 1000);
