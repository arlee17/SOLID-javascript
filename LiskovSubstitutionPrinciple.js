class Car {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}

class SportsCar extends Car {
    makeSound() {
        console.log(`${this.name} revs the engine`);
    }
}

class FamilyCar extends Car {
    makeSound() {
        console.log(`${this.name} honks the horn`);
    }
}

class ElectricCar extends Car {
    makeSound() {
        console.log(`${this.name} runs quietly`);
    }
}

function makeCarSound(car) {
    car.makeSound();
}

const sportsCar = new SportsCar('Ferrari California');
makeCarSound(sportsCar);

const familyCar = new FamilyCar('Toyota Camry');
makeCarSound(familyCar);

const electricCar = new ElectricCar('Tesla Model S');
makeCarSound(electricCar);