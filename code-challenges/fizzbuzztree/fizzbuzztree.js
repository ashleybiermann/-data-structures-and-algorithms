'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder(root) {
    console.log(root.value);

    if (root.left !== null) {
      this.preOrder(root.left)
    }
    if (root.right !== null) {
      this.preOrder(root.right);
    }
  }


  fizzBuzzTree(root, outputArray) {
    let fbtree = new Tree(); 
    outputArray = [];

    console.log(root.value);
  
    if (root.value % 3 !== 0 && root.value % 5 !== 0) {
      outputArray.push((root.value).toString() + ' ');
    } else if (root.value % 3 === 0 && root.value % 5 === 0) {
      outputArray.push('FizzBuzz ');
      // node = new Node(root.value);

    } else if (root.value % 3 === 0){
      outputArray.push('Fizz ');
    } else if (root.value % 5 === 0) {
      outputArray.push('Buzz ');
    } 

    if (root.left !== null) {
      outputArray += this.fizzBuzzTree(root.left, outputArray);
    }
    if (root.right !== null) {
      outputArray += this.fizzBuzzTree(root.right, outputArray);
    }
    console.log(outputArray);
    return outputArray;
  }
}


// BINARY TREE
let bT = new Tree();
bT.root = new Node(1);
bT.root.left = new Node(3);
bT.root.left.right = new Node(7);
bT.root.left.right.left = new Node(4);
bT.root.left.right.right = new Node(10);
bT.root.left.left = new Node(15);
bT.root.right = new Node(20);
bT.root.right.right = new Node(16);
bT.root.right.right.left = new Node(33);

// console.log(bT.preOrder(bT.root));
console.log(bT.fizzBuzzTree(bT.root, []));


module.exports = Tree;