'use strict';

const t = require('../tree/tree.js');

function treeIntersection(binaryTree1, binaryTree2) {
  let treeOneValues = binaryTree1.preOrder(binaryTree1.root);
  // let treeTwoValues = t.preOrder(binaryTree2);

  console.log(treeOneValues);
}

let binaryTree1 = new t.Tree();
binaryTree1.root = new t.Node(1);
binaryTree1.root.left = new t.Node(7);
binaryTree1.root.left.right = new t.Node(6);
binaryTree1.root.left.right.left = new t.Node(3);
binaryTree1.root.left.right.right = new t.Node(11);
binaryTree1.root.left.left = new t.Node(2);
binaryTree1.root.right = new t.Node(5);
binaryTree1.root.right.left = new t.Node(4);

module.exports = treeIntersection;
