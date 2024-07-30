function app(){
    let numberOfBalls = 3;
    const max = numberOfBalls + 1;
    const min = 1;

    const colors = [];

    function colorMixer(){
        let randomNumber = Math.random() * (max - min) + min;

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

        return Math.floor(randomColor)
    }
    
    function giveColor(){
        for (let i = 0; i < numberOfBalls; i++){
            colors.push({ball: i+1, color:colorMixer()});
        }
    }

    giveColor();
    console.log(colors);
}

app();
