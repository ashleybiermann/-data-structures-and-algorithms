'use strict';

const Graph = require('./graph.js');

// function that takes in starting node and destination(s)
// total cost = 0
// check starting node for neighbors
  // if not a neighbor, return false
  // if next destination is a neighbor
    // add the weight of connecting edge to total cost
    // make destination city the new starting node
  // repeat on the again until all cities in input have been checked
// return boolean, and edge weight total cost

function getEdges (arr) {
  
  let totalCost = 0;

  for (let i = 0; i < (arr.length - 1) ; i++) {
    let startingHere = arr[i];
    let canIGoHere = arr[i + 1];
    helper(startingHere, canIGoHere);
  }

  function helper (startingVertex, destinationVertex) {

    let destinationCity = destinationVertex.value;
  
    let connectedCities = graph.getNeighbors(startingVertex);
  
    for (let i = 0; i < connectedCities.length; i++) {

      let connectedCity = connectedCities[i].vertex.value;
      let connectedCityInfo = connectedCities[i];
  
      if (destinationCity === connectedCity) {
        console.log('Match~!')
        totalCost += connectedCityInfo.weight;
      }
    }
    console.log('totalcosssst', totalCost)
  }
  if (totalCost === 0) {
    return `False, $0`;
  }
  return `True, $${totalCost}`;
}


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
graph.addEdge(metroville,monstropolis, 105);
graph.addEdge(metroville, narnia, 37);
graph.addEdge(metroville, naboo, 26);
graph.addEdge(narnia, naboo, 250);
graph.addEdge(monstropolis, naboo, 73);


console.log(getEdges([arendelle, monstropolis, naboo]));

module.exports = getEdges;