// function generics24<T>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

interface length {
    length: number;
}

function generics24<T extends length>(arg: T): T {
    console.log(arg.length);
    return arg;
}
const generics24a = generics24('akasks');
console.log(generics24a);
const generics24b = generics24({ length:10, value: 200});