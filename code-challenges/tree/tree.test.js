'use strict';

const bst = require('./tree');

describe('Testing Binary Search Tree', () => {
  it('Should instantiate an empty tree', () => {
    let tree = new bst();
    expect(tree.root).toBe(null);
  });
  it('Should successfully instantiate a tree with a single root node', () => {
    let tree = new bst();
    tree.add(50);
    expect(tree.root.value).toBe(50)
    expect(tree.root.left).toBe(null)
    expect(tree.root.right).toBe(null)
  });
  it('Should successfully add a left child and right child to a single root node', () => {
    let tree = new bst();
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
});

