// Frequency Counter - validAnagram

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const validAnagram = (str1: string, str2: string) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const freq = {};

    str1.split('').forEach((s) => {
        freq[s] = freq[s] ? ++freq[s] : 1;
    });

    str2.split('').forEach((s) => {
        if (freq[s]) {
            freq[s] = --freq[s];
        } else {
            return false;
        }
    });

    for (let key in freq) {
        if (freq[key] !== 0) {
            return false;
        }
    }

    return true;
};

export { validAnagram };
