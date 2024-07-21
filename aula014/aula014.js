/*Objeto literal

const person1 = {
    firstName: 'Jader',
    lastName: 'Moura',
    age: 35
};

const person2 = {
    firstName: 'Gabi',
    lastName: 'Centenaro',
    age: 32

    speak() {
    console.log(`Olá, meu nome é ${this.firstName} ${this.lastName}`)
    }

    incrementAge() {
    this.age++
    }
};*/


//                     Parametros
/*function createPerson (firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
}*/

//                     Parametros
function createPerson (firstName, lastName, age) {
    return { firstName, lastName, age};
}

//                           Argumentos (argumentos são passados para o parametro)
const person1 = createPerson('Jader', 'Moura', 35);
const person2 = createPerson('Gabi', 'Centenaro', 33);
const person3 = createPerson('Laura', 'Lattarulo', 14);
const person4 = createPerson('Marly', 'Moura', 55);
const person5 = createPerson('Rita', 'Centenaro', 54);

