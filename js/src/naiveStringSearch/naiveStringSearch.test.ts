import { naiveStringSearch } from './naiveStringSearch';

describe('naiveSearch Function', () => {
    test('counts 2 times the occurrence of "lo" in "lorie loled"', () => {
        expect(naiveStringSearch('lorie loled', 'lo')).toBe(2);
    });

    test('counts 3 times the occurrence of "ha" in "hahaha"', () => {
        expect(naiveStringSearch('hahaha', 'ha')).toBe(3);
    });

    test('returns 0 if substring not found', () => {
        expect(naiveStringSearch('hello world', 'bye')).toBe(0);
    });

    test('counts 4 times the occurrence of " " (space) in "a long sentence with spaces"', () => {
        expect(naiveStringSearch('a long sentence with spaces', ' ')).toBe(4);
    });

    test('counts 1 time the occurrence of a single character', () => {
        expect(naiveStringSearch('abcde', 'a')).toBe(1);
    });

    test('counts 1 time the occurrence of a longer substring', () => {
        expect(naiveStringSearch('I learned a lot today', 'learned')).toBe(1);
    });
});
