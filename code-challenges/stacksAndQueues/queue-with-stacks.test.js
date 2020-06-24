'use strict';

const PseudoQueue = require('./queue-with-stacks.js');
const pQ = new PseudoQueue();

describe('Testing PseudoQueue class', () => {
  it('Create a pseudo queue, made up of two empty stacks', () => {
    expect(pQ.stack1.top).toBe(null);
    expect(pQ.stack2.top).toBe(null);
  });
  it('Should accept a value as a parameter and enqueue the value', () => {
    pQ.enqueue('20');
    pQ.enqueue('15');
    pQ.enqueue('10');
    pQ.enqueue('5');
    expect(pQ.toString()).toEqual('top -> [5] -> [10] -> [15] -> [20] -> bottom');
  });
  it('Should dequeue one value from the pseudo front of the queue and return it as the output', () => {
    expect(pQ.dequeue()).toEqual('20');
  });
  it('Should dequeue another value and return the second value put into the queue', () => {
    expect(pQ.dequeue()).toEqual('15');
  })
})
