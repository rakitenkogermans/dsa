import { capitalizeWords } from './capitalizeWords';

describe('capitalizeWords Function', () => {
    let words = ['i', 'am', 'learning', 'recursion'];

    test('capitalizes all words in the array ["i", "am", "learning", "recursion"]', () => {
        expect(capitalizeWords(words)).toEqual(['I', 'AM', 'LEARNING', 'RECURSION']);
    });
});
