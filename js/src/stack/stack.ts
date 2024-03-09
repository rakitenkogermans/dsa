class MyNode {
    val: unknown;
    next: null | MyNode = null;
    constructor(val: unknown) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    first = null;
    last = null;
    size = 0;

    constructor() {}

    push = (val: unknown) => {
        const newNode = new MyNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    };

    pop = () => {
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

export { Stack };
