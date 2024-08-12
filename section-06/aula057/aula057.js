//Manipulando Prototypes

//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

const objD = new Object();
objD.chaveD = 'D';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
Object.setPrototypeOf(objD, objA);//ObjetoD não possui objC, nem objB em seu __proto__

console.log(objA.__proto__ === Object.prototype);
console.log(objB.chaveA);
console.log(objC.chaveA);