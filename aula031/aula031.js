//Tratando  e lançando erros (try, catch, throw)

try {
    console.log(doesntExist);
} catch(err) {
    console.log('doesntExist não existe.');
    console.log(err); //Não mostre o erro para o usuário
}