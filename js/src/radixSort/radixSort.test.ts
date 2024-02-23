import { radixSort } from './radixSort';

describe('radixSort Function', () => {
    test('correctly sorts an array of numbers in ascending order', () => {
        expect(radixSort([23, 345, 5467, 12, 2345, 9852])).toEqual([12, 23, 345, 2345, 5467, 9852]);
    });

    test('works with an empty array', () => {
        expect(radixSort([])).toEqual([]);
    });

    test('works with an array of one element', () => {
        expect(radixSort([1])).toEqual([1]);
    });

    test('works with an array containing zeros', () => {
        expect(radixSort([0, 2, 34, 22, 10])).toEqual([0, 2, 10, 22, 34]);
    });

    test('handles an array with the same numbers', () => {
        expect(radixSort([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
    });

    test('sorts a large array of numbers', () => {
        const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 10000));
        const sortedArray = [...array].sort((a, b) => a - b);
        expect(radixSort(array)).toEqual(sortedArray);
    });
});
