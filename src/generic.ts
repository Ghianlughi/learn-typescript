function getData(value: any){
    return value;
}

console.log(getData("Ghianlughi").length);
console.log(getData(123));

function myData<T>(value:T){
    return value 
}
console.log(getData("Ghianlughi").length);
console.log(getData(123));

const arrowFunc = <T, >(value: T) => {

}