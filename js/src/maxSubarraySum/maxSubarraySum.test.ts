import { maxSubarraySum } from './maxSubarraySum';

describe('maxSubarraySum Function', () => {
    test('returns 700 for [100,200,300,400] and 2', () => {
        expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
    });

    test('returns 39 for [1,4,2,10,23,3,1,0,20] and 4', () => {
        expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    });

    test('returns 5 for [-3,4,0,-2,6,-1] and 2', () => {
        expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    });

    test('returns 5 for [3,-2,7,-4,1,-1,4,-2,1] and 2', () => {
        expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
    });

    test('returns null for [2,3] and 3', () => {
        expect(maxSubarraySum([2, 3], 3)).toBeNull();
    });
});
