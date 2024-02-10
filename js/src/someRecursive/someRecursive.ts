// someRecursive

// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
const someRecursive = (arr: number[], cb: (val: number) => boolean) => {
    if (arr.length === 0) return false;
    return cb(arr[0]) ? true : someRecursive(arr.slice(1), cb);
};

export { someRecursive };
