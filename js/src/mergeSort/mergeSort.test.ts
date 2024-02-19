import { mergeSort } from './mergeSort';

describe('mergeSort Function', () => {
    test('correctly sorts an array of numbers in ascending order', () => {
        expect(mergeSort([10, 24, 76, 73, 72, 1, 9])).toEqual([1, 9, 10, 24, 72, 73, 76]);
    });

    test('works with an empty array', () => {
        expect(mergeSort([])).toEqual([]);
    });

    test('works with an array of one element', () => {
        expect(mergeSort([1])).toEqual([1]);
    });

    test('works with an already sorted array', () => {
        expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with a reverse sorted array', () => {
        expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with negative numbers', () => {
        expect(mergeSort([-3, -1, -2, -4, -5])).toEqual([-5, -4, -3, -2, -1]);
    });

    test('works with duplicates', () => {
        expect(mergeSort([2, 3, 4, 3, 2, 1, 1, 0])).toEqual([0, 1, 1, 2, 2, 3, 3, 4]);
    });
});
