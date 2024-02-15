import { insertionSort } from './insertionSort';

describe('insertionSort Function', () => {
    test('correctly sorts an array of numbers in ascending order', () => {
        expect(insertionSort([7, 4, 5, 2, 9, 1])).toEqual([1, 2, 4, 5, 7, 9]);
    });

    test('works with an empty array', () => {
        expect(insertionSort([])).toEqual([]);
    });

    test('works with an array of one element', () => {
        expect(insertionSort([1])).toEqual([1]);
    });

    test('works with an already sorted array', () => {
        expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with a reverse sorted array', () => {
        expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with negative numbers', () => {
        expect(insertionSort([-5, -3, -1, -4, -2])).toEqual([-5, -4, -3, -2, -1]);
    });

    test('works with duplicates', () => {
        expect(insertionSort([3, 3, 2, 1, 4])).toEqual([1, 2, 3, 3, 4]);
    });
});
