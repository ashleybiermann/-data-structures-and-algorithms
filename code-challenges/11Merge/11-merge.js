'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	traverse() {
		let current = this.head;   // this will be a node eventually
		let counter = 0;
		while (current) {
			counter++;
			console.log(current.value);
			current = current.next;
		}
		return counter;
	}

	insert(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		return this;
  }
  
	append(value) {
		const newNode = new Node(value);
		let current = this.head;

		while (current) {
			if (current.next === null) {
				newNode.next = current.next;
				current.next = newNode;
				return this;
			}
			current = current.next;
		}
		return this;
  }
  
	toString() {
		let current = this.head;
		let string = 'head -> ';

		while (current) {
			string += ` { ${current.value} } -> `;
			current = current.next;
		}
		string += 'X';
		console.log(string);
		return string;
	}
}

const mergeList1 = new LinkedList();
const mergeList2 = new LinkedList();

mergeList1.insert(2);
mergeList1.insert(3);
mergeList1.insert(1);
mergeList1.toString();

mergeList2.insert(4);
mergeList2.insert(9);
mergeList2.insert(5);
mergeList2.toString();

console.log('GOAL head -> {1} -> {5} -> {3} -> {9} -> {2} -> {4} -> {X}');