function random(min, max) {
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
}

const min = 1;
const max = 50;
let index = 0;
let randomNumber = random(min, max);

do {
    randomNumber = random(min, max);
    console.log(`${index} - ${randomNumber}`);
    index ++;
} while(randomNumber !== 10);

