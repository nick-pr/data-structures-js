import Node from './node.js';

class BinarySearchTree {
    constructor(node) {
        this.root = node;
    }
    /** Given a key and value, will insert that key and it's associated value in the tree.
     * Utilizes recursion to traverse the tree.*/
    insert(key, value) {
        // 1: If no root, set root and return.
        const newNode = new Node(key, value);
        if (!this.root) return (this.root = newNode);

        // 2: Recursive traversal function.
        const traverse = (node) => {
            // 2A: Returns if key's are equal. We don't want duplicates in the tree.
            if (newNode.key === node.key) return;

            // 2B: Right Case. If there is no node at that spot, set node and return. Job done.
            // ### If there is a node at that spot, call traverse and start again
            if (newNode.key > node.key) {
                if (!node.right) return (node.right = newNode);
                traverse(node.right);
            }

            //2C: Same thing as right case but with the left.
            if (newNode.key < node.key) {
                if (!node.left) return (node.left = newNode);
                traverse(node.left);
            }
        };
        // 3: Call recursive traversal function.
        traverse(this.root);
    }
    /** Given a key, will search the tree and return the value at that key.
     * Utilizes recursion to traverse the tree.*/
    search(key) {
        // 1: Recursive traversal function definition.
        const traverse = (node) => {
            // 1A: Check if we found our desired key
            if (node.key === key) return node.value;

            // 1B: Left Case.
            if (key < node.key) return traverse(node.left);

            // 1C: Right Case
            if (key > node.key) return traverse(node.right);
        };
        // 2: Call the recursize traversal function.
        return traverse(this.root);
    }
    /** The max key of the tree. */
    get max() {
        const traverse = (node) => {
            if (!node.right) return node.key;
            return traverse(node.right);
        };
        return traverse(this.root);
    }
    /** The min key of the tree. */
    get min() {
        const traverse = (node) => {
            if (!node.left) return node.key;
            return traverse(node.left);
        };
        return traverse(this.root);
    }
    /** Returns a sorted array,least to greatest, of all keys in the tree. */
    toSortedArray() {
        // 1: Recursive function definition.
        const traverse = (node, result) => {
            // 1A: If left node exists, traverse left.
            if (node.left) traverse(node.left, result);

            // 1B: If no left, push current node's key unto result array
            result.push(node.key);

            // 1C: If right node exists, traverse right in it's tree.
            if (node.right) traverse(node.right, result);

            // 1D: Return result array for each recursive call.
            return result;
        };
        // 2: Calling traverse on root node and passing in emtpy array.
        return traverse(this.root, []);
    }
}

const bst = new BinarySearchTree();
bst.insert(5, 'hello');
bst.insert(4, 'bar');
bst.insert(3, 'foo');
bst.insert(10, 'cat');
bst.insert(2, 'cat');
console.log(bst.toSortedArray());
