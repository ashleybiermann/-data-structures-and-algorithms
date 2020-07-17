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
    if (!this.bucketss[hash]) {
      this.buckets[hash] = new LinkedList();
    }
    // this is important based on the languages capabilities. This, right here, is something only JS can do. Other languages can achieve a similar task, but it'll be a different process
    let entry = {[key]: value};
    //dynamically add it to our Linked List
    this.buckets[hash].add(entry);
  }

  get() {

  }

  contains() {

  }
}

let map = new HashTable(1024);
console.log(map.hash('Ashley'));

map.add('Ashley', 'student');

map.buckets.forEach((bueckt, index) => {
  console.log(index, bucket.values());
});