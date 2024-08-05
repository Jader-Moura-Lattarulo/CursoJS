function Car(brand, model){
    return {
        brand: brand,
        model: model,
        toDiscribe() {
            console.log(`Este é um ${this.brand} ${this.model}.`);
        }
    };
}

const car01 = Car('Hyundai', 'HB20');
car01.toDiscribe();