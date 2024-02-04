import { isSubsequence } from './isSubsequence';

describe('isSubsequence Function', () => {
    test('returns true for "hello" and "hello world"', () => {
        expect(isSubsequence('hello', 'hello world')).toBe(true);
    });

    test('returns true for "sing" and "sting"', () => {
        expect(isSubsequence('sing', 'sting')).toBe(true);
    });

    test('returns true for "abc" and "abracadabra"', () => {
        expect(isSubsequence('abc', 'abracadabra')).toBe(true);
    });

    test('returns false for "abc" and "acb" (order matters)', () => {
        expect(isSubsequence('abc', 'acb')).toBe(false);
    });
});
