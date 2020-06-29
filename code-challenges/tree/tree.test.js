'use strict';

const trees = require('./tree');

describe('Testing Binary Search Tree class', () => {
  it('Should instantiate an empty tree', () => {
    let tree = new trees.bst();
    expect(tree.root).toBe(null);
  });
  it('Should successfully instantiate a tree with a single root node', () => {
    let tree = new trees.bst();
    tree.add(50);
    expect(tree.root.value).toBe(50)
    expect(tree.root.left).toBe(null)
    expect(tree.root.right).toBe(null)
  });
  it('Should successfully add a left child and right child to a single root node', () => {
    let tree = new trees.bst();
    tree.add(50);
    tree.add(25);
    tree.add(75);
    expect(tree.root.value).toBe(50);
    expect(tree.root.left.value).toBe(25);
    expect(tree.root.right.value).toBe(75);
  });
  // it('Should successfully return a collection from a preorder traversal', () => {
  //   let tree = new bst();
  //   tree.add(50);
  //   tree.add(25);
  //   tree.add(75);
  //   tree.add(5);
  //   tree.add(90);
  //   expect().toBe();
  // });
  // it('Should successfully return a collection from an inorder traversal', () => {

  // });
  // it('Should successfully return a collection from a postorder traversal', () => {

  // });
  it('Should return the maximum value in a binary search tree', () => {
    let bT = new trees.bt();
    bT.root = new trees.Node(1);
    bT.root.left = new trees.Node(7);
    bT.root.left.right = new trees.Node(6);
    bT.root.left.right.left = new trees.Node(5);
    bT.root.left.right.right = new trees.Node(11);
    bT.root.left.left = new trees.Node(2);
    bT.root.right = new trees.Node(5);
    bT.root.right.left = new trees.Node(4);
    expect(bT.findMaxValue(bT.root, 0)).toEqual(11);
  });
  it('Should let the user know that the tree is empty', () => {
    let bT2 = new trees.bt();
    expect(bT2.findMaxValue(bT2.root, 0)).toEqual('this is not a tree');
  });
});

