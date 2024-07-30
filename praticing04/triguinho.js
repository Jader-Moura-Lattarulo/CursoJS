function app(){
    let max = 4;
    const min = 1;
    const colors = [color01, color02, color03];

    function colorMixer(){
        let randomNumber = Math.random() * (max - min) + min;
        return Math.floor(randomNumber)
    }
    
    
}

app();
