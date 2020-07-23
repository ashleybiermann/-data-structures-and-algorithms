'use strict';

const HashTable = require('../hash-table/hashtable.js');

// From the left table, add each of its keys and values to a data structure
// For each key in the left table, check the right table for a matching key
    // if there is a match, add the value of the right table to the data structure
    // if no match, add 'null'

function leftJoin (leftTable, rightTable) {

  let leftKVpairs = {};




}

let table1 = new HashTable(1024);
table1.add('fond', 'enamoured');
table1.add('outfit', 'garb');

let table2 = new HashTable(1024);
table2.add('fond', 'averse');
table2.add('flow', 'jam');

// console.log(table1.get());
// console.log(table2);

module.exports = leftJoin;