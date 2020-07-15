'use strict';


function mergeSort(arr) {
  // only sort if the array is longer than 1
  if (arr.length <= 1) {
    return arr;
  }

  // find middle of array (will recurse this)
  const mid = Math.floor(arr.length/2);
  // divide and conquer! left and right sides
  const left = mergeSort(arr.slice(0, mid)); // recursion to divid all of sub arrays
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let arr = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  if (left.length > 0) {
    return arr.concat(left);
  }
  return arr.concat(right);
}

const testArr1 = [8, 4, 23, 42, 16, 15];
console.log(mergeSort(testArr1));

module.exports = mergeSort;