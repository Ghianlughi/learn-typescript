interface Generics<T> {
    propA: T
}

function genericsFunction<T>(value:T): Generics<T> {
    let data: Generics<T> = {
        propA: value
    };

    return data;
}
console.log(genericsFunction<string>('dafa'));
console.log(genericsFunction<number>(123));
console.log(genericsFunction<boolean>(true));