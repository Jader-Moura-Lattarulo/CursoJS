function program(){

    function countFrequency(letters){
        let frequency = {};

        for (let i = 0; i < letters.length; i++) {
            let letter = letters[i];

            if (frequency[letter]) {
                frequency[letter] ++;
            } else {
                frequency[letter] = 1;
            }
        }
        return frequency;
    }

    let arrayOfWords = ['Jader Moura Lattarulo', 'Gabriela Floreano Centenaro'];
    let concatenatedStrig = arrayOfWords.join('');
    let arrayOfLetters = concatenatedStrig.split('');

    let result = countFrequency(arrayOfLetters);
    console.log(result);
}

program();
