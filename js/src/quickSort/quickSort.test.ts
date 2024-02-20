import { quickSort } from './quickSort';

describe('quickSort Function', () => {
    test('correctly sorts an array of numbers in ascending order', () => {
        expect(quickSort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
    });

    test('works with an empty array', () => {
        expect(quickSort([])).toEqual([]);
    });

    test('works with an array of one element', () => {
        expect(quickSort([1])).toEqual([1]);
    });

    test('works with an already sorted array', () => {
        expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with a reverse sorted array', () => {
        expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with negative numbers', () => {
        expect(quickSort([-3, -1, -2, -4, -5])).toEqual([-5, -4, -3, -2, -1]);
    });

    test('works with duplicates', () => {
        expect(quickSort([2, 3, 4, 3, 2, 1, 1, 0])).toEqual([0, 1, 1, 2, 2, 3, 3, 4]);
    });
});
