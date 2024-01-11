    interface Vehicle {
        name: string;
        wheels: number;
    }

    interface ICar extends Vehicle{
        doors: number;
    }

    class Civic implements ICar{
        name: string = 'Civiv';
        wheels: number = 4 ;
        doors: number = 4;
    }