const pivot = (arr: number[], start = 0, end = arr.length + 1) => {
    let piv = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (piv > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
};

// Time: O(n log n)
const quickSort = (arr: number[], left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};

export { quickSort };
