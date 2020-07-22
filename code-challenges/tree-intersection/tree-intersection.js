'use strict';

const t = require('../tree/tree.js');

// create a function to take in two binary trees and return the intersections
// traverse first tree and put it's values into an object {key: value} => {100: 100}
// traverse the second tree while checking if the value exists in the base comparision object (from treeOne)
// if match, put in results array
// return the array

function treeIntersection(treeOne, treeTwo) {
  let baseComparison = getValues(treeOne.root);
  let intersections = findIntersections(treeTwo.root, baseComparison);
  return intersections;
}

// like binary tree preOrder
function getValues(root) {
  try {
    let values = {};
    if (root) {
      getValuesHelper(root, values);
    }
    return values;
  }
  catch (err) {
    console.log('An error has occured: ', err);
  }
}

// like binary tree preOrderHelper
function getValuesHelper(root, values) {
  values[root.value] = root.value;

  if (root.left !== null) {
    getValuesHelper(root.left, values);
  }

  if (root.right !== null) {
    getValuesHelper(root.right, values);
  }
}

// like findMaxValue, but needs to recurse
function findIntersections(root, obj) {
  try {
    let results = [];
    if (root !== null) {
      findIntersectionsHelper(root, results, obj);
    }
    return results;
  }
  catch(err) {
    console.log('An error has occured: ', err)
  }
}

// the way to help recurse
function findIntersectionsHelper(root, results, obj) {
  if (root.value === obj[root.value]) {
    results.push(root.value);
  }
  if (root.left) {
    findIntersectionsHelper(root.left, results, obj);
  }
  if (root.right) {
    findIntersectionsHelper(root.right, results, obj);
  }
}


let binaryTree1 = new t.bt();
binaryTree1.root = new t.Node(150);
binaryTree1.root.left = new t.Node(100);
binaryTree1.root.left.left = new t.Node(75);
binaryTree1.root.left.right = new t.Node(160);
binaryTree1.root.left.right.left = new t.Node(125);
binaryTree1.root.left.right.right = new t.Node(175);
binaryTree1.root.right = new t.Node(250);
binaryTree1.root.right.left = new t.Node(200);
binaryTree1.root.right.right = new t.Node(350);
binaryTree1.root.right.right.right = new t.Node(500);
binaryTree1.root.right.right.left = new t.Node(300);


let binaryTree2 = new t.bt();
binaryTree2.root = new t.Node(42);
binaryTree2.root.left = new t.Node(100);
binaryTree2.root.left.left = new t.Node(15);
binaryTree2.root.left.right = new t.Node(160);
binaryTree2.root.left.right.left = new t.Node(125);
binaryTree2.root.left.right.right = new t.Node(175);
binaryTree2.root.right = new t.Node(600);
binaryTree2.root.right.left = new t.Node(200);
binaryTree2.root.right.right = new t.Node(350);
binaryTree2.root.right.right.right = new t.Node(500);
binaryTree2.root.right.right.left = new t.Node(4);

// console.log(binaryTree1);
console.log(treeIntersection(binaryTree1, binaryTree2));

module.exports = treeIntersection;
