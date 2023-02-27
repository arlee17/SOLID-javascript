class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    carInfo() {
        console.log(`This car is a ${this.brand} ${this.model}`);
    }
}

class Engine {
    constructor(brand, horsepower) {
        this.brand = brand;
        this.horsepower = horsepower;
    }

    engineInfo() {
        console.log(`${this.brand} engine with ${this.horsepower} horsepower`);
    }
}

class Fuel {
    constructor(brand, fuelType) {
        this.brand = brand;
        this.fuelType = fuelType;
    }

    fuelInfo() {
        console.log(`${this.brand} uses ${this.fuelType} as fuel`);
    }
}

let car1 = new Car('Ford', 'Mustang');
let carEngine1 = new Engine('V8', '500');
let carFuel1 = new Fuel('Shell', 'Gasoline');

car1.carInfo();
carEngine1.engineInfo();
carFuel1.fuelInfo();