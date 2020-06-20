'use strict';

const test = require('./stacks-and-queues.js');
const testStack = new test.Stack();
const emptyStack = new test.Stack();
const testQueue = new test.Queue();
const newQueue = new test.Queue();

describe('Testing Stack class', () => {
  it('Should add a node to the front of a stack', () => {
    testStack.push('value');
    expect(testStack.toString()).toEqual('top -> [value] -> bottom');
  });
  it('Should push 2 nodes into a stack', () => {
    testStack.push('another!');
    expect(testStack.toString()).toEqual('top -> [another!] -> [value] -> bottom');
  });
  it('Should pop one off the top', () => {
    testStack.pop();
    expect(testStack.toString()).toEqual('top -> [value] -> bottom');
  });
  it('Should empty a stack after multiple pops', () => {
    testStack.pop();
    expect(testStack.toString()).toEqual('top -> bottom');
  });
  it('Should peek at the top value of the stack', () => {
    testStack.push('don\'t look!');
    testStack.push('peek at me!');
    expect(testStack.peek()).toEqual('peek at me!');
  });
  it('Can instantiate an empty stack', () => {
    expect(emptyStack.top).toEqual(null);
  });
  it('Raises an exception when peeking on an empty stack', () => {
    expect(emptyStack.peek()).toEqual('stack is empty');
  });
});

describe('Testing Queue class', () => {
  it('Should enqueue a value to the queue', () => {
    testQueue.enqueue('front value');
    expect(testQueue.front.value).toEqual('front value');
  });
  it('Should enqueue multiple values', () => {
    testQueue.enqueue('second value');
    expect(testQueue.length()).toEqual(2);
  });
  // Can successfully dequeue out of a queue the expected value
  it('Should dequeue the front value', () => {
    testQueue.dequeue();
    expect(testQueue.length()).toEqual(1);
  });
  it('Should peek into the queue and see the front', () => {
    testQueue.enqueue('not me');
    expect(testQueue.peek()).toEqual('second value');
  });
  it('Should empty the queue', () => {
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.length()).toEqual(0);
  });
  it('Should instantiate and empty queue', () => {
    expect(newQueue);
  });
  it('Should raise exception', () => {
    expect(newQueue.peek()).toEqual('queue is empty');
    expect(newQueue.dequeue()).toEqual('no nodes to dequeue');
  });
});
