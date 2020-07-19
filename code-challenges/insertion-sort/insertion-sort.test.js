'use strict';

const insertionSort = require('./insertion-sort.js');

const testArr1 = [8, 4, 23, 42, 16, 15];
const testArr2 = [20,18,12,8,5,-2];
const testArr3 = [5,12,7,5,5,7];
const testArr4 = [2,3,5,7,13,11];

describe('Testing insertionSort function', () => {
  it('Should sort the array in ascending order', () => {
    expect(insertionSort(testArr1)).toStrictEqual([ 4, 8, 15, 16, 23, 42 ]);
  });
  it('Should sort the array in ascending order', () => {
    expect(insertionSort(testArr2)).toStrictEqual([ -2, 5, 8, 12, 18, 20 ]);
  });
  it('Should sort the array in ascending order', () => {
    expect(insertionSort(testArr3)).toStrictEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  it('Should sort the array in ascending order', () => {
    expect(insertionSort(testArr4)).toStrictEqual([ 2, 3, 5, 7, 11, 13 ]);
  });
});
