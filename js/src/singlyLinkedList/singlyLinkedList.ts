class MyNode {
    val: unknown;
    next: null | MyNode = null;
    constructor(val: unknown) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    head = null;
    tail = null;
    length = 0;

    constructor() {}

    push = (val: unknown) => {
        const newNode = new MyNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };

    pop = () => {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    };

    shift = () => {
        if (!this.head) return undefined;
        const currHead = this.head;
        this.head = currHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currHead;
    };

    unshift = (val: unknown) => {
        const newNode = new MyNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    };

    get = (index: number) => {
        if (index < 0 || index >= this.length) return undefined;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    };

    set = (index: number, value: unknown) => {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    };

    insert = (index: number, value: unknown) => {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        const newNode = new MyNode(value);
        const prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    };

    remove = (index: number) => {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return !!this.pop();
        if (index === 0) return !!this.shift();

        const prev = this.get(index - 1);
        const removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    };

    reverse = () => {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    };
}

export { SinglyLinkedList };
