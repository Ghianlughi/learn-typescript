"use strict";
function getData1(value) {
    return value;
}
const data1 = getData1(123);
console.log(data1);
//-----------------------
function getData2(value) {
    return value;
}
const data2 = getData2("test");
console.log(data2.length);
const data21 = getData2(32323);
console.log(data21.toFixed(2));
