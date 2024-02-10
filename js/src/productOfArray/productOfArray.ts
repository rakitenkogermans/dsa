// productOfArray

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
const productOfArray = (arr: number[]) => {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
};

export { productOfArray };
