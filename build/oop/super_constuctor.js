"use strict";
class Hewan6 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
class Katak6 extends Hewan6 {
    constructor(nama, kaki, beracun) {
        super(nama, kaki);
        this.beracun = beracun;
    }
}
const katak6 = new Katak6('katak', 4, false);
console.log(katak6);
