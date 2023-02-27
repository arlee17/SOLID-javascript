class Car {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}


class SportsCar extends Car {
    driveFast() {
        console.log('Driving sports car fast');
    }
}


class ElectricCar extends Car {
    driveQuiet() {
        console.log('Driving electric car quietly');
    }
}


function printCarNames(cars) {
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        console.log(car.getName());
    }
}


const sportsCar = new SportsCar('Ferrari');
const electricCar = new ElectricCar('Tesla');
const cars = [sportsCar, electricCar];
printCarNames(cars);