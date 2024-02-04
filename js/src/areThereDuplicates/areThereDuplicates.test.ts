import { areThereDuplicates } from './areThereDuplicates';

describe('areThereDuplicates Function', () => {
    test('returns false for 1, 2, 3', () => {
        expect(areThereDuplicates(1, 2, 3)).toBe(false);
    });

    test('returns true for 1, 2, 2', () => {
        expect(areThereDuplicates(1, 2, 2)).toBe(true);
    });

    test('returns true for "a", "b", "c", "a"', () => {
        expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
    });
});
