import { minSubArrayLen } from './minSubArrayLen';

describe('minSubArrayLen Function', () => {
    test('returns 2 for [2,3,1,2,4,3] and 7', () => {
        expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    });

    test('returns 2 for [2,1,6,5,4] and 9', () => {
        expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
    });

    test('returns 1 for [3,1,7,11,2,9,8,21,62,33,19] and 52', () => {
        expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
    });

    test('returns 3 for [1,4,16,22,5,7,8,9,10] and 39', () => {
        expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
    });

    test('returns 5 for [1,4,16,22,5,7,8,9,10] and 55', () => {
        expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
    });

    test('returns 2 for [4, 3, 3, 8, 1, 2, 3] and 11', () => {
        expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
    });

    test('returns 0 for [1,4,16,22,5,7,8,9,10] and 95', () => {
        expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
    });
});
