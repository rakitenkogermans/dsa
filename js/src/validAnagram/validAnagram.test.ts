import { validAnagram } from './validAnagram';

describe('validAnagram Function', () => {
    test('should return true for empty strings', () => {
        expect(validAnagram('', '')).toBe(true);
    });

    test('should return false for "aaz" and "zza"', () => {
        expect(validAnagram('aaz', 'zza')).toBe(false);
    });

    test('should return true for "anagram" and "nagaram"', () => {
        expect(validAnagram('anagram', 'nagaram')).toBe(true);
    });

    test('should return false for "rat" and "car"', () => {
        expect(validAnagram('rat', 'car')).toBe(false);
    });

    test('should return false for "awesome" and "awesom"', () => {
        expect(validAnagram('awesome', 'awesom')).toBe(false);
    });

    test('should return false for "amanaplanacanalpanama" and "acanalmanplanpamana"', () => {
        expect(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')).toBe(false);
    });

    test('should return true for "qwerty" and "qeywrt"', () => {
        expect(validAnagram('qwerty', 'qeywrt')).toBe(true);
    });

    test('should return true for "texttwisttime" and "timetwisttext"', () => {
        expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
    });
});
