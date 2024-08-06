function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

//const olaMundo = falaFrase('Olá');
//console.log(olaMundo('Mundo!'));

const fala = falaFrase('Olá'); //fala agora é a função 'falaResto' 
const resto = fala('Mundo'); //chama 'falaResto'
console.log(resto); //Exibira Olá Mundo
