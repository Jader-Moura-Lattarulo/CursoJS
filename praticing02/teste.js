function program(){
    
    let frase = ['Jader Moura Lattarulo', 'Gabriela Floreano Centenaro'];
    let combinedFrase = frase.join("");
    let arrayLetters = combinedFrase.split("");
    console.log(arrayLetters);

    arrayLetters = arrayLetters.filter(letter => letter !== " ");

    function countFrequency(arrayLetters) {
        let frequency = {};

        for (let i = 0; i < arrayLetters.length; i++) {
            let letter = arrayLetters[i];

            if (frequency[letter]) {
                frequency[letter]++;
            } else {
                frequency[letter] = 1;
            }
        }
        return frequency;
    }

    let result = countFrequency(arrayLetters);

    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

    let sortedFrequency = {};
    sortedResult.forEach(([key, value]) => {
        sortedFrequency[key] = value;
    });

    console.log(sortedFrequency);

}

program();
