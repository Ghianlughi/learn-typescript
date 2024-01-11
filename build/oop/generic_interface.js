"use strict";
function genericsFunction(value) {
    let data = {
        propA: value
    };
    return data;
}
console.log(genericsFunction('dafa'));
console.log(genericsFunction(123));
console.log(genericsFunction(true));
