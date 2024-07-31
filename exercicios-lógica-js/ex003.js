/**
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Número divisível por 3 = Fizz
 * Número divisível por 5 = Buzz
 * Número divisível por 3 e 5 = FizzBuzz
 * Número não divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente um número
 * Use a função com números de 0 a 100
 */
function app() {
    const { log } = require('console');
    const { execSync } = require('child_process');
    const userPrompt = require('prompt-sync')();

    execSync('cls', {stdio: 'inherit'});
    
    function getUserInput(){
        let userNumber;
        let userInput = userPrompt('Entre com o número entre 0 a 100: ');
        isNumber(userInput) ? userNumber = userInput : tryNewInput(userInput);
        return fizzBuzz(userNumber);
    }    
    
    function isNumber(userInput){
        return !isNaN(userInput) && userInput.trim() !== '';
    }

    function tryNewInput(userInput){
        userInput = userInput;
        log(`${userInput} Não é número, tente novamente.`);
        return getUserInput();
    }

    function fizzBuzz(userNumber) {
       
    }

    let numberOrWord = getUserInput();
    log(numberOrWord);
}

app();
