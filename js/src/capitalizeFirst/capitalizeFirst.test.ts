import { capitalizeFirst } from './capitalizeFirst';

describe('capitalizeFirst Function', () => {
    test('capitalizes the first letter of each string in the array ["car","taco","banana"]', () => {
        expect(capitalizeFirst(['car', 'taco', 'banana'])).toEqual(['Car', 'Taco', 'Banana']);
    });
});
