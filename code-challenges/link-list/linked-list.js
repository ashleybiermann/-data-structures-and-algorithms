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

linkedList.traverse();