import { BinarySearchTree } from './binarySearchTree';

describe('BinarySearchTree', () => {
    let bst: BinarySearchTree;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    test('insert adds elements correctly', () => {
        bst.insert(5);
        expect(bst.root.val).toBe(5);

        bst.insert(2);
        bst.insert(8);
        expect(bst.root.left.val).toBe(2);
        expect(bst.root.right.val).toBe(8);

        bst.insert(1);
        bst.insert(3);
        expect(bst.root.left.left.val).toBe(1);
        expect(bst.root.left.right.val).toBe(3);
    });

    test('find returns the correct node', () => {
        bst.insert(5).insert(2).insert(8).insert(1).insert(3);
        const found = bst.find(3);

        if (!found) {
            throw new Error('Node not found');
        }

        expect(found.val).toBe(3);
        expect(found.left).toBeNull();
        expect(found.right).toBeNull();

        const notFound = bst.find(99);
        expect(notFound).toBeUndefined();
    });

    test('contains returns true for existing values', () => {
        bst.insert(5).insert(2).insert(8).insert(1).insert(3);
        expect(bst.contains(3)).toBe(true);
        expect(bst.contains(5)).toBe(true);
        expect(bst.contains(8)).toBe(true);
    });

    test('contains returns false for non-existing values', () => {
        bst.insert(5).insert(2).insert(8).insert(1).insert(3);
        expect(bst.contains(0)).toBe(false);
        expect(bst.contains(99)).toBe(false);
    });

    test('insert does not add duplicate values', () => {
        bst.insert(5).insert(2).insert(5);
        expect(bst.root.val).toBe(5);
        expect(bst.root.left.val).toBe(2);
        expect(bst.root.right).toBeNull();
        expect(bst.root.left.left).toBeNull();
        expect(bst.root.left.right).toBeNull();
    });
});

describe('BinarySearchTree Traversal Methods', () => {
    let bst: BinarySearchTree;

    beforeEach(() => {
        bst = new BinarySearchTree();
        bst.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);
    });

    test('BFS method correctly traverses the tree', () => {
        expect(bst.BFS()).toEqual([10, 6, 15, 3, 8, 20]);
    });

    test('DFSPreOrder method correctly traverses the tree', () => {
        expect(bst.DFSPreOrder()).toEqual([10, 6, 3, 8, 15, 20]);
    });

    test('DFSPostOrder method correctly traverses the tree', () => {
        expect(bst.DFSPostOrder()).toEqual([3, 8, 6, 20, 15, 10]);
    });

    test('DFSInOrder method correctly traverses the tree', () => {
        expect(bst.DFSInOrder()).toEqual([3, 6, 8, 10, 15, 20]);
    });
});
