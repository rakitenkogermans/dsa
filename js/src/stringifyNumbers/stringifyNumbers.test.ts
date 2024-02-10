import { stringifyNumbers } from './stringifyNumbers';

describe('stringifyNumbers Function', () => {
    let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66,
            },
        },
    };

    const expected = {
        num: '1',
        test: [],
        data: {
            val: '4',
            info: {
                isRight: true,
                random: '66',
            },
        },
    };

    test('correctly converts numbers to strings in the nested object', () => {
        expect(stringifyNumbers(obj)).toEqual(expected);
    });
});
