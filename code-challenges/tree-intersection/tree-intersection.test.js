'use strict';

const t = require('../tree/tree.js');
const file = require('./tree-intersection.js');

let binaryTree2 = new t.bt();
binaryTree2.root = new t.Node(42);
binaryTree2.root.left = new t.Node(100);
binaryTree2.root.left.left = new t.Node(15);
binaryTree2.root.left.right = new t.Node(160);

let binaryTree1 = new t.bt();
binaryTree1.root = new t.Node(150);
binaryTree1.root.left = new t.Node(100);
binaryTree1.root.left.left = new t.Node(75);
binaryTree1.root.left.right = new t.Node(160);

describe('Testing treeIntersection functions', () => {
  it('when getValues() is called, it should return an object of key value pairs, both containing the value of the node', () => {
    expect(file.getValues(binaryTree1.root)).toStrictEqual({"100": 100, "150": 150, "160": 160, "75": 75});
  });
  it('When treeIntersection() is called, it should return a set of values, in an array, whereas each value occurs in both trees', () => {
    expect(file.treeIntersection(binaryTree1, binaryTree2)).toStrictEqual([100, 160]);
  });
  it('Should throw an error if no root value is passed into getValues', () => {
    expect(file.getValues()).toEqual({});
  });
  it('Should throw an error if no root value is passed into findIntersection', () => {
    expect(file.findIntersections()).toBe(undefined);
  });
});
