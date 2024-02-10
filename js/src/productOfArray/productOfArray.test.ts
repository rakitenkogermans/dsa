import { productOfArray } from './productOfArray';

describe('productOfArray Function', () => {
    test('returns 6 for [1,2,3]', () => {
        expect(productOfArray([1, 2, 3])).toBe(6);
    });

    test('returns 60 for [1,2,3,10]', () => {
        expect(productOfArray([1, 2, 3, 10])).toBe(60);
    });
});
