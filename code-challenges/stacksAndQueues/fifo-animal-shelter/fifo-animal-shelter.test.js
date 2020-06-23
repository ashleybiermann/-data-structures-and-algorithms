'use strict';

const test = require('./fifo-animal-shelter.js');
const testShelter = new test.AnimalShelter();
const testDog1 = new test.Animal('dog1', 'dog');
const testDog2 = new test.Animal('dog2', 'dog');
const testCat1 = new test.Animal('cat1', 'cat');
const testCat2 = new test.Animal('cat2', 'cat');

testShelter.enqueue(testDog1);
testShelter.enqueue(testDog2);
testShelter.enqueue(testCat1);
testShelter.enqueue(testCat2);

describe('Testing AnimalShelter', () => {
  it('')
})