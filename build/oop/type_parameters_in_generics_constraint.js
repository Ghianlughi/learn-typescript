"use strict";
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(getProperty(x, "e"));
