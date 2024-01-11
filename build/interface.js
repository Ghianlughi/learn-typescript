"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log('nyala');
    }
    Off() {
        console.log('mati');
    }
}
class MacBook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log('nyala');
    }
    Off() {
        console.log('mati');
    }
}
let asus = new Asus('Asus', true);
console.log(asus.on());
console.log(asus.Off());
let mb = new MacBook('MBP', true);
console.log(mb.on());
console.log(mb.Off());
