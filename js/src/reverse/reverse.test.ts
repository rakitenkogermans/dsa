import { reverse } from './reverse';

describe('reverse Function', () => {
    test('returns "emosewa" for "awesome"', () => {
        expect(reverse('awesome')).toBe('emosewa');
    });

    test('returns "loohcsmhtir" for "rithmschool"', () => {
        expect(reverse('rithmschool')).toBe('loohcsmhtir');
    });
});
