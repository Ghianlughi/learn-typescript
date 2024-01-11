// tipe data pada balikan function

    function getName(): string {
        return "hello, my name is Ghianlughi";
    }

    console.log(getName());

    function getAge(): number {
        return 123;
    }

    function printName(): void {
        console.log("print name");
    }

    printName();


//----------------------------

// function kalkulator(val1: number, val2:number,): number {
//     return val1 * val2;
// }

// const result = kalkulator(34,9);
// console.log(result);


    function kalkulator(nilai1: number, nilai2:number):  number {
        return nilai1 + nilai2;
    }
    const result =kalkulator(300,900);
    console.log(result);

// function as type

type Tambah = (val1: number, val2:number) => number;

    const Add: Tambah = (val1: number, val2:number): number => {
        return val1 + val2;
    }

// default  paramater
    const fullName = (first: string, last: string = "Bintang"): string => {
    return first + " "+ last;

    }

    console.log(fullName("Ghianlughi"));


// optional parameter
    const getUmur = (val1: number, val2?: number): string => {
        return val1 + "" + val2;

    }
console.log(getUmur(1))