'use strict';

//returns an array
function reverseArray(arr) {

  let reversed = [];
  let i = arr.length - 1;
  for (i; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

module.exports = reverseArray;