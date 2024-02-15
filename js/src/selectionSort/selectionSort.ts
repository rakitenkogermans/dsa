// Time: O(n^2)
const selectionSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        let indexOfSmallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfSmallest]) {
                indexOfSmallest = j;
            }
        }
        if (i !== indexOfSmallest) {
            [arr[indexOfSmallest], arr[i]] = [arr[i], arr[indexOfSmallest]];
        }
    }

    return arr;
};

export { selectionSort };
