function app(){
    let max = 4;
    const min = 1;

    const colors = [];

    function colorMixer(){
        let randomColor = Math.random() * (max - min) + min;
        return Math.floor(randomColor)
    }
    
    function giveColor(){
        for (let i = 0; i < 3; i++){
            colors.push({ball: i+1, color:colorMixer()});
        }
    }

    giveColor();
    console.log(colors);
}

app();
