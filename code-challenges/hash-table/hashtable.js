'use strict';

class HashTable {

  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let charArray = key.split('');
    // return to me the ascii code value at the index of string
    let hashSum = charArray.reduce((total, char) => {
      return total + char.charCodeAt(0)
    }, 0) * 599;
    let HashIndex = hashSum % this.size;
    return HashIndex;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
    }
    // this is important based on the languages capabilities. This, right here, is something only JS can do. Other languages can achieve a similar task, but it'll be a different process
    let entry = { [key]: value };
    //dynamically add it to our Linked List
    this.buckets[hash].add(entry);
  }

  get(key) {
    let bucket = this.buckets[this.hash(key)];
    if (!bucket) {
      return null;
    }
    let value = bucket.find(key)
    return value;
  }

  contains(key) {
    let bucket = this.buckets[this.hash(key)];
    if (!bucket) {
      return false;
    }
    let value = bucket.find(key)
    if (value) {
      return true
    };
  }
}
// return Boolean(this.buckets[this.hash(key)]);

/*
  Node and Linked List classes for use within hash structures
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  find(key) {
    let value = undefined;
    let current = this.head;
    let objKey = Object.keys(current.value)[0];

    while (current) {
      if (key === objKey) {
        value = Object.values(current.value).toString();
      }
      current = current.next;
    }
    return value;
  }
}

let map = new HashTable(1024);
map.add('Ashley', 'student');
map.add('SecondPerson', 'student');

map.buckets.forEach((bucket, index) => {
  // console.log(index, bucket.values());
});

// console.log(map.contains('Ashley'));
// console.log(map.contains('Maggie'));

module.exports = HashTable;
