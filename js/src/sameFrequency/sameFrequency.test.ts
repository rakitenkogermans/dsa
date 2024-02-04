import { sameFrequency } from './sameFrequency';

describe('sameFrequency Function', () => {
    test('returns true for 182 and 281', () => {
        expect(sameFrequency(182, 281)).toBe(true);
    });

    test('returns false for 34 and 14', () => {
        expect(sameFrequency(34, 14)).toBe(false);
    });

    test('returns true for 3589578 and 5879385', () => {
        expect(sameFrequency(3589578, 5879385)).toBe(true);
    });

    test('returns false for 22 and 222', () => {
        expect(sameFrequency(22, 222)).toBe(false);
    });
});
