# Linked List Code Challenges

##  Singly Linked Lists

### Challenge 
- Within LinkedList class nclude a head property, and when instantiated, will create a blank list
- Define methods: insert( ) __ includes( ) __ toString( )

### Approach & Efficiency
- Create the head to be null in the LinkedList constructor
- insert( ) - create a new node, point it at the head, make itself the new head
- includes ( ) - travsere the list, if value is found, flip indicator to true
- toString ( ) - traverse the list, adding each value to a string variable 

### Solution
![Whiteboard for Class05](/link-list/singlylinkedlist.jpg)


## Singly Linked Lists - extend

### Challenge
- Add the following methods to the LinkedList class
1. `append()` 2. `insertBefore()` 3. `insertAfter()`

### Approach & Efficiency
1. Create a new Node, traverse to the end, point the new Node at the end, and reassign the previous end to point at the new Node 
2. Create a new Node, traverse until reaching the target node (one before current), point new Node at to the place the current node is pointing, reassign the target node to point to the new Node
3. Create new Node, traverse until reaching the target node (matches value), point new Node to same place as current node is pointing, reassign target node to point and new Node

### Solution
![Whiteboard for Class06](/link-list/singlylinklistextended.jpg)