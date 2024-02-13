import { binarySearch } from './binarySearch';

describe('binarySearch Function', () => {
    test('finds the index of 2 in [1,2,3,4,5]', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
    });

    test('finds the index of 3 in [1,2,3,4,5]', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    });

    test('finds the index of 5 in [1,2,3,4,5]', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    test('returns -1 for 6 in [1,2,3,4,5] (not found)', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });

    test('finds the index of 10 in a longer sorted array', () => {
        expect(
            binarySearch(
                [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
                10,
            ),
        ).toBe(2);
    });

    test('finds the index of 95 in a longer sorted array', () => {
        expect(
            binarySearch(
                [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
                95,
            ),
        ).toBe(16);
    });

    test('returns -1 for 100 in a longer sorted array (not found)', () => {
        expect(
            binarySearch(
                [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
                100,
            ),
        ).toBe(-1);
    });
});
