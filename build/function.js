"use strict";
// tipe data pada balikan function
function getName() {
    return "hello, my name is Ghianlughi";
}
console.log(getName());
function getAge() {
    return 123;
}
function printName() {
    console.log("print name");
}
printName();
//----------------------------
// function kalkulator(val1: number, val2:number,): number {
//     return val1 * val2;
// }
// const result = kalkulator(34,9);
// console.log(result);
function kalkulator(nilai1, nilai2) {
    return nilai1 + nilai2;
}
const result = kalkulator(300, 900);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
// default  paramater
const fullName = (first, last = "Bintang") => {
    return first + " " + last;
};
console.log(fullName("Ghianlughi"));
// optional parameter
const getUmur = (val1, val2) => {
    return val1 + "" + val2;
};
console.log(getUmur(1));
