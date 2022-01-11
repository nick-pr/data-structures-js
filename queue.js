class Queue {
    constructor() {
        this.items = [];
    }
    get length() {
        return this.items.length;
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek(){
        return this.items[0]
    }
}

module.exports = { Queue };
