'use strict';

// const Graph = require('./graph.js');

// function that takes in starting node and destination(s)
// total cost = 0
// check starting node for neighbors
  // if not a neighbor, return false
  // if next destination is a neighbor
    // add the weight of connecting edge to total cost
    // make destination city the new starting node
  // repeat on the again until all cities in input have been checked
// return boolean, and edge weight total cost

function getEdges (arr, inputGraph) {
  
  let totalCost = 0; // total of edges
  let flightLegs = arr.length - 1; // number of direct flights requests
  let directAvailable = 0; // number of direct flights found

  // iterates through each index, looking for a match to the next one in the arr, until it gets to the second to last one (because you can't check the final flight against the next non-existent one!)
  for (let i = 0; i < (arr.length - 1) ; i++) {
    let startingHere = arr[i]; 
    let canIGoHere = arr[i + 1];
    helper(startingHere, canIGoHere);
  }

  function helper (startingVertex, destinationVertex) {

    let destinationCity = destinationVertex.value;
    let connectedCities = inputGraph.getNeighbors(startingVertex);
  
    for (let i = 0; i < connectedCities.length; i++) {

      let connectedCity = connectedCities[i].vertex.value;
      let connectedCityInfo = connectedCities[i];
  
      if (destinationCity === connectedCity) {
        directAvailable += 1; // add one to the direct flights needed count

        totalCost += connectedCityInfo.weight; // add the weight of the edge (cost of the flight) to the total
      } 
    }
  }

  // check if the total number of flights found matches to total number of flights needed
  
  if (directAvailable !== flightLegs) {
    return `False, $0`;
  }
  return `True, $${totalCost}`;
}


// let graph = new Graph();

// const pandora = graph.addVertex('Pandora');
// const arendelle = graph.addVertex('Arendelle');
// const monstropolis = graph.addVertex('Monstropolis');
// const naboo = graph.addVertex('Naboo');
// const narnia = graph.addVertex('Narnia');
// const metroville = graph.addVertex('Metroville');

// graph.addEdge(pandora, arendelle, 150);
// graph.addEdge(pandora, metroville, 82);
// graph.addEdge(arendelle, metroville, 99);
// graph.addEdge(arendelle, monstropolis, 42);
// graph.addEdge(metroville,monstropolis, 105);
// graph.addEdge(metroville, narnia, 37);
// graph.addEdge(metroville, naboo, 26);
// graph.addEdge(narnia, naboo, 250);
// graph.addEdge(monstropolis, naboo, 73);


// console.log(getEdges([arendelle, monstropolis, naboo]));

// console.log(getEdges([arendelle, monstropolis, narnia]));

module.exports = getEdges;