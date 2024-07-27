function program(){

    function countFrequency(numbers) {
        let frequency = {};

        for (let i = 0; i < numbers.length; i++){
            let number = numbers[i];

            if (frequency[number]) {
                frequency[number]++;
            } else {
                frequency[number] = 1;
            }
        }
        return frequency;
    }

    let arrayOfNumbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
    let result = countFrequency(arrayOfNumbers);

    console.log(result);
}

program();
