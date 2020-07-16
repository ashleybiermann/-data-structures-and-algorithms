'use strict';

function quickSort(arr, left, right) {
  if (arr.length <= 1) {
    return arr;
  }

  let position = partition(arr, left, right);
  if (left < (position - 1)) {
    quickSort(arr, left, (position - 1));
  }
  if (position < right) {
    quickSort(arr, position, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];
  let leftPointer = left;
  let rightPointer = right;

  while (leftPointer <= rightPointer) {
    while (arr[leftPointer] < pivot) {
      leftPointer++;
    }
    while (arr[rightPointer] > pivot) {
      rightPointer--;
    }
    if (leftPointer <= rightPointer) {
      swap(arr, leftPointer, rightPointer);
      leftPointer++;
      rightPointer--;
    }
  }
  return leftPointer;
}

function swap(arr, leftIndex, rightIndex) {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

module.exports = quickSort;