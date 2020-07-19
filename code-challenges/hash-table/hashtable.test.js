'use strict';

const HashTable = require('./hashtable.js');

describe('Testing the HashTable class', () => {
  it('Should add a key/value object to the hashtable results', () => {
    let map = new HashTable();
    map.add('ashley', 'student');
    expect(map.contains('ashley')).toBe(true);
  });
  it('Should retrieve a value based on key', () => {
    let map = new HashTable();
    expect(map.add('ashley', 'student'));
    expect(map.contains('ashley')).toBe(true);
  });
  it('Should return null for a key that does not exist in the hashtable', () => {
    let map = new HashTable();
    expect(map.get('ashley')).toBe(null);
  });
  it('Should handle a collision within the hashtable', () => {
    //TODO:
    let map = new HashTable();
    // expect(map.add('ashley', 'student'));
    // expect(map.add('ashley', 'student'));
    // expect();
  });
  it('Should retrieve a value from a bucket within the hashtable that has a collision', () => {
    let map = new HashTable();
    //TODO:
    expect(map.add('ashley', 'student'));
    expect(map.add('ashley', 'student'));

    expect(map.contains('ashley')).toBe(true);
  });
});
