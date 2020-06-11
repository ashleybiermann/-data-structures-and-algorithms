'use strict';

const binarySearch = require('./array-binary-search.js');

describe('Testing binary search code challenges, A', () => {
  it('Should reverse an array', () => {
    //here is where js goes
    const testArr = [4,8,15,16,23,42]
    const testKey = 15;
    const searchBinary = binarySearch(testArr, testKey);
    expect(searchBinary).toStrictEqual(2);
  });
});

describe('Testing binary array code challenges, B', () => {
  it('Should reverse an array', () => {
    //here is where js goes
    const testArr = [11,22,33,44,55,66,77]
    const testKey = 90;
    const searchBinary = binarySearch(testArr, testKey);
    expect(searchBinary).toStrictEqual(-1);
  });
});

