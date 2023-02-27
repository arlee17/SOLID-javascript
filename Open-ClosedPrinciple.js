class Car {
    constructor(brand, model, speedRate) {
        this.brand = brand;
        this.model = model;
        this.speedRate = speedRate;
    }

    getSpeed() {
        return this.speedRate.getSpeed();
    }
}

class SpeedRate {
    getSpeed() { }
}

class SportsCarSpeedRate extends SpeedRate {
    getSpeed() {
        return 220;
    }
}

class FamilyCarSpeedRate extends SpeedRate {
    getSpeed() {
        return 100;
    }
}

class ElectricCarSpeedRate extends SpeedRate {
    getSpeed() {
        return 120;
    }
}

const sportsCar = new Car('Ferrari', 'California', new SportsCarSpeedRate());
console.log(`${sportsCar.brand} ${sportsCar.model} can reach a top speed of ${sportsCar.getSpeed()} mph`);

const familyCar = new Car('Toyota', 'Camry', new FamilyCarSpeedRate());
console.log(`${familyCar.brand} ${familyCar.model} can reach a top speed of ${familyCar.getSpeed()} mph`);

const electricCar = new Car('Tesla', 'Model S', new ElectricCarSpeedRate());
console.log(`${electricCar.brand} ${electricCar.model} can reach a top speed of ${electricCar.getSpeed()} mph`);
