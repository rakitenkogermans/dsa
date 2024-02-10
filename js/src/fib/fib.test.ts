import { fib } from './fib';

describe('fib Function', () => {
    test('returns 3 for 4', () => {
        expect(fib(4)).toBe(3);
    });

    test('returns 55 for 10', () => {
        expect(fib(10)).toBe(55);
    });

    test('returns 317811 for 28', () => {
        expect(fib(28)).toBe(317811);
    });

    test('returns 9227465 for 35', () => {
        expect(fib(35)).toBe(9227465);
    });
});
