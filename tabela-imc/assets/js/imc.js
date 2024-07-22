function myScope(){
    const weightInput = document.querySelector('#weight');
    const heightInput = document.querySelector('#height');
    const resultDisplay = document.querySelector('.answer');
    const form = document.querySelector('form');

    function calculateIMC(){
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const imc = weight/Math.pow(height, 2);

            if(imc <= 18.5){
                resultDisplay.textContent = `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
            } else if (imc <= 24.9) {
                resultDisplay.textContent = `IMC: ${imc.toFixed(2)} - Peso normal`;
            } else if (imc <= 29.9) {
                resultDisplay.textContent = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
            } else if (imc <= 34.9) {
                resultDisplay.textContent = `IMC: ${imc.toFixed(2)} - Obesidade grau 1`;
            } else if (imc <= 39.9) {
                resultDisplay.textContent = `IMC: ${imc.toFixed(2)} - Obesidade grau 2`;
            } else {
                resultDisplay.textContent = `IMC: ${imc.toFixed(2)} - Obesidade grau 3`;
            }
        } else {
            resultDisplay.textContent = "IMC: Não foi possível calcular";
        }    
    }  
    form.addEventListener('submit', function(event){
        event.preventDefault();
        calculateIMC();
    });
}

myScope();
