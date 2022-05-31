const TABLE_SIZE = 31;

class HashTable {
    static hash(key) {
        let hash = 13;
        for (let i = 0; i < key.length; i++) {
            hash *= 31 + key.charCodeAt(i);
        }
        return hash % TABLE_SIZE;
    }
    constructor() {
        this.table = new Array(TABLE_SIZE);
    }

    get(key) {
        const hash = HashTable.hash(key);
        if (!this.table[hash]) return;

        if (this.table[hash].length > 1) {
            return this.table[hash].find(pair => pair[0] === key)[1];
        }

        return this.table[hash][0][1];
    }
    set(key, value) {
        const hash = HashTable.hash(key);
        if (!this.table[hash]) {
            this.table[hash] = [[key, value]];
        } else {
            this.table.hash.push([key, value]);
        }
    }
}

const hashtable = new HashTable();

hashtable.set('hello', 'there');
hashtable.set('test', 120);
hashtable.set('apples', false);
console.log('hello: ' + hashtable.get('hello'));
console.log('test: ' + hashtable.get('test'));
console.log('apples: ' + hashtable.get('apples'));
