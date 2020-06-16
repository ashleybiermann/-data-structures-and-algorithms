'use strict';

const LinkedList = require('./linked-list.js');

describe('Testing linked-list challenges 06', () => {
  it('Should create an empty linked-list', () => {
    const testList = new LinkedList();
    expect(testList).toEqual( {head: null} );
  });

  it('Should insert into the list at the beginning', () => {
    const testList = new LinkedList();
    expect(testList.insert('beginning')).toEqual({'head': {'next': null, 'value': 'beginning'}});
  });

  it('Should point to the first node', () => {
    const testList = new LinkedList();
    expect(testList.head).toEqual(null);
  });

  it('Can insert multipe nodes', () => {
    const testList = new LinkedList();
    testList.insert('node');
    testList.insert('node again');
    testList.insert('nodey node');
    expect(testList).toEqual({'head': {'next': {'next': {'next': null, 'value': 'node'}, 'value': 'node again'}, 'value': 'nodey node'}});
  });

  it('Returns true when it finds an existing value', () => {
    const testList = new LinkedList();
    testList.insert('node');
    expect(testList.includes('node')).toEqual(true);
  });

  it('Returns false when it looks for a non-existing value', () => {
    const testList = new LinkedList();
    testList.insert('node');
    expect(testList.includes('is it here?')).toEqual(false);
  });
});

describe('Testing linked-list challenges 07', () => {
  it('Should add a node at the end of the list', () => {
    const testList = new LinkedList();
    testList.insert('beginning');
    expect(testList.append('the end')).toEqual({'head': {'next': {
    'next': null, 'value': 'the end'}, 'value': 'beginning'}});
  });

  it('Should add two nodes at the end of the list', () => {
    const testList = new LinkedList();
    testList.insert('beginning');
    testList.append('the fake end');
    expect(testList.append('the end')).toEqual({'head': {'next': {
    'next': { 'next': null, 'value': 'the end'}, 'value': 'the fake end' }, 'value': 'beginning'}});
  });

  it('Should insert a value before a target node', () => {
    const testList = new LinkedList();
    testList.insert('beginning');
    testList.append('the end');
    expect(testList.insertBefore('the end', 'middle')).toEqual({'head': {'next': {'next': {'next': null, 'value': 'the end'}, 'value': 'middle'}, 'value': 'beginning'}});
  });

  it('Should insert a value after a target node', () => {
    const testList = new LinkedList();
    testList.insert('beginning');
    testList.append('the end');
    expect(testList.insertAfter('beginning', 'middle')).toEqual({'head': {'next': {'next': {'next': null, 'value': 'the end'}, 'value': 'middle'}, 'value': 'beginning'}});
  });
});
