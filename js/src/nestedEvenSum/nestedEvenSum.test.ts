import { nestedEvenSum } from './nestedEvenSum';

describe('nestedEvenSum Function', () => {
    const obj1 = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: 'yup',
            },
        },
    };

    const obj2 = {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 2 }, ee: 'car' },
    };

    test('returns 6 for obj1', () => {
        expect(nestedEvenSum(obj1)).toBe(6);
    });

    test('returns 10 for obj2', () => {
        expect(nestedEvenSum(obj2)).toBe(10);
    });
});
