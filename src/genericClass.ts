class List<T>{
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }
    add(element: T): void {
        this.data.push(element);
    }
    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return  this.data;
    }
}

// let numbers = new List <number>(1,2,3,4,5,);
// numbers.add(4);
// numbers.addMultiple(6,7,8);
// console.log(numbers.getAll());

let random = new List<number| string> (1,"a","b");
random.add("fito");
random.add(9090)
console.log((random.getAll()));
