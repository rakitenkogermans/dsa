import { bubbleSort } from './bubbleSort';

describe('bubbleSort Function', () => {
    test('correctly sorts an array of numbers in ascending order', () => {
        expect(bubbleSort([4, 2, 6, 5, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('works with an empty array', () => {
        expect(bubbleSort([])).toEqual([]);
    });

    test('works with an array of one element', () => {
        expect(bubbleSort([1])).toEqual([1]);
    });

    test('works with an already sorted array', () => {
        expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with a reverse sorted array', () => {
        expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('works with negative numbers', () => {
        expect(bubbleSort([-3, -1, -2, -4])).toEqual([-4, -3, -2, -1]);
    });

    test('works with duplicates', () => {
        expect(bubbleSort([5, 3, 5, 3, 1])).toEqual([1, 3, 3, 5, 5]);
    });
});
