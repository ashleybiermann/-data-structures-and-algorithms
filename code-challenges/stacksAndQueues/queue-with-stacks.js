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

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value); 
    return this.stack1;
  }

  // empties out entirety of stack1 and stores it in stack2, pops one off the top of stack2 and returns it
  dequeue() {

    let current = this.stack1.top;
    while (current) {
      this.stack2.push(this.stack1.pop());
      current = current.next;
    }
    // console.log(stack2.toString());
    let output = this.stack2.pop();

    console.log(output);
    return output;
  }

// used to help console log and see outputs
  toString() {
    let current = this.stack1.top;
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

let pseudoQ = new PseudoQueue();
pseudoQ.enqueue('20');
pseudoQ.enqueue('15');
pseudoQ.enqueue('10');
pseudoQ.enqueue('5');
pseudoQ.dequeue(); 
pseudoQ.dequeue();
// pseudoQ.toString();

module.exports = PseudoQueue;
