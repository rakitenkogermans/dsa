class MyNode {
    val: unknown;
    next: null | MyNode = null;
    prev: null | MyNode = null;
    constructor(val: unknown) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };

    pop = () => {
        if (!this.head) return undefined;
        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    };

    shift = () => {
        if (!this.head) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    };

    unshift = (val: unknown) => {
        const newNode = new MyNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    };

    get = (index: number) => {
        if (index < 0 || index >= this.length) return undefined;
        const fromBeginnig = index <= this.length / 2;
        const idx = fromBeginnig ? index : this.length - 1 - index;
        let counter = 0;
        let current = fromBeginnig ? this.head : this.tail;
        while (counter !== idx) {
            if (fromBeginnig) {
                current = current.next;
            } else {
                current = current.prev;
            }
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
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    };

    remove = (index: number) => {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        const removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    };

    reverse = () => {
        let currentNode = this.head;
        this.tail = currentNode;

        while (currentNode !== null) {
            const prev = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = prev;

            if (currentNode.prev) {
                currentNode = currentNode.prev;
            } else {
                this.head = currentNode;
                break;
            }
        }

        return this;
    };
}

export { DoublyLinkedList };
