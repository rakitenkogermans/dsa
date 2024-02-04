// Multiple Pointers - averagePair

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Time: O(N)
// Space: O(1)
const averagePair = (arr: number[], target: number) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const division = (arr[left] + arr[right]) / 2;
        if (division === target) {
            return true;
        }
        if (division < target) {
            left++;
        }
        if (division > target) {
            right--;
        }
    }

    return false;
};

export { averagePair };
