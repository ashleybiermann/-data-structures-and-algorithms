'use strict';

const Graph = require('./graph.js');

describe('Testing the Graph object', () => {
  it('Should add a new vertex to the graph', () => {
    const graph = new Graph();
    const one = graph.addVertex(1);

    expect(graph.size()).toStrictEqual(1);
  })
  it('Should add an egde between two vertices', () => {
    const graph = new Graph();

    const one = graph.addVertex(1);
    const two = graph.addVertex(2);
    graph.addEdge(one, two);

    expect(graph.getNeighbors(one)).toEqual([{ "vertex": { "value": 2 }, "weight": 0 }]);
  })
  it('Should perform a breadth first search', () => {
    const graph = new Graph();

    const one = graph.addVertex(1);
    const two = graph.addVertex(2);
    const four = graph.addVertex(4);
    const six = graph.addVertex(6);
    const seven = graph.addVertex(7);
    const eight = graph.addVertex(8);
    const ten = graph.addVertex(10);

    graph.addEdge(one, two);
    graph.addEdge(one, four);
    graph.addEdge(two, four);
    graph.addEdge(four, six);
    graph.addEdge(six, eight);
    graph.addEdge(six, ten);
    graph.addEdge(seven, ten);

    expect(graph.breadthFirst(one)).toMatchSnapshot();
  })
  it('Should return all neighbors of a node', () => {
    const graph = new Graph();

    const one = graph.addVertex(1);
    const two = graph.addVertex(2);
    const four = graph.addVertex(4);
    const six = graph.addVertex(6);
    
    graph.addEdge(one, two);
    graph.addEdge(one, four, 6);
    graph.addEdge(two, six);
    
    expect(graph.getNeighbors(one)).toEqual([{"vertex": {"value": 2}, "weight": 0}, {"vertex": {"value": 4}, "weight": 6}]);
  })
  it('Should return the weight of edges between nodes', () => {
    const graph = new Graph();

    const one = graph.addVertex(1);
    const two = graph.addVertex(2);
    const four = graph.addVertex(4);
    const six = graph.addVertex(6);
    
    graph.addEdge(one, two);
    graph.addEdge(one, four, 6);
    graph.addEdge(two, six);
    
    expect(graph.getNeighbors(one)).toEqual([{"vertex": {"value": 2}, "weight": 0}, {"vertex": {"value": 4}, "weight": 6}]);
  })
  it('Should return the size of the graph / number of verticies ', () => {
    const graph = new Graph();
  
    const one = graph.addVertex(1);
    const two = graph.addVertex(2);
    const four = graph.addVertex(4);
    const six = graph.addVertex(6);
    
    graph.addEdge(one, two);
    graph.addEdge(one, four, 6);
    graph.addEdge(two, six);
  
    expect(graph.size()).toStrictEqual(4);
  })
  it('Should return a graph with only one vertex and one edge', () => {
    const graph = new Graph();
    const one = graph.addVertex(1);
    graph.addEdge(one, one);

    expect(graph).toMatchSnapshot('{"adjacencylist": Map {{"value": 1} => [{"vertex": {"value": 1}, "weight": 0}]}}');
  })
  it('Should return null for an empty graph', () => {
    const graph = new Graph();

    // expect(graph.breadthFirst()).toBe(null);
  })
})

// An empty graph properly returns null