class Stack {
    constructor() {
        this.height = 0;
        this.items = {};
    }
    push(item) {
        this.height++;
        this.items[this.height] = item;
    }
    peek() {
        return this.items[this.height];
    }
    pop() {
        const popped = this.peek();
        delete this.items[this.height];
        this.height--;
        return popped;
    }
    size(){
        return this.height
    }
}

module.exports = {Stack};
