import { isPalindrome } from './isPalindrome';

describe('isPalindrome Function', () => {
    test('returns false for "awesome"', () => {
        expect(isPalindrome('awesome')).toBe(false);
    });

    test('returns false for "foobar"', () => {
        expect(isPalindrome('foobar')).toBe(false);
    });

    test('returns true for "tacocat"', () => {
        expect(isPalindrome('tacocat')).toBe(true);
    });

    test('returns true for "amanaplanacanalpanama"', () => {
        expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
    });

    test('returns false for "amanaplanacanalpandemonium"', () => {
        expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false);
    });
});
