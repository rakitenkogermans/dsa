// capitalizeWords

// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
const capitalizeWords = (str: string[]) => {
    if (str.length === 0) return [];
    else {
        const capitalizedWord = str[0].toUpperCase();
        return [capitalizedWord].concat(capitalizeWords(str.slice(1)));
    }
};

export { capitalizeWords };
