// Time: O(n^2)
const insertionSort = (arr: number[]) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j: number;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }

    return arr;
};

export { insertionSort };
