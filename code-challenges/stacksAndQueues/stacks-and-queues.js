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
    if(this.front) {
      const value = this.front.value;
      this.front = this.front.next;
      return value;
    } else {
      return 'no nodes to dequeue';
    }
  }

  peek() {
    if (this.front) {
      return this.front.value;
    } else {
      return 'queue is empty';
    }
  }

  isEmpty() {
    return (this.front === null);
  }

  toString() {
    let current = this.front;
    let string = 'front ->';

    while (current) {
      string += ` [${current.value}] `;
      current = current.next;
    }
    string += '<- rear'; 
    console.log(string)
    return string;
  }

  length() {
    let current = this.front;
    let counter = 0;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }
}

module.exports = {
  Stack,
  Queue
}
