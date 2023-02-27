class Car {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(`${this.name} is driving`);
    }
}

class FlyingCar extends Car {
    fly() {
        console.log(`${this.name} is flying`);
    }
}

class SwimmingCar extends Car {
    swim() {
        console.log(`${this.name} is swimming`);
    }
}

class EatingCar extends Car {
    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Ejemplo de uso
const flyingCar = new FlyingCar('Delorean');
flyingCar.drive();
flyingCar.fly();

const swimmingCar = new SwimmingCar('Amphicar');
swimmingCar.drive();
swimmingCar.swim();

const eatingCar = new EatingCar('Food Truck');
eatingCar.drive();
eatingCar.eat();


