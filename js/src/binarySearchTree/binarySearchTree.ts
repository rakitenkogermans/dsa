class MyNode {
    val: unknown;
    left: null | MyNode = null;
    right: null | MyNode = null;
    constructor(val: unknown) {
        this.val = val;
    }
}

class BinarySearchTree {
    root: null | MyNode = null;

    constructor() {}

    insert = (value: unknown) => {
        const newNode = new MyNode(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.val) return undefined;
            if (value < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            if (value > current.val) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    };

    find = (value: unknown) => {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.val) {
                current = current.left;
                continue;
            }
            if (value > current.val) {
                current = current.right;
                continue;
            }
            found = true;
        }
        if (!found) return undefined;
        return current;
    };

    contains = (value: unknown) => {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        while (current) {
            if (value < current.val) {
                current = current.left;
                continue;
            }
            if (value > current.val) {
                current = current.right;
                continue;
            }
            return true;
        }
        return false;
    };

    BFS = () => {
        let node = this.root;
        const data = [];
        const queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    };

    DFSPreOrder = () => {
        const data = [];
        const current = this.root;
        const traverse = (node: MyNode) => {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };
        traverse(current);
        return data;
    };

    DFSPostOrder = () => {
        const data = [];
        const current = this.root;
        const traverse = (node: MyNode) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        };
        traverse(current);
        return data;
    };

    DFSInOrder = () => {
        const data = [];
        const current = this.root;
        const traverse = (node: MyNode) => {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        };
        traverse(current);
        return data;
    };
}

export { BinarySearchTree };
