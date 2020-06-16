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

		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}

	insert(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		return this;
	}
// .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node

	insertBefore(value, newVal) {
		const newNode = new Node(newVal);
		let current = this.head;
		//target node is NEXT, not current
		while(current) {
			if(current.next.value === value) {
				newNode.next = current.next;
				current.next = newNode;
				return this;
			}
			current = current.next;
		}
		return this;
	}

	insertAfter(value, newVal) {
		const newNode = new Node(newVal);
		// newVal then value
		let current = this.head;
		
		while(current) {
			if (current.value === value) {
				newNode.next = current.next;
				current.next = newNode;
				return this;
			}
			current = current.next;
		}
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

	includes(query) {
		let queryExists = false;
		let current = this.head;

		while (current) {
			if (query === current.value) {
				queryExists = true;
			}
			current = current.next;
		}
		console.log(queryExists);
		return queryExists;
	}

	toString() {
		let current = this.head;
		let string = '';

		while (current) {
			string += ` { ${current.value} } -> `;
			// console.log(current.value);
			current = current.next;
		}
		string += 'NULL';

		return string;
	}
}

const linkedList = new LinkedList();
const myFirstNode = new Node('Ashley');
const two = new Node(2);
const three = new Node(3);

linkedList.head = myFirstNode;
linkedList.head.next = two;
linkedList.head.next.next = three;

linkedList.insert('added this one!');
linkedList.insert('Ashley 2');
linkedList.insert('another!');
linkedList.insert('this is the beginning');

linkedList.includes('Ashley');
linkedList.insertBefore('Ashley', 'insert before Ashley');
linkedList.insertAfter('Ashley', 'inserted after Ashley');
linkedList.append('add to the end please');
linkedList.traverse();
linkedList.toString();

const testList = new LinkedList();
testList.insert('beginning');
console.log(testList);

module.exports = LinkedList;

// resource for includes() method: https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571 