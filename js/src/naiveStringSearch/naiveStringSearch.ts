// Naive String Search

// Simple method used to find a pattern within a text. It checks all the characters from the start of the text to the end for the pattern by sliding over the text one by one.
const naiveStringSearch = (long: string, short: string) => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
};

export { naiveStringSearch };
