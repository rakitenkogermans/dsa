// Sliding Window - maxSubarraySum

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Time: O(N)
// Space: O(1)
const maxSubarraySum = (arr: number[], len: number) => {
    if (len > arr.length) return null;

    let checkSum = 0;

    for (let i = 0; i < len; i++) {
        checkSum += arr[i];
    }

    let maxSum = checkSum;

    for (let i = len; i < arr.length; i++) {
        checkSum = checkSum - arr[i - len] + arr[i];
        maxSum = Math.max(maxSum, checkSum);
    }

    return maxSum;
};

export { maxSubarraySum };
