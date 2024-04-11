import { HashTable } from './hashTable';

describe('HashTable', () => {
    let ht: HashTable;

    beforeEach(() => {
        ht = new HashTable(4);
    });

    test('set adds key-value pairs correctly', () => {
        ht.set('color', 'blue');
        expect(ht.get('color')).toBe('blue');
        ht.set('name', 'john');
        expect(ht.get('name')).toBe('john');
    });

    test('get retrieves the correct value for a key', () => {
        ht.set('color', 'blue');
        ht.set('name', 'john');
        expect(ht.get('color')).toBe('blue');
        expect(ht.get('name')).toBe('john');
        expect(ht.get('nonexistent')).toBe(undefined);
    });

    test('keys method returns all unique keys', () => {
        ht.set('color', 'blue');
        ht.set('name', 'john');
        ht.set('sport', 'basketball');
        const keys = ht.keys();
        expect(keys.sort()).toEqual(['color', 'name', 'sport'].sort());
    });

    test('values method returns all unique values', () => {
        ht.set('color', 'blue');
        ht.set('color2', 'blue'); // duplicate value test
        ht.set('name', 'john');
        ht.set('sport', 'basketball');
        const values = ht.values();
        expect(values.sort()).toEqual(['blue', 'john', 'basketball'].sort());
    });

    test('handles collisions correctly', () => {
        // Assuming these keys collide to test collision handling
        ht.set('a', 'one');
        ht.set('b', 'two'); // Let's say 'a' and 'b' hash to the same index
        expect(ht.get('a')).toBe('one');
        expect(ht.get('b')).toBe('two');
    });

    test('allows for key-value update', () => {
        ht.set('color', 'blue');
        ht.set('color', 'red'); // Updating the value of 'color'
        expect(ht.get('color')).toBe('red');
    });
});
