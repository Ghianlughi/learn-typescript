"use strict";
class Hewan7 {
    constructor() {
        this.name = '';
    }
    bernafas() {
        console.log('sedang bernafas');
    }
}
class Katak7 extends Hewan7 {
    bernafas() {
        console.log('malas bernafas');
    }
}
const katak7 = new Katak7();
katak7.bernafas();
