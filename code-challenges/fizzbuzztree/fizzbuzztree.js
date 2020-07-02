'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder(root) {
    console.log(root.value);

    for (let i = 0; i < root.children.length; i++) {
      if (root.children[i] !== null) {
        this.preOrder(root.children[i]);
      }
    }
  }


  fizzBuzzTree(root) {
    let fbtree = new Tree(); 
  
    if (root.value % 3 === 0 && root.value % 5 === 0) {
      fbtree = new Node('FizzBuzz');

    } else if (root.value % 3 === 0){
      fbtree = new Node('Fizz');

    } else if (root.value % 5 === 0) {
      fbtree = new Node('Buzz');

    } else if (root.value % 3 !== 0 && root.value % 5 !== 0) {
      fbtree = new Node(`${root.value}`);
    } 

    for (let i = 0; i < root.children.length; i++) {
      if (root.children[i] !== null) {
        fbtree.children[i] = this.fizzBuzzTree(root.children[i], fbtree.children[i]);
      }
    }
    return fbtree;
  }
}

// BINARY TREE
let kTree = new Tree();
kTree.root = new Node(15);
kTree.root.children[0] = new Node(1);
kTree.root.children[1] = new Node(3);
kTree.root.children[2] = new Node(5);
kTree.root.children[1].children[0] = new Node(4);
kTree.root.children[1].children[1] = new Node(30);
kTree.root.children[2].children[0] = new Node(7);

console.log(kTree.fizzBuzzTree(kTree.root));

module.exports = Tree;
