"use strict";
class Store {
    constructor() {
        this.name = 'Store A';
        this.profit = 1000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class Store2 {
    constructor() {
        this.name = 'Store A';
        this.profit = 10000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class FashionProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store();
    }
    sell() {
        console.log(`${this.name} harga jual adalah ${this.store.getProfit() + this.price}`);
    }
}
class TechProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store();
    }
    sell() {
        console.log(`${this.name} harga jual adalah ${this.store.getProfit() + this.price}`);
    }
}
const baju = new FashionProduct('baju lengan panjang', 50000);
baju.sell();
class TokoLama {
    constructor() {
        this.name = 'Toko Lama';
        this.profit = 10000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class TokoBaru {
    constructor() {
        this.name = 'Toko Baru';
        this.profit = 40000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class HijabProduct {
    constructor(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`${this.name} harga jual adalah ${this.store.getProfit() + this.price}`);
    }
}
class FoodProduct {
    constructor(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`${this.name} harga jual adalah ${this.store.getProfit() + this.price}`);
    }
}
const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();
const hijabMahal = new HijabProduct(tokoLama, 'baju Mahal', 8000);
const hijabMahal2 = new HijabProduct(tokoBaru, 'baju Mahal', 8000);
console.log(hijabMahal);
console.log(hijabMahal2);
hijabMahal.sell();
hijabMahal2.sell();
