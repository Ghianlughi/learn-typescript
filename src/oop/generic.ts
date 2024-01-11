function getData1(value:any){
    return value;
}

const data1 = getData1(123);
console.log(data1);
//-----------------------

function getData2<T>(value: T): T{
    return value;
}

const data2 = getData2<string>("test");
console.log(data2.length)

const data21 = getData2<number>(32323);
console.log(data21.toFixed(2));


