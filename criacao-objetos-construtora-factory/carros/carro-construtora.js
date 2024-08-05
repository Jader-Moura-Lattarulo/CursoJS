function Car(brand, model){
    this.brand = brand;
    this.model = model;
    this.toDicribe = function(){
        console.log(`Este é um ${this.brand} ${this.model}.`);
    };
}

const car01 = new Car('Hyundai', 'Creta');
car01.toDicribe();