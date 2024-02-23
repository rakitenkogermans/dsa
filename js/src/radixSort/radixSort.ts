const getDigit = (num: number, i: number) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num: number) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums: number[]) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
};

// Time: O(n*k), n is length of array, and k is max digit count (largest number's digit count)
const radixSort = (nums: number[]) => {
    let maxDigitCount = mostDigits(nums);

    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < nums.length; j++) {
            const digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }

    return nums;
};

export { radixSort };
