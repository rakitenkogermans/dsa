// Sliding Window - findLongestSubstring

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Time: O(n)
const findLongestSubstring = (str: string) => {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let j = 0; j < str.length; j++) {
        let char = str[j];
        if (seen[char]) start = Math.max(start, seen[char]);
        longest = Math.max(longest, j - start + 1);
        seen[char] = j + 1;
    }

    return longest;
};

export { findLongestSubstring };
