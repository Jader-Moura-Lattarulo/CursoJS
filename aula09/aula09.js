const completeName = prompt(`Digite seu nome completo:`);
const lenghtName = completeName.length;
const secoundLetterOfName = completeName.charAt(1);
const letterA = completeName.indexOf(`a`);
const lastLetterA = completeName.lastIndexOf(`a`);
const lastTreeletters = completeName.slice(-3);
const theWordsOfName = completeName.split(" ")
const upperName = completeName.toUpperCase();
const lowerName = completeName.toLowerCase();


document.body.innerHTML += `O seu nome é: ${completeName}. <br/>` ;
document.body.innerHTML += `Seu nome tem ${lenghtName} letras.<br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${secoundLetterOfName}. <br/>`;
document.body.innerHTML += `O primeiro indice da letra a no seu nome é: ${letterA}. <br/>`;
document.body.innerHTML += `O último indice da letra a no seu nome é: ${lastLetterA} <br/>` ;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${lastTreeletters} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${theWordsOfName} <br/>`;
document.body.innerHTML += `Seu nome em letras maiúsculas é: ${upperName} <br/>`;
document.body.innerHTML += `Seu nome em letras minúsculas é: ${lowerName} <br/>`;