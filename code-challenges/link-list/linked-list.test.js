'use strict';

const LinkedList = require('./linked-list.js');

// 2 can insert into list
// 3 head points to first node
// 4 can insert multiple nodes
// 5 will return true when finding a value that exists in the list
// 6 will return false when searching for a value that doesn't exist
// can return a collection of all values that exist

// 1 Can successfully add a node to the end of the linked list
// 2 Can successfully add multiple nodes to the end of a linked list
// 3 Can successfully insert a node before a node located i the middle of a linked list
// Can successfully insert a node before the first node of a linked list
// 4 Can successfully insert after a node in the middle of the linked list
// 5 Can successfully insert a node after the last node of the linked list

describe('Testing linked-list challenges', () => {
  it('Should create an empty linked-list', () => {
    const testList = new LinkedList();
    console.log(testList);
    expect(testList).toEqual( {head: null} );
  });
});
