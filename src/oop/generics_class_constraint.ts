interface Product {
    sell(): void;
}

class CarProduct implements Product {
    sell(): void {
        console.log('Sell Car');
    }
}

class MotorProduct implements Product {
    sell(): void {
        console.log('Sell Motor');
    }
}

function sellProducts<T extends Product>(products: T[]): void {
    products.forEach(product => product.sell());
}

const car1 = new CarProduct();
const motor1 = new MotorProduct();

sellProducts([car1, motor1]);