//Escreva uma função que recebe 2 números e retorne o maior deles
const { execSync } = require('child_process');
const userPrompt = require('prompt-sync')();

execSync('cls', { stdio: 'inherit' });

let firstNumber = parseFloat(userPrompt('Digite um número: '));
let secoundNumber = parseFloat(userPrompt('Digite o segundo número: '));

const isBigger = (firstNumber, secoundNumber) =>  firstNumber > secoundNumber ? firstNumber : secoundNumber;

const bigger = isBigger(firstNumber, secoundNumber);
console.log(bigger);
