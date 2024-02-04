// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

const sameFrequency = (n1: number, n2: number) => {
    const first = n1.toString();
    const second = n2.toString();

    if (first.length !== second.length) return false;

    const freq: Record<string, number> = {};

    for (let char of first) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of second) {
        if (!freq[char]) return false;
        freq[char] = freq[char] - 1;
    }

    return true;
};

export { sameFrequency };
