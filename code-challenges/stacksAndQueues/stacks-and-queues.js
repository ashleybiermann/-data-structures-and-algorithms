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
      return 'no stack exists';
    }
  }

  isEmpty() {
    return (this.top === null);
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.front === null) {
      this.front = node;
    } else {      
      this.rear.next = node;
    }
    this.rear = node;
  }

  dequeue() {
    const value = this.front.value;
    this.front = this.front.next;
    return value;
  }

  peek() {
    if (this.front) {
      return this.top.value;
    } else {
      return 'no queue exists';
    }
  }

  isEmpty() {
    return (this.front === null);
  }
}

const oneStack = new Stack();
oneStack.push('friday!');
oneStack.push('thursday');
oneStack.push('Wednesday');
oneStack.push('Tuesday');
oneStack.push('monday');

const oneQueue = new Queue();
oneQueue.enqueue('1');
oneQueue.enqueue('2');
oneQueue.enqueue('3');
oneQueue.dequeue();

// console.log(oneQueue);
console.log(oneStack.peek());

module.exports = {
  Stack,
  Queue
}
