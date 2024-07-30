function random(min, max) {
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
}

const min = 1;
const max = 50;
let randomNumber = random(min, max);

while (randomNumber !== 10) {
    randomNumber = random(min, max);
    console.log(randomNumber);
}
