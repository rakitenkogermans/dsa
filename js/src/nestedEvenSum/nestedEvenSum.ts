// nestedEvenSum

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
const nestedEvenSum = (obj: any) => {
    let sum = 0;
    for (let objKey in obj) {
        if (typeof obj[objKey] === 'object') {
            sum += nestedEvenSum(obj[objKey]);
        } else if (typeof obj[objKey] === 'number' && obj[objKey] % 2 === 0) {
            sum += obj[objKey];
        }
    }
    return sum;
};

export { nestedEvenSum };
