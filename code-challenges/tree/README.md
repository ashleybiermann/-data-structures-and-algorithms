# Trees

##  Binary Search Tree class

### add & contains
Implmenent `add()` and `contains*()` methods on a binary search tree class

### Approach & Efficiency
- time complexity - O(h), where h is the height of the tree
- space complexity - O(1), since we are not allocating any additional space in a search

### Solution
![whiteboard](./binarytreeadd.jpg)

#### References
- [InitJS](https://initjs.org/implement-a-binary-search-tree-in-javascript-952a44ee7c26) for `add()`


## Find Maximum in Binary Tree
Find the Maximum Value in a Binary Tree

### find-maximum-value
Write an instance method called `findMaximumValue()`, which returns the max value stored in the tree.
  - assume all values are numeric
  - use no built in methods

### Approach & Efficiency
- O(n) - time increases as the size of the tree grows
- O(1) - space, as only one variable is created to hold a number, and is reassigned throughout the function

### Solution
![whiteboard](./binarytreemax.jpg)

## Breadth-First-Traversal in Binary Tree

### breadth-first-traversal
- Write method which takes a Binary Tree as its unique input
- Traverse the input tree using a Breadth-first approach
- Return a list of the values in the tree in the order they were encountered.

### Approach & Efficiency
- O(n) - time, tracks the nodes by putting them in a queue (array), and taking them out, each once
- O(n) - space, creates a results array and a queue (array) to hold the info

### Solution
![whiteboard](./breadthfirsttraversal.jpg)
