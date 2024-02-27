import { SinglyLinkedList } from './singlyLinkedList';

describe('SinglyLinkedList', () => {
    let list: SinglyLinkedList;

    beforeEach(() => {
        list = new SinglyLinkedList();
    });

    test('push adds a new node to the end of the list', () => {
        list.push(1);
        expect(list.length).toBe(1);
        expect(list.head?.val).toBe(1);
        expect(list.tail?.val).toBe(1);

        list.push(2);
        expect(list.length).toBe(2);
        expect(list.tail?.val).toBe(2);
    });

    test('pop removes the last node and returns it', () => {
        list.push(1).push(2).push(3);
        const removed = list.pop();
        expect(removed?.val).toBe(3);
        expect(list.length).toBe(2);
        expect(list.tail?.val).toBe(2);
    });

    test('shift removes the first node and returns it', () => {
        list.push(1).push(2);
        const removed = list.shift();
        expect(removed?.val).toBe(1);
        expect(list.length).toBe(1);
        expect(list.head?.val).toBe(2);
    });

    test('unshift adds a new node to the beginning of the list', () => {
        list.unshift(2);
        expect(list.length).toBe(1);
        expect(list.head?.val).toBe(2);

        list.unshift(1);
        expect(list.length).toBe(2);
        expect(list.head?.val).toBe(1);
    });

    test('get retrieves a node by its position in the list', () => {
        list.push(1).push(2).push(3);
        const node = list.get(1);
        expect(node?.val).toBe(2);
    });

    test('set changes the value of a node based on its position', () => {
        list.push(1).push(2).push(3);
        expect(list.set(1, 4)).toBe(true);
        expect(list.get(1)?.val).toBe(4);
    });

    test('insert adds a node at the specified index', () => {
        list.push(1).push(3);
        expect(list.insert(1, 2)).toBe(true);
        expect(list.length).toBe(3);
        expect(list.get(1)?.val).toBe(2);
    });

    test('remove deletes a node at the specified index', () => {
        list.push(1).push(2).push(3);
        const removed = list.remove(1);
        expect(removed?.val).toBe(2);
        expect(list.length).toBe(2);
        expect(list.get(1)?.val).toBe(3);
    });

    test('reverse reverses the list', () => {
        list.push(1).push(2).push(3);
        list.reverse();
        expect(list.head?.val).toBe(3);
        expect(list.tail?.val).toBe(1);
        expect(list.get(1)?.val).toBe(2);
    });
});
