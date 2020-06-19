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
		let string = 'head -> ';

		while (current) {
			string += ` { ${current.value} } -> `;
			// console.log(current.value);
			current = current.next;
		}
		string += 'NULL';
		console.log(string);
		return string;
	}

	kntFromTheEnd(k) {
		let current = this.head;
		let a = this.traverse() - k; // destination 
		let b = a - 1;
		let i = 0; // counter to get us there

		while (current) {
			if (b === i) {
				return current.value;
			}
			i++;
			current = current.next;
		}
		return 'Exception';
	}
}

const linkedList = new LinkedList();
const myFirstNode = new Node('Ashley');
const two = new Node(2);
const three = new Node(3);

// linkedList.head = myFirstNode;
// linkedList.head.next = two;
// linkedList.head.next.next = three;

linkedList.insert('2');
linkedList.insert('8');
linkedList.insert('3');
linkedList.insert('1');

// linkedList.includes('Ashley');
// linkedList.insertBefore('Ashley', 'insert before Ashley');
// linkedList.insertAfter('Ashley', 'inserted after Ashley');
// linkedList.append('add to the end please');
linkedList.toString();
linkedList.traverse();

console.log(linkedList.kntFromTheEnd('2'));

module.exports = LinkedList;

// CITATIONS
// Garhett helped me a lot with knthFromTheEnd function logic
// Marlene helped me understand how the console logs vs returns worked in knthFromTheEnd
// resource for includes() method: https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571 
