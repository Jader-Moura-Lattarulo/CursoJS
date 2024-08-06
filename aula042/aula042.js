//Função recursivas - funções que se chamam de volta

function recursiva(max) {
    console.log(max);
    if (max >= 10) return; //encerra a função
    max++; //encrementa
    recursiva(max); //Se chama novamente, até passar da condição e vai embora.
}

recursiva(-10);
