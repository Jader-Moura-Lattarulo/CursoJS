function program(){

    let arrayOfWords = ['Jader Moura Lattarulo Gabriela Floreano Centenaro'];
    let arrayLetters;
    
    function turnToLetters(arrayOfWords){
        arrayOfLetters = str.split('').map(char => `${char}`)       
    }

    function countFrequency(arrayOfWords){
        let frequency = {};

        for (let i = 0; i < arrayOfWords.length; i++){
            let letter = arrayOfWords[i];

            if (frequency[letter]) {
                frequency[letter]++;
            } else {
                frequency[letter] = 1;
            }
        }
        return frequency;
    }

    arrayLetters = turnToLetters(arrayOfWords);
    let result = countFrequency(arrayLetters);

    console.log(result);

}

program();
