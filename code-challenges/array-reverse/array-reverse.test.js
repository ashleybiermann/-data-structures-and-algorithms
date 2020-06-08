'use strict';

const arrayReverse = require('./array-reverse.js');

describe('Testing array code challenges', () => {
  it('Should reverse an array', () => {
    //here is where js goes
    const testArray = [1,2,3,4,5];
    const reverseArray = arrayReverse(testArray);

    expect(reverseArray).not.toStrictEqual(testArray);
    expect(reverseArray).toStrictEqual([5,4,3,2,1]);
  });
});
