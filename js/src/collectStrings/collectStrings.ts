// collectStrings

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
const collectStrings = (obj: any) => {
    let arr: string[] = [];

    for (let objKey in obj) {
        if (typeof obj[objKey] === 'string') {
            arr.push(obj[objKey]);
        } else if (typeof obj[objKey] === 'object') {
            arr = arr.concat(collectStrings(obj[objKey]));
        }
    }

    return arr;
};

export { collectStrings };
