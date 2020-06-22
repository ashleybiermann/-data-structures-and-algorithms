/*Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.
*/

'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return 'stack is empty';
    }
  }

  isEmpty() {
    return (this.top === null);
  }

  toString() {

    let current = this.top;
    let string = 'top -> ';

    while (current) {
      string += `[${current.value}] -> `;
      current = current.next;
    }
    string += 'bottom';
    console.log(string);
    return string;
  }
}

class PseudoQueue extends Stack {

  enqueue(value) {
    this.push(value);
  }

  // empties out entirety of stack1 and stores it in stack2, pops one off the top of stack2 and returns it
  dequeue() {
    let stack2 = new PseudoQueue();

    let current = this.top;
    while (current) {
      stack2.push(this.pop());
      current = current.next;
    }
    // console.log(stack2.toString());
    let output = stack2.pop();
    console.log(output);
    return output;
  }
}

let stack1 = new PseudoQueue();
stack1.enqueue('20');
stack1.enqueue('15');
stack1.enqueue('10');
stack1.enqueue('5');
stack1.dequeue(); 
// stack1.toString();

module.exports = PseudoQueue;
