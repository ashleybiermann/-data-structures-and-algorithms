'use strict';

const leftJoin = require('./left-join.js');
const HashTable = require('../hash-table/hashtable.js');

describe('Testing leftJoin function', () => {
  it('Should return a left-joined output', () => {
    let table1 = new HashTable(1024);
    table1.add('fond', 'enamoured');
    table1.add('outfit', 'garb');

    let table2 = new HashTable(1024);
    table2.add('fond', 'averse');
    table2.add('outfit', 'jam');

    expect(leftJoin(table1, table2)).toStrictEqual([['fond', 'enamoured', 'averse'],
    ['outfit', 'garb', 'jam']]);
  });
  it('Should return null when a value is not found in right table', () => {
    let table1 = new HashTable(1024);
    table1.add('fond', 'enamoured');
    table1.add('outfit', 'garb');

    let table2 = new HashTable(1024);
    table2.add('fond', 'averse');
    table2.add('flow', 'jam');

    expect(leftJoin(table1, table2)).toStrictEqual([['fond', 'enamoured', 'averse'],
    ['outfit', 'garb', null]]);
  });
  it('Should return an empty array when no values exist in left table', () => {
    let table1 = new HashTable(1024);

    let table2 = new HashTable(1024);
    table2.add('fond', 'averse');
    table2.add('flow', 'jam');

    expect(leftJoin(table1, table2)).toStrictEqual([]);
  });
});
