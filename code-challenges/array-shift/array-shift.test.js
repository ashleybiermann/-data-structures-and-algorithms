'use strict';

const insertShiftArray = require('./array-shift.js');

describe('Testing array-shift code challenges', () => {
  it('Should add one value to the middle of an array', () => {
    //here is where js goes
    const testArray = [2,4,6,8];
    const testValue = 5;
    const returnValue = insertShiftArray(testArray, testValue);
    expect(returnValue).toStrictEqual([2,4,5,6,8]);
  });
});