'use strict';

function quickSort(arr, left, right) {
  if(left < right) {

    let position = partition(arr, left, right);

    quickSort(arr, left, (position-1));

    quickSort(arr, (position + 1), right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left -1;

  for(let i = 0; i < /*left to right*/; i++) {
    if(arr[i] <= pivot) {
      low = low + 1;
      swap(arr, i, low);
    }
  }
  swap(arr, right, (low + 1));
  return (low + 1);
}

function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;