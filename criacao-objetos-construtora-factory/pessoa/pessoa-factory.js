function Person(name, age) {
    return{
        name:name,
        age:age,
        toPresent(){
            console.log(`Olá, meu nome é ${this.name} tenho ${this.age} anos.`);
            
        }
    };
}

const person01 = Person('Jader', 35);
Person01.toPresent();