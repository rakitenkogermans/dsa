import { collectStrings } from './collectStrings';

describe('collectStrings Function', () => {
    const obj = {
        stuff: 'foo',
        data: {
            val: {
                thing: {
                    info: 'bar',
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: 'baz',
                        },
                    },
                },
            },
        },
    };

    test('collects all strings from the nested object', () => {
        expect(collectStrings(obj)).toEqual(['foo', 'bar', 'baz']);
    });
});
