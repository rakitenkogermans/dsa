import { recursiveRange } from './recursiveRange';

describe('recursiveRange Function', () => {
    test('returns 21 for 6', () => {
        expect(recursiveRange(6)).toBe(21);
    });

    test('returns 55 for 10', () => {
        expect(recursiveRange(10)).toBe(55);
    });
});
