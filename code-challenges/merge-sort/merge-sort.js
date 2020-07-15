'use strict';


function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n/2); // round down for odd nums
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    return merge(left, right);
  }
}

function merge(left, right) {
  let arr = [];
  let i = 0; // left index
  let j = 0; // right index

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1; // increment the left index tracker
    } else {
      arr[k] = right[j];
      j = j + 1; // increment the right index tracker
    }
    k = k + 1;

    if (i === left.length) {
      arr.concat(right);
    } else {
      arr.concat(left);
    }
  }
  return arr;
}

module.exports = mergeSort;