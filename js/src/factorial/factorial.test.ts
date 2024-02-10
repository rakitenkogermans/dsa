import { factorial } from './factorial';

describe('factorial Function', () => {
    test('returns 1 for 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('returns 2 for 2', () => {
        expect(factorial(2)).toBe(2);
    });

    test('returns 24 for 4', () => {
        expect(factorial(4)).toBe(24);
    });

    test('returns 5040 for 7', () => {
        expect(factorial(7)).toBe(5040);
    });
});
