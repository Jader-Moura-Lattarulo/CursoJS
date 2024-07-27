function program(){

    function countFrequency(letters){
        let frequency = {};

        for (let i = 0; i < letters.length; i++){
            let letter = letters[i];

            if (frequency[letter]) {
                frequency[letter]++;
            } else {
                frequency[letter] = 1;
            }
        }
        return frequency;

    }
    
    let arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'a', 'a', 'b', 'e', 't', 'a', 'b', 'd', 'd', 'j', 'e', 'q', 'a', 'd', 'j'];
    let result = countFrequency(arrayOfLetters);

    console.log(result);
}

program();
