// flatten

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
type RecursiveArray = Array<RecursiveArray | number>;

const flatten = (arr: RecursiveArray) => {
    return arr.reduce((acc: Array<number | number[]>, val) => {
        return acc.concat(Array.isArray(val) ? flatten(val) : val);
    }, []);
};

export { flatten };

// const flatten = (oldArr: Array<number | number[]>) => {
//     let newArr = [];
//     for (let i = 0; i < oldArr.length; i++) {
//         if (Array.isArray(oldArr[i])) {
//             newArr = newArr.concat(flatten(oldArr[i]));
//         } else {
//             newArr.push(oldArr[i]);
//         }
//     }
//     return newArr;
// };
