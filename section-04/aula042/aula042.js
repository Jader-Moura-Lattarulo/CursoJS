//Função recursivas - funções que se chamam de volta

function recursiva(max) {
    console.log(max);
    if (max >= 11272) return; //encerra a função, 11217 é o limite de recursividade.
    max++; //encrementa
    recursiva(max); //Se chama novamente, até passar da condição e vai embora.
}

recursiva(-10);
