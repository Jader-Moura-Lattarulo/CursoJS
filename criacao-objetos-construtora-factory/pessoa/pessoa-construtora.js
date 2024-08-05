function Person(name, age){
    this.name = name;
    this.age = age;
    this.toPresent = function(){
        console.log(`Olá meu nome é ${this.name} e tenho ${this.age} anos.`);
    };
}

const person01 = new Person('Gabi', 33);
person01.toPresent();