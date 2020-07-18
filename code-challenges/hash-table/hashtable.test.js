'use strict';

const HashTable = require('./hashtable.js');

describe('Testing the HashTable class', () => {
  it('Should add a key/value object to the hashtable results', () => {
    let map = new HashTable();
    expect(map.add('Ashley', 'student')).toStrictEqual('Ashley');
  });
  it('Should retrieve a value based on key', () => {
    
    expect();
  });
  it('Should return null for a key that does not exist in the hashtable', () => {
   
    expect();
  });
  it('Should handle a collision within the hashtable', () => {
   
    expect();
  });
  it('Should retrieve a value from a bucket within the hashtable that has a collision', () => {
    
    expect();
  });
  it('Should has a key to an in-range value', () => {
    
    expect();
  });
});
