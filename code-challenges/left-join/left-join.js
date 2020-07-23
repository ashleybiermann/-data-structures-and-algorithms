'use strict';

const HashTable = require('../hash-table/hashtable.js');

// From the left table, add each of its keys and values to a data structure - DID THIS IN THE HASHTABLE FILE
// For each key in the left table, check the right table for a matching key
// if there is a match, add the value of the right table to the data structure
// if no match, add 'null'

function leftJoin(leftTable, rightTable) {
  let output = [];

  for (let i = 0; i < leftTable.keysArr.length; i++) {
    let leftKey = leftTable.keysArr[i];
    let leftValue = leftTable.get(leftTable.keysArr[i]);
    let rightKey = rightTable.keysObj[leftTable.keysArr[i]]; // a MATCHING right key to the left key

    //compare keys
    if (rightKey) { // if there is a matching right key

      let outputLine = [leftKey, leftValue, rightKey];

      output.push(outputLine);
    }
    if (!rightKey) { // if there is NOT a matching right key

      let outputLine = [leftKey, leftValue, null];

      output.push(outputLine);
    }
  }

  return output;
}

let table1 = new HashTable(1024);
table1.add('fond', 'enamoured');
table1.add('outfit', 'garb');

let table2 = new HashTable(1024);
table2.add('fond', 'averse');
table2.add('flow', 'jam');

console.log(leftJoin(table1, table2));

module.exports = leftJoin;