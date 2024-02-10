// capitalizeFirst

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
const capitalizeFirst = (arr: string[]) => {
    if (arr.length === 0) {
        return [];
    } else {
        const word = arr[0];
        const capitalizedWord = word[0].toUpperCase() + word.slice(1);
        return [capitalizedWord].concat(capitalizeFirst(arr.slice(1)));
    }
};

export { capitalizeFirst };
