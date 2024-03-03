import { DoublyLinkedList } from './doublyLinkedList';

describe('DoublyLinkedList', () => {
    let dll: DoublyLinkedList;

    beforeEach(() => {
        dll = new DoublyLinkedList();
    });

    test('push appends element to the list', () => {
        dll.push(5);
        expect(dll.length).toBe(1);
        expect(dll.head.val).toBe(5);
        expect(dll.tail.val).toBe(5);

        dll.push(10);
        expect(dll.length).toBe(2);
        expect(dll.tail.val).toBe(10);
        expect(dll.head.next.val).toBe(10);
        expect(dll.tail.prev.val).toBe(5);
    });

    test('pop removes the last element from the list', () => {
        dll.push(5).push(10);
        const removed = dll.pop();
        expect(removed.val).toBe(10);
        expect(dll.length).toBe(1);
        expect(dll.tail.val).toBe(5);

        dll.pop();
        expect(dll.length).toBe(0);
        expect(dll.head).toBeNull();
        expect(dll.tail).toBeNull();
    });

    test('shift removes the first element from the list', () => {
        dll.push(5).push(10);
        const removed = dll.shift();
        expect(removed.val).toBe(5);
        expect(dll.length).toBe(1);
        expect(dll.head.val).toBe(10);

        dll.shift();
        expect(dll.length).toBe(0);
        expect(dll.head).toBeNull();
    });

    test('unshift adds an element to the beginning of the list', () => {
        dll.unshift(10);
        expect(dll.length).toBe(1);
        expect(dll.head.val).toBe(10);
        expect(dll.tail.val).toBe(10);

        dll.unshift(5);
        expect(dll.length).toBe(2);
        expect(dll.head.val).toBe(5);
        expect(dll.head.next.val).toBe(10);
    });

    test('get retrieves a node by its position in the list', () => {
        dll.push(5).push(10).push(15);
        const node = dll.get(1);
        expect(node.val).toBe(10);
    });

    test('set updates a node value at a specific position', () => {
        dll.push(5).push(10).push(15);
        dll.set(1, 100);
        expect(dll.get(1).val).toBe(100);
    });

    test('insert adds a node at a specific position', () => {
        dll.push(5).push(15);
        dll.insert(1, 10);
        expect(dll.length).toBe(3);
        expect(dll.get(1).val).toBe(10);
    });

    test('remove deletes a node at a specific position', () => {
        dll.push(5).push(10).push(15);
        const removed = dll.remove(1);
        expect(removed.val).toBe(10);
        expect(dll.length).toBe(2);
        expect(dll.get(1).val).toBe(15);
    });

    test('reverse reverses the list', () => {
        dll.push(5).push(10).push(15);
        dll.reverse();
        expect(dll.head.val).toBe(15);
        expect(dll.head.next.val).toBe(10);
        expect(dll.tail.val).toBe(5);
    });
});
