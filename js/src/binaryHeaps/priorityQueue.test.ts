import { PriorityQueue } from './priorityQueue';

describe('PriorityQueue', () => {
    let pq: PriorityQueue;

    beforeEach(() => {
        pq = new PriorityQueue();
    });

    test('enqueue adds elements according to their priority', () => {
        pq.enqueue('common cold', 5);
        expect(pq.values[0]).toEqual({ val: 'common cold', priority: 5 });

        pq.enqueue('gunshot wound', 1);
        expect(pq.values[0]).toEqual({ val: 'gunshot wound', priority: 1 });

        pq.enqueue('high fever', 4);
        expect(pq.values.some((node) => node.val === 'high fever' && node.priority === 4)).toBe(
            true,
        );
        expect(pq.values[0]).toEqual({ val: 'gunshot wound', priority: 1 });
    });

    test('dequeue removes and returns the element with the highest priority', () => {
        pq.enqueue('common cold', 5);
        pq.enqueue('gunshot wound', 1);
        pq.enqueue('high fever', 4);
        pq.enqueue('broken arm', 2);
        pq.enqueue('glass in foot', 3);

        const removed = pq.dequeue();
        expect(removed).toEqual({ val: 'gunshot wound', priority: 1 });
        expect(pq.values[0]).toEqual({ val: 'broken arm', priority: 2 });

        const nextRemoved = pq.dequeue();
        expect(nextRemoved).toEqual({ val: 'broken arm', priority: 2 });
        expect(pq.values[0]).toEqual({ val: 'glass in foot', priority: 3 });
    });
    test('maintains the heap structure after elements are removed', () => {
        pq.enqueue('common cold', 5);
        pq.enqueue('gunshot wound', 1);
        pq.enqueue('high fever', 4);
        pq.enqueue('broken arm', 2);
        pq.enqueue('glass in foot', 3);

        pq.dequeue();
        expect(pq.values[0].priority).toBeLessThanOrEqual(pq.values[1]?.priority || Infinity);
        expect(pq.values[0].priority).toBeLessThanOrEqual(pq.values[2]?.priority || Infinity);

        pq.dequeue();
        expect(pq.values[0].priority).toBeLessThanOrEqual(pq.values[1]?.priority || Infinity);
    });
});
