import { someRecursive } from './someRecursive';

describe('someRecursive Function', () => {
    const isOdd = (val: number) => val % 2 !== 0;

    test('returns true for [1,2,3,4] with isOdd', () => {
        expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
    });

    test('returns true for [4,6,8,9] with isOdd', () => {
        expect(someRecursive([4, 6, 8, 9], isOdd)).toBe(true);
    });

    test('returns false for [4,6,8] with isOdd', () => {
        expect(someRecursive([4, 6, 8], isOdd)).toBe(false);
    });

    test('returns false for [4,6,8] with val => val > 10', () => {
        expect(someRecursive([4, 6, 8], (val) => val > 10)).toBe(false);
    });
});
