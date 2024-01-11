    abstract class vehicle {
        abstract wheels: number;
        start(): void {
            console.log("Brummmm- Brumm")
        }
    
    }
    class Car extends vehicle {
        wheels: number= 4;
    }
    class Motorcycle extends vehicle {
        wheels: number= 2 ;
    }

    let car = new Car();
    console.log(car.wheels);
    car.start();

    let motor = new Motorcycle();
    console.log(motor.wheels);
    motor.start();
    