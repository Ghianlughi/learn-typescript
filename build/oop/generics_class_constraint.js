"use strict";
class CarProduct {
    sell() {
        console.log('Sell Car');
    }
}
class MotorProduct {
    sell() {
        console.log('Sell Motor');
    }
}
function sellProducts(products) {
    products.forEach(product => product.sell());
}
const car1 = new CarProduct();
const motor1 = new MotorProduct();
sellProducts([car1, motor1]);
