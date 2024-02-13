// Binary Search
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Time: O(log n)
const binarySearch = (arr: number[], target: number) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const middle = Math.ceil((right + left) / 2);
        if (arr[middle] === target) {
            return middle;
        }
        if (arr[middle] > target) {
            right = middle - 1;
        }
        if (arr[middle] < target) {
            left = middle + 1;
        }
    }
    return -1;
};

export { binarySearch };
