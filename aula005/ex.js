const firstName = "Jader";
const lastName = "Moura Lattarulo"
let age = 35;
let weight = 92;
const heightInMeter = 1.65;
let imc = weight/(heightInMeter * heightInMeter); //peso / (altura * altura)
const birthYear = 2024 - age;

console.log(`${firstName} ${lastName} tem ${age} anos, pesa ${weight} kg, tem ${heightInMeter} de altura e seu IMC é de: ${imc}.`);
console.log(`${firstName} nasceu em ${birthYear}.`);