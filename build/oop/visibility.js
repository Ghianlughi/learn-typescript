"use strict";
// public
// protected 
// private 
class Hewan8 {
    constructor(nama, kaki, mamalia) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
    berjalan() {
    }
}
class Katak8 extends Hewan8 {
    constructor() {
        super(...arguments);
        this.umurTelur = 4;
        this.umurKecebong = 7;
        this.umurKatak = 90;
    }
    getUmur() {
        console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
    }
}
const katak8 = new Katak8('katak bakar', 4, false);
