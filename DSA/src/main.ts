function addData(array: number[], data: number): number[] {
    return [...array, data]
}
function getData(array: number[]): number[] {
    return [...array]
}
function updateData(array: number[], index: number, newData: number): number[] {
    if (index >= 0 && index < array.length) {
        return array.map((array, i) => (i === index ? newData : array));
    } else {
        console.error("Index out of bounds");
        return array
    }
}
function deleteData(array: number[], index: number): number[] {
    if (index >= 0 && index <= array.length) {
        return array.filter((_, i) => i !== index)
    }
    else {
        console.error("Index out of bounds");
        return array;
    }

}

let myArray: number[] = [];

myArray = addData(myArray, 2);
myArray = addData(myArray, 1);
console.log(getData(myArray));

myArray = updateData(myArray, 0, 8);
console.log(getData(myArray));

myArray = deleteData(myArray, 1);
console.log(getData(myArray));



