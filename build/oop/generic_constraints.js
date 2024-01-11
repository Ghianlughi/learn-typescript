"use strict";
// function generics24<T>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }
function generics24(arg) {
    console.log(arg.length);
    return arg;
}
const generics24a = generics24('akasks');
console.log(generics24a);
const generics24b = generics24({ length: 10, value: 200 });
