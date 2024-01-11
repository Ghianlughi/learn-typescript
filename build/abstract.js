"use strict";
class vehicle {
    start() {
        console.log("Brummmm- Brumm");
    }
}
class Car extends vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
let motor = new Motorcycle();
console.log(motor.wheels);
motor.start();
