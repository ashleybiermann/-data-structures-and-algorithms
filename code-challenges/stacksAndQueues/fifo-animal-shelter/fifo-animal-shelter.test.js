'use strict';

const test = require('./fifo-animal-shelter.js');
const Shelter = new test.AnimalShelter();
const Dog1 = new test.Animal('dog1', 'dog');
const Dog2 = new test.Animal('dog2', 'dog');
const Cat1 = new test.Animal('cat1', 'cat');
const Cat2 = new test.Animal('cat2', 'cat');


describe('Testing AnimalShelter', () => {
  it('Should enqueue 2 dogs into the queue', () => {
    Shelter.enqueue(Dog1);
    Shelter.enqueue(Dog2);
    expect(Shelter.dogArr.length).toEqual(2);
  });
  it('Should enqueue 2 cats into the queue', () => {
    Shelter.enqueue(Cat1);
    Shelter.enqueue(Cat2);
    expect(Shelter.catArr.length).toEqual(2);
  });
  it('Should dequeue one dog from the queue', () => {
    Shelter.dequeue('dog');
    expect(Shelter.dogArr.length).toEqual(1);
    expect(Shelter.dogArr[0].name).toEqual('dog2')
  });
  it('Should dequeue one cat from the queue', () => {
    Shelter.dequeue('cat');
    expect(Shelter.catArr.length).toEqual(1);
    expect(Shelter.catArr[0].name).toEqual('cat2')
  });
});