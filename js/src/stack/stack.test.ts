import { Stack } from './stack';

describe('Stack', () => {
    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('push adds a new node to the stack', () => {
        expect(stack.push(1)).toBe(1);
        expect(stack.push(2)).toBe(2);
        expect(stack.size).toBe(2);
        expect(stack.first.val).toBe(2);
        expect(stack.last.val).toBe(1);
    });

    test('pop removes the top node from the stack', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.size).toBe(1);
        expect(stack.pop()).toBe(1);
        expect(stack.size).toBe(0);
    });

    test('pop returns null on an empty stack', () => {
        expect(stack.pop()).toBe(null);
    });

    test('maintains order of items', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBe(null);
    });

    test('correctly updates the first and last properties', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.first.val).toBe(2);
        expect(stack.last.val).toBe(1);

        stack.pop();
        expect(stack.first.val).toBe(1);
        expect(stack.last.val).toBe(1);

        stack.pop();
        expect(stack.first).toBe(null);
        expect(stack.last).toBe(null);
    });
});
