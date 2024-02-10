// stringifyNumbers

// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
const stringifyNumbers = (obj: any) => {
    const newObj = {};
    for (let objKey in obj) {
        if (typeof obj[objKey] === 'object' && !Array.isArray(obj[objKey])) {
            newObj[objKey] = stringifyNumbers(obj[objKey]);
        } else if (typeof obj[objKey] === 'number') {
            newObj[objKey] = obj[objKey] + '';
        } else {
            newObj[objKey] = obj[objKey];
        }
    }
    return newObj;
};

export { stringifyNumbers };
