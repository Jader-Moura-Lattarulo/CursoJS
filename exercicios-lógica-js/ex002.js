/**
 * Escreva uma função chamada ePaisagem que recebe dois argumentos: largura e altura de uma imagem (number).
 * Retorne true se a imagem estiver no modo paisagem.
 */

function app() {
    const { execSync } = require('child_process');
    const userPrompt = require('prompt-sync')();

    execSync('cls', {stdio: 'inherit'});

    let imageWidth = parseFloat(userPrompt('Entre com a largura da imagem: '));
    let imageHeight = parseFloat(userPrompt('Entre com a altura da imagem: '));

    const isLandscape = (imageWidth, imageHeight) => imageWidth > imageHeight; //? true : false; - Não é necessário aqui pois ele já vai checar ao encontrar a condição

    console.log(isLandscape(imageWidth, imageHeight));
}

app();
