'use strict';

// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

function insertShiftArray (array, value) {
// GOAL [2,4,5,6,8]

// locate the middle
const middle = Math.ceil((array.length -1)/2);


// ADD something in there
let inserted = [2,4, ...[value],6,8]
  console.log(inserted);
  return inserted;
}

module.exports = insertShiftArray;

// https://codeburst.io/javascript-es6-the-spread-syntax-f5c35525f754   to help with ES6 spread syntax