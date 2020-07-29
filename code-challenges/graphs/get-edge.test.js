'use strict';

const Graph = require('./graph.js');
const getEdges = require('./get-edge.js');

describe('Testing getEdges function', () => {
  it('Should accept an array and return true with a dollar amount for a one way trip between the cities', () => {
    let graph = new Graph();

    const pandora = graph.addVertex('Pandora');
    const arendelle = graph.addVertex('Arendelle');
    const monstropolis = graph.addVertex('Monstropolis');
    const naboo = graph.addVertex('Naboo');
    const narnia = graph.addVertex('Narnia');
    const metroville = graph.addVertex('Metroville');

    graph.addEdge(pandora, arendelle, 150);
    graph.addEdge(pandora, metroville, 82);
    graph.addEdge(arendelle, metroville, 99);
    graph.addEdge(arendelle, monstropolis, 42);
    graph.addEdge(metroville, monstropolis, 105);
    graph.addEdge(metroville, narnia, 37);
    graph.addEdge(metroville, naboo, 26);
    graph.addEdge(narnia, naboo, 250);
    graph.addEdge(monstropolis, naboo, 73);

    expect(getEdges([arendelle, monstropolis, naboo])).toEqual('True, $115');
  });
  it('Should return false if there are no direct paths between the cities', () => {
    let graph = new Graph();

    const pandora = graph.addVertex('Pandora');
    const arendelle = graph.addVertex('Arendelle');
    const monstropolis = graph.addVertex('Monstropolis');
    const naboo = graph.addVertex('Naboo');
    const narnia = graph.addVertex('Narnia');
    const metroville = graph.addVertex('Metroville');

    graph.addEdge(pandora, arendelle, 150);
    graph.addEdge(pandora, metroville, 82);
    graph.addEdge(arendelle, metroville, 99);
    graph.addEdge(arendelle, monstropolis, 42);
    graph.addEdge(metroville, monstropolis, 105);
    graph.addEdge(metroville, narnia, 37);
    graph.addEdge(metroville, naboo, 26);
    graph.addEdge(narnia, naboo, 250);
    graph.addEdge(monstropolis, naboo, 73);
    
    expect(getEdges([arendelle, naboo, pandora])).toEqual('False, $0');
  });
})