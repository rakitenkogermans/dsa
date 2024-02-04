// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Time - O(n log n)
// Space - O(1)
const areThereDuplicates = (...args: Array<number | string>) => {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    for (let i = 0; i < args.length - 1; i++) {
        // If any two adjacent elements are the same, we have a duplicate
        if (args[i] === args[i + 1]) {
            return true;
        }
    }

    return false;
};

// Time - O(n)
// Space - O(n)
// const areThereDuplicates = (...args: Array<number | string>) => {
//     const freq = {};
//
//     for (const arg of args) {
//         freq[arg] = (freq[arg] || 0) + 1;
//     }
//
//     for (const key in freq) {
//         if (freq[key] > 1) return true;
//     }
//
//     return false;
// };

export { areThereDuplicates };
