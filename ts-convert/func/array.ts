class MyArray<Type> {
    array: Type[] = [];
    create(item: Type) {
        this.array.push(item);
    }
    display(arr: Type[]) {
        arr.forEach((item, index) => {
            console.log(item);
        });
    }
    updateArray(arr: Type[], index: number, newItem: Type) {
        arr[index] = newItem;
    }
    deleteArray(arr: Type[], index: number) {
        arr.splice(index, 1);
    }
    findMax(arr: Type[]) {
        if (arr.length === 0) throw new Error("Array is empty");
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        return max
    }
}

export { MyArray }