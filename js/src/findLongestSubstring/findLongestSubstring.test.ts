import { findLongestSubstring } from './findLongestSubstring';

describe('findLongestSubstring Function', () => {
    test('returns 0 for empty string', () => {
        expect(findLongestSubstring('')).toBe(0);
    });

    test('returns 7 for "rithmschool"', () => {
        expect(findLongestSubstring('rithmschool')).toBe(7);
    });

    test('returns 6 for "thisisawesome"', () => {
        expect(findLongestSubstring('thisisawesome')).toBe(6);
    });

    test('returns 7 for "thecatinthehat"', () => {
        expect(findLongestSubstring('thecatinthehat')).toBe(7);
    });

    test('returns 1 for "bbbbbb"', () => {
        expect(findLongestSubstring('bbbbbb')).toBe(1);
    });

    test('returns 8 for "longestsubstring"', () => {
        expect(findLongestSubstring('longestsubstring')).toBe(8);
    });

    test('returns 6 for "thisishowwedoit"', () => {
        expect(findLongestSubstring('thisishowwedoit')).toBe(6);
    });
});
