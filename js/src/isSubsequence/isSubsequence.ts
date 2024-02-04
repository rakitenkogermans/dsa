// Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Time: O(N + M)
// Space: O(1)
const isSubsequence = (str1: string, str2: string) => {
    if (str1.length > str2.length) return false;

    let p1 = 0;
    let p2 = 0;

    while (p1 < str1.length && p2 < str2.length) {
        const c1 = str1[p1];
        const c2 = str2[p2];

        if (c1 === c2) {
            p1++;
        }

        p2++;
    }

    return p1 === str1.length;
};

export { isSubsequence };
