class MyNode {
    val: unknown;
    next: null | MyNode = null;
    constructor(val: unknown) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    first = null;
    last = null;
    size = 0;

    constructor() {}

    enqueue = (val: unknown) => {
        const newNode = new MyNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    };

    dequeue = () => {
        if (!this.first) return null;
        const temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    };
}

export { Queue };
