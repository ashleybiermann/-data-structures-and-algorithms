'use strict';

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class AnimalShelter {
  constructor() {
    this.dogArr = [];
    this.catArr = [];
  }

  enqueue(animal){
    if (animal.type === 'dog') {
      this.dogArr.push(animal);
    } else {
      this.catArr.push(animal);
    }
  }
  
  dequeue(pref) {
    let luckyAnimal = '';
    if (pref === 'dog') {
      luckyAnimal = this.dogArr[0];
      this.dogArr.shift();
    } else if (pref === 'cat') {
      luckyAnimal = this.catArr[0];
      this.catArr.shift();
    } else {
      return null;
    }
    return luckyAnimal;
  }
}

let myShelter = new AnimalShelter;

const doggy1 = new Animal('doggy1', 'dog');
const doggy2 = new Animal('doggy2', 'dog');
const kitty1 = new Animal('kitty1', 'cat');
const kitty2 = new Animal('kitty2', 'cat');

myShelter.enqueue(doggy1);
myShelter.enqueue(doggy2);
myShelter.enqueue(kitty1);
myShelter.enqueue(kitty2);

console.log(myShelter.dequeue('cat'));
console.log(myShelter);

module.exports = {
  AnimalShelter,
  Animal
}