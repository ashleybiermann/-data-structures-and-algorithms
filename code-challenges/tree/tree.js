class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(k) {
    // make a new node for adding later ...
    const newNode = new Node(k);
    // check if a root even exists
    if (!this.root) {
      this.root = newNode;
      return;
    }

    function recurse(currentNode) {
      if (newNode.value < currentNode.value && currentNode.left === null) {
        currentNode.left = newNode; // Adds the node!
      } else if (newNode.value < currentNode.value) {
        recurse(currentNode.left); // travel down the tree, go again, using this node as the sub root
      } else if (newNode.value > currentNode.value && currentNode.right === null) {
        currentNode.right = newNode; // Adds the node!
      } else if (newNode.value > currentNode.value) {
        recurse(currentNode.right); // travel down the tree, go again
      }
    }
    recurse(this.root); // call the recurse helper function to get it started
  }

  contains(k) {
    // if there's not even a root, the value is not here
    if (!this.root) {
      return false;
    }

    function recurse(currentNode) {
      if (!currentNode) {
        return false; // if you got to leaf, and it wasn't there, it's false. It wouldn't be anywhere else
      } else if (currentNode.value === k) {
        return true; // winner!
      } else if (k < currentNode.value) {
        return recurse(currentNode.left); // if it's less, go left
      } else {
        return recurse(currentNode.right); // wasn't left, other option is right
      }
    }
    return recurse(this.root);
  }
}

let bSTree = new BinarySearchTree();

bSTree.add(25);
bSTree.add(67);
bSTree.add(43);
bSTree.add(3);
bSTree.add(86);

console.log(bSTree.contains(86));

console.log(bSTree);

module.exports = BinarySearchTree;
