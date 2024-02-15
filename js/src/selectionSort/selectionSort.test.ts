import { selectionSort } from './selectionSort';

describe('selectionSort Function', () => {
    test('correctly sorts an array of numbers in ascending order', () => {
        expect(selectionSort([29, 10, 14, 37, 13])).toEqual([10, 13, 14, 29, 37]);
    });

    test('works with an empty array', () => {
        expect(selectionSort([])).toEqual([]);
    });

    test('works with an array of one element', () => {
        expect(selectionSort([1])).toEqual([1]);
    });

    test('works with an already sorted array', () => {
        expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with a reverse sorted array', () => {
        expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with negative numbers', () => {
        expect(selectionSort([-3, -1, -2, -4])).toEqual([-4, -3, -2, -1]);
    });

    test('works with duplicates', () => {
        expect(selectionSort([5, 3, 5, 3, 1])).toEqual([1, 3, 3, 5, 5]);
    });
});
