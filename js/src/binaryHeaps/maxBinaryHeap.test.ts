import { MaxBinaryHeap } from './maxBinaryHeap';

describe('MaxBinaryHeap', () => {
    let heap: MaxBinaryHeap;

    beforeEach(() => {
        heap = new MaxBinaryHeap();
    });

    test('insert adds elements according to the max binary heap rules', () => {
        heap.insert(55);
        expect(heap.values[0]).toBe(55);

        heap.insert(1);
        expect(heap.values.includes(1)).toBe(true);
        expect(heap.values[0]).toBe(55);

        heap.insert(45);
        heap.insert(199);
        expect(heap.values[0]).toBe(199);
        expect(heap.values).toEqual(expect.arrayContaining([199, 55, 45, 1]));
    });

    test('extractMax removes and returns the maximum element in the heap', () => {
        heap.insert(41);
        heap.insert(39);
        heap.insert(33);
        heap.insert(18);
        heap.insert(27);
        heap.insert(12);
        heap.insert(55);

        expect(heap.extractMax()).toBe(55);
        expect(heap.values[0]).not.toBe(55);
        expect(heap.values).toEqual(expect.arrayContaining([41, 39, 33, 18, 27, 12]));

        expect(heap.extractMax()).toBe(41);
        expect(heap.values[0]).toBe(39);
        expect(heap.values).toEqual(expect.arrayContaining([39, 27, 33, 18, 12]));
    });

    test('maintains the heap structure after extracting the max', () => {
        heap.insert(42);
        heap.insert(29);
        heap.insert(18);
        heap.insert(14);
        heap.insert(7);
        heap.insert(18);
        heap.insert(12);
        heap.insert(11);
        heap.insert(13);

        expect(heap.extractMax()).toBe(42);
        expect(heap.values).toEqual(expect.arrayContaining([29, 14, 18, 13, 7, 18, 12, 11]));
    });
});
