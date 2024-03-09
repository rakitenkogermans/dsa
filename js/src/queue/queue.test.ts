import { Queue } from './queue';

describe('Queue', () => {
    let queue: Queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('enqueue adds an element to the queue', () => {
        expect(queue.enqueue(1)).toBe(1);
        expect(queue.enqueue(2)).toBe(2);
        expect(queue.size).toBe(2);
        expect(queue.first.val).toBe(1);
        expect(queue.last.val).toBe(2);
    });

    test('dequeue removes and returns the first element from the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.size).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.size).toBe(0);
    });

    test('dequeue on empty queue returns null', () => {
        expect(queue.dequeue()).toBe(null);
    });

    test('maintains correct order of elements', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBe(null);
    });

    test('correctly updates the first and last properties', () => {
        queue.enqueue(1);
        expect(queue.first.val).toBe(1);
        expect(queue.last.val).toBe(1);

        queue.enqueue(2);
        expect(queue.first.val).toBe(1);
        expect(queue.last.val).toBe(2);

        queue.dequeue();
        expect(queue.first.val).toBe(2);
        expect(queue.last.val).toBe(2);

        queue.dequeue();
        expect(queue.first).toBe(null);
        expect(queue.last).toBe(null);
    });
});
