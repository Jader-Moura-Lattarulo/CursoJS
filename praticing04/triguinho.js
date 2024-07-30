function app(){
    let numberOfBalls = 4;
    const max = numberOfBalls + 1;
    const min = 1;

    const colors = [];

    function getRandomNumber(){
        let randomNumber = Math.floor(Math.random() * (max - min) + min);
        return randomNumber
    }

    function colorMixer(){
        let randomNumber = getRandomNumber();

        switch (randomNumber) {
            case 1:
                randomColor = 'Vermelho';
                return randomColor;
            case 2:
                randomColor = 'Azul';
                return randomColor;
            case 3:
                randomColor = 'Amarelo';
                return randomColor;
            case 4:
                randomColor = 'Verde';
                return randomColor;
            case 5:
                randomColor = 'Branco';
                return randomColor;
            default:
                randomColor = '';
                return randomColor
        }

    }
    
    function generateColors(){
        colors.length = 0;
        for (let i = 0; i < numberOfBalls; i++){
            const randomNumber = getRandomNumber();
            const color = colorMixer(randomNumber);
            colors.push(color);
        }
    }

    function allColorsSame(){
        return colors.every(color => color === colors[0]);
    }

    let attemptCount = 0;
    let colorAreSame = false;

    while (! colorAreSame) {
        generateColors();
        colorAreSame = allColorsSame();
        attemptCount++;
        console.log(`Tentativa ${attemptCount}: ${colors}`);
    }

    console.log(`Todas as bolas têm a cor: ${colors[0]}`);
}

app();
