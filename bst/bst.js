import Node from './node.js';

class BinarySearchTree {
    constructor(node) {
        this.root = node;
    }

    insert(key, value) {
        const newNode = new Node(key, value);
        if (!this.root) return (this.root = newNode);

        const traverse = (node) => {
            if (newNode.key === node.key) return;
            if (newNode.key > node.key) {
                if (!node.right) return (node.right = newNode);
                traverse(node.right);
            }
            if (newNode.key < node.key) {
                if (!node.left) return (node.left = newNode);
                traverse(node.left);
            }
        };
        traverse(this.root);
    }
}

const bst = new BinarySearchTree();
bst.insert(5, 'hello');
bst.insert(4, 'hello');
bst.insert(3, 'hello');
bst.insert(10, 'hello');
console.log(bst);
