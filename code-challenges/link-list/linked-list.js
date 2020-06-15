'use strict';

class LinkedList {
	constructor() {
		this.head = null;
	}
	
	traverse() {
		let current = this.head;   // this will be a node eventually
		
		while(current) {
			console.log(current.value); 
			current = current.next;  
		}
	}
	
	insert(value) {
		// adds a new Node with (value) to the head LinkedList.head 
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	
	includes(query) {
		// accepts a value, checks to see if it exists as the value of any node in the list, and returns a boolean
		let queryExists = false;
		
		let current = this.head; 
		
		while(current) {
			if (query === current.value) {
				queryExists = true;
			}
			current = current.next;  
		}
		console.log(queryExists);
		return queryExists;
	}
	
	toString() {
		// takes in no args and returns a string representing all values in the linked list
		let current = this.head;
		
		let string = ''; 
		
		while(current) {
			string += ` { ${current.value} } -> `;
			
			// console.log(current.value);
			current = current.next; 
		}
		
		string += 'NULL';
		console.log(string);
		
		return string;
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
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
linkedList.insert('so much fun, weeeeeee');

linkedList.includes('Ashley');

linkedList.traverse();

linkedList.toString();

// resource for includes() method: https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571 