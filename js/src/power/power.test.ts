import { power } from './power';

describe('power Function', () => {
    test('returns 1 for base 2 and exponent 0', () => {
        expect(power(2, 0)).toBe(1);
    });

    test('returns 4 for base 2 and exponent 2', () => {
        expect(power(2, 2)).toBe(4);
    });

    test('returns 16 for base 2 and exponent 4', () => {
        expect(power(2, 4)).toBe(16);
    });
});
