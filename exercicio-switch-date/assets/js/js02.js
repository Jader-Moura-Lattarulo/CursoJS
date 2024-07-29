function app(){

    const resultDisplay = document.querySelector("#completeDate");
    const todayIs = new Date();
    const choices = {
        dateStyle: 'full',
        timeStyle: 'short'
    };

    resultDisplay.innerHTML = todayIs.toLocaleDateString('pt-BR', choices);
}

app();
