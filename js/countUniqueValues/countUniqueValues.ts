// Multiple Pointers - countUniqueValues

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (arr) => {
    if (arr.length < 2) return arr.length;
    let p1 = 0;
    let p2 = 1;

    while (p2 < arr.length) {
        if (arr[p1] !== arr[p2]) {
            p1++;
            arr[p1] = arr[p2];
        }
        p2++;
    }

    return p1 + 1;
};

export { countUniqueValues };
