'use strict';

const Graph = require('./graph.js');

// write a function that takes in a graph and a starting root
// LET VISITEDNODES = NEW SET();
// LET STACK = NEW [];
// make sure the root exists in the graph
// add the root to the VISITEDNODES list
// add the root to a stack array
// find the first child it has
// check to see if it's already been visited
// if alraedy visited, pass it
// if not already visited, move to it and make it the new root
// add it to the VISITED NODES set
// add it to the STACK
// find its children, look for the first one that hasn't been seen yet
// once you get to a node where all of its children have been seen, POP it off the STACK
// look and the next node on the top of the stack
// check its children, and 
// if all have been seen, POP it off the stack
// if there is an unvisited one, go to that one first
// check if it's chilren have been seen
// continue to the path of the first child than hasn't been seen







function depthFirstPre (inputGraph, root) {
// check to see if the root that was passed in even exists in the graph
  if (!inputGraph.adjencylist.has(root)) {
    return 'Root does not exist in this graph';
  }

  const stack = [];
  const visitedNodes = new Set ();

  visitedNodes.add(root);
  stack.push(root);

  // check its adjacency list for hte first child that exists
  let neighbors = getNeighbors(root);

}



modules.export = depthFirstPre;


const graph = new Graph();

const a = graph.addVertex('a')
const b = graph.addVertex('b')
const c = graph.addVertex('c')
const d = graph.addVertex('d')
const e = graph.addVertex('e')
const f = graph.addVertex('f')
const g = graph.addVertex('g')
const h = graph.addVertex('h')

graph.addEdge(a, b)
graph.addEdge(b, a)

graph.addEdge(a, d)
graph.addEdge(d, a)

graph.addEdge(b, c)
graph.addEdge(c, b)

graph.addEdge(b, d)
graph.addEdge(d, b)

graph.addEdge(c, g)
graph.addEdge(g, c)

graph.addEdge(d, e)
graph.addEdge(e, d)

graph.addEdge(d, h)
graph.addEdge(h, d)

graph.addEdge(d, f)
graph.addEdge(f, d)

graph.addEdge(h, f)
graph.addEdge(f, h)
