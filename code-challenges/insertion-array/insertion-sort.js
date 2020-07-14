'use strict';

function insertionSort(inputArr) {
  for (let i = 1; i < inputArr.length; i++) {
    let j = i - 1;
    let temp = inputArr[i];
    while (j >= 0 && temp < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
      inputArr[j + 1] = temp;    
  }   
  return inputArr;   
};


module.exports = insertionSort;
