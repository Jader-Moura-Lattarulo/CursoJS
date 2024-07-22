function myScope(){
    const weightInput = document.querySelector('#weight');
    const heightInput = document.querySelector('#height');
    const resultDisplay = document.querySelector('.answer');
    const form = document.querySelector('form');

    function calculateIMC(){
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if(isNaN(weight) && isNaN(height)){
            resultDisplay.innerHTML = "IMC: Não foi possível calcular.<br>Peso e altura estão vazios.";

        } else if (isNaN(weight)){
            resultDisplay.innerHTML = "O peso está vazio.";

        } else if (isNaN(height)){
            resultDisplay.innerHTML = "A altura está vazia."

        } else if (weight <= 0.240 || weight >= 650 && height <= 0.20 || height >= 2.85){
            resultDisplay.innerHTML = "O peso e a altura são iválidos."

        } else if (weight <= 0.240 || weight >= 650){
            resultDisplay.innerHTML = "O peso é inválido."

        } else if (height <= 0.20 || height >= 2.85) {
            resultDisplay.innerHTML = "A altura é inválida."

        } else if (!isNaN(weight) && !isNaN(height) && height > 0) {

            const imc = weight/Math.pow(height, 2);

            if(imc <= 18.5){
                resultDisplay.innerHTML = `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
            } else if (imc <= 24.9) {
                resultDisplay.innerHTML = `IMC: ${imc.toFixed(2)} - Peso normal`;
            } else if (imc <= 29.9) {
                resultDisplay.innerHTML = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
            } else if (imc <= 34.9) {
                resultDisplay.innerHTML = `IMC: ${imc.toFixed(2)} - Obesidade grau 1`;
            } else if (imc <= 39.9) {
                resultDisplay.innerHTML = `IMC: ${imc.toFixed(2)} - Obesidade grau 2`;
            } else {
                resultDisplay.innerHTML = `IMC: ${imc.toFixed(2)} - Obesidade grau 3`;
            }
        }
    }  
    form.addEventListener('submit', function(event){
        event.preventDefault();
        calculateIMC();
    });
}

myScope();
